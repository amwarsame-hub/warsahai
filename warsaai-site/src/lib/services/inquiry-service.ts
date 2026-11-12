import { supabase } from "@/integrations/supabase/client";
import { appConfig } from "@/utils/app-config";
import { FunctionsHttpError } from "@supabase/supabase-js";

export const INQUIRY_MESSAGE_MAX = 5000;

export const INQUIRY_TONES = [
  { value: "friendly", label: "Friendly" },
  { value: "formal", label: "Formal" },
  { value: "concise", label: "Short and direct" },
] as const;

export type InquiryTone = (typeof INQUIRY_TONES)[number]["value"];
export type InquiryUrgency = "high" | "normal" | "low";

export const INQUIRY_CATEGORY_LABELS: Record<string, string> = {
  ai_services: "AI services",
  training: "In-house training",
  academy: "Academy",
  pricing: "Pricing",
  partnership: "Partnership",
  support: "Support",
  press: "Press & speaking",
  careers: "Careers",
  feedback: "Feedback",
  spam: "Spam",
  other: "Other",
};

export interface InquiryInput {
  message: string;
  visitorName?: string;
  visitorEmail?: string;
  subject?: string;
  adminNotes?: string;
  tone: InquiryTone;
  /** Name the reply is signed with. */
  signOff?: string;
}

export interface InquiryAnalysis {
  category: string;
  urgency: InquiryUrgency;
  summary: string;
  replySubject: string;
  replyBody: string;
  reviewNotes: string[];
}

/** Sends a visitor message to the admin-only edge function that categorises it and drafts a reply. */
export const analyseInquiry = async ({ signOff, ...input }: InquiryInput): Promise<InquiryAnalysis> => {
  const { data, error } = await supabase.functions.invoke<InquiryAnalysis & { error?: string }>(
    "inquiry-assistant",
    {
      body: {
        ...input,
        business: {
          name: appConfig.name,
          description: appConfig.description,
          contactEmail: appConfig.contact.email,
          signOff: signOff ? `${signOff} at ${appConfig.name}` : appConfig.name,
        },
      },
    },
  );

  if (error) {
    // Non-2xx responses carry the function's own message in the response body.
    if (error instanceof FunctionsHttpError) {
      const payload = await error.context.json().catch(() => null);
      if (payload?.error) throw new Error(payload.error);
    }
    throw new Error("Could not reach the inquiry assistant. Check that the function is deployed.");
  }
  if (!data?.replyBody) throw new Error(data?.error || "The assistant returned an empty answer.");

  return data;
};

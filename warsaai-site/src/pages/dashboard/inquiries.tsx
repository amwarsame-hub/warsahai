import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useMutation } from "@tanstack/react-query";
import { AlertTriangle, Loader2, Mail, RotateCcw, Sparkles } from "lucide-react";
import { toast } from "sonner";
import BlogLayout from "@/components/dashboard/blog-layout";
import { Button } from "@/components/ui/button";
import CopyButton from "@/components/ui/copy-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/hooks/use-auth";
import {
  analyseInquiry,
  INQUIRY_CATEGORY_LABELS,
  INQUIRY_MESSAGE_MAX,
  INQUIRY_TONES,
  type InquiryAnalysis,
  type InquiryTone,
  type InquiryUrgency,
} from "@/lib/services/inquiry-service";
import { cn } from "@/lib/utils";
import { appConfig } from "@/utils/app-config";

const fieldClass = "bg-foreground border-white/10 text-white placeholder:text-muted-foreground";

const urgencyStyles: Record<InquiryUrgency, { label: string; className: string }> = {
  high: { label: "High urgency", className: "bg-red-500/10 text-red-400 border-red-500/20" },
  normal: { label: "Normal urgency", className: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
  low: { label: "Low urgency", className: "bg-white/5 text-muted-foreground border-white/10" },
};

const emptyForm = {
  visitorName: "",
  visitorEmail: "",
  subject: "",
  message: "",
  adminNotes: "",
  tone: "friendly" as InquiryTone,
};

const InquiryAssistant = () => {
  const { profile } = useAuth();
  const [form, setForm] = useState(emptyForm);
  const [result, setResult] = useState<InquiryAnalysis | null>(null);
  // The draft is editable, so it lives apart from the model's original answer.
  const [replySubject, setReplySubject] = useState("");
  const [replyBody, setReplyBody] = useState("");

  const set = (field: keyof typeof emptyForm) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((current) => ({ ...current, [field]: event.target.value }));

  const analysis = useMutation({
    mutationFn: analyseInquiry,
    onSuccess: (data) => {
      setResult(data);
      setReplySubject(data.replySubject);
      setReplyBody(data.replyBody);
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const message = form.message.trim();
  const canSubmit = message.length >= 10 && !analysis.isPending;

  const submit = (event?: React.FormEvent) => {
    event?.preventDefault();
    if (!canSubmit) return;
    analysis.mutate({ ...form, message, signOff: profile?.first_name || undefined });
  };

  const reset = () => {
    setForm(emptyForm);
    setResult(null);
    setReplySubject("");
    setReplyBody("");
    analysis.reset();
  };

  const visitorEmail = form.visitorEmail.trim();
  const mailtoHref = `mailto:${encodeURIComponent(visitorEmail)}?subject=${encodeURIComponent(
    replySubject,
  )}&body=${encodeURIComponent(replyBody)}`;

  return (
    <BlogLayout
      breadcrumbs={[{ label: "Dashboard", to: "/dashboard/blog" }, { label: "Inquiry Assistant" }]}
    >
      <Helmet>
        <title>{`Inquiry Assistant | ${appConfig.name}`}</title>
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-white">Inquiry Assistant</h1>
          <p className="mt-1 text-sm text-muted-foreground max-w-2xl">
            Paste a message from a visitor. The assistant sorts it into a category and drafts a
            reply for you to edit and send — nothing is sent automatically.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2 items-start">
          {/* Visitor message */}
          <form onSubmit={submit} className="rounded-xl border border-white/10 p-4 sm:p-6 space-y-5">
            <h2 className="text-base font-medium text-white">Visitor message</h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="visitor-name" className="text-white">Name</Label>
                <Input
                  id="visitor-name"
                  value={form.visitorName}
                  onChange={set("visitorName")}
                  placeholder="Optional"
                  maxLength={200}
                  autoComplete="off"
                  className={cn(fieldClass, "h-11")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="visitor-email" className="text-white">Email</Label>
                <Input
                  id="visitor-email"
                  type="email"
                  value={form.visitorEmail}
                  onChange={set("visitorEmail")}
                  placeholder="Optional — used for “Open in email”"
                  maxLength={200}
                  autoComplete="off"
                  className={cn(fieldClass, "h-11")}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="visitor-subject" className="text-white">Subject</Label>
              <Input
                id="visitor-subject"
                value={form.subject}
                onChange={set("subject")}
                placeholder="Optional"
                maxLength={200}
                className={cn(fieldClass, "h-11")}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline justify-between gap-3">
                <Label htmlFor="visitor-message" className="text-white">Message</Label>
                <span className="text-xs text-muted-foreground tabular-nums">
                  {form.message.length} / {INQUIRY_MESSAGE_MAX}
                </span>
              </div>
              <Textarea
                id="visitor-message"
                value={form.message}
                onChange={set("message")}
                placeholder="Paste the visitor's message here"
                maxLength={INQUIRY_MESSAGE_MAX}
                required
                className={cn(fieldClass, "min-h-[180px]")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="admin-notes" className="text-white">Points to include in the reply</Label>
              <Textarea
                id="admin-notes"
                value={form.adminNotes}
                onChange={set("adminNotes")}
                placeholder="Optional — e.g. offer a call on Thursday, mention the Saturday sessions"
                maxLength={1000}
                className={cn(fieldClass, "min-h-[72px]")}
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end gap-4">
              <div className="space-y-2 sm:w-48">
                <Label htmlFor="reply-tone" className="text-white">Tone</Label>
                <select
                  id="reply-tone"
                  value={form.tone}
                  onChange={set("tone")}
                  className="h-11 w-full px-3 rounded-[10px] bg-foreground border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {INQUIRY_TONES.map((tone) => (
                    <option key={tone.value} value={tone.value}>
                      {tone.label}
                    </option>
                  ))}
                </select>
              </div>
              <Button type="submit" disabled={!canSubmit} className="h-11 sm:ml-auto">
                {analysis.isPending ? <Loader2 className="animate-spin" /> : <Sparkles />}
                {analysis.isPending ? "Working…" : result ? "Draft again" : "Categorise and draft reply"}
              </Button>
            </div>
          </form>

          {/* Result */}
          <div className="rounded-xl border border-white/10 p-4 sm:p-6 space-y-5" aria-live="polite">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-base font-medium text-white">Suggested reply</h2>
              {result && (
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-white transition-colors"
                >
                  <RotateCcw className="size-3.5" />
                  Start over
                </button>
              )}
            </div>

            {analysis.isPending ? (
              <div className="flex flex-col items-center justify-center gap-3 py-16 text-sm text-muted-foreground">
                <Loader2 className="size-6 animate-spin text-primary" />
                Reading the message and drafting a reply…
              </div>
            ) : !result ? (
              <p className="py-16 text-center text-sm text-muted-foreground">
                The category, a short summary and a draft reply will appear here.
              </p>
            ) : (
              <>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {INQUIRY_CATEGORY_LABELS[result.category] ?? result.category}
                  </span>
                  <span
                    className={cn(
                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
                      urgencyStyles[result.urgency].className,
                    )}
                  >
                    {urgencyStyles[result.urgency].label}
                  </span>
                </div>

                {result.summary && <p className="text-sm text-white/80">{result.summary}</p>}

                {result.reviewNotes.length > 0 && (
                  <div className="rounded-[10px] border border-amber-500/20 bg-amber-500/10 p-3 text-sm text-amber-200">
                    <p className="flex items-center gap-2 font-medium">
                      <AlertTriangle className="size-4 shrink-0" />
                      Check before sending
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      {result.reviewNotes.map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="reply-subject" className="text-white">Subject</Label>
                  <Input
                    id="reply-subject"
                    value={replySubject}
                    onChange={(event) => setReplySubject(event.target.value)}
                    className={cn(fieldClass, "h-11")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reply-body" className="text-white">Reply</Label>
                  <Textarea
                    id="reply-body"
                    value={replyBody}
                    onChange={(event) => setReplyBody(event.target.value)}
                    className={cn(fieldClass, "min-h-[280px] leading-relaxed")}
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <CopyButton text={replyBody} label="Copy reply" inverted />
                  {visitorEmail && (
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full border border-white/20 text-xs font-medium text-muted hover:border-white/50 hover:text-white transition-colors"
                    >
                      <Mail className="size-3.5" />
                      Open in email
                    </a>
                  )}
                  <span className="text-xs text-muted-foreground">
                    AI draft — read it through before you send.
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </BlogLayout>
  );
};

export default InquiryAssistant;

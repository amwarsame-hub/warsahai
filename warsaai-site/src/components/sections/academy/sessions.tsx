import Container from "@/components/container";
import SectionHeading from "@/components/sections/shared/section-heading";
import LevelBadge from "@/components/ui/level-badge";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { sessionTopics } from "@/data/academy-interactive";
import { appConfig, mailto } from "@/utils/app-config";
import { useMemo } from "react";

/** The next `count` Saturdays, starting with today if today is one. */
const upcomingSaturdays = (count: number) => {
  const day = new Date();
  day.setHours(0, 0, 0, 0);
  day.setDate(day.getDate() + ((6 - day.getDay() + 7) % 7));
  return Array.from({ length: count }, (_, week) => {
    const date = new Date(day);
    date.setDate(day.getDate() + week * 7);
    return date.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
  });
};

const signUpLink = (date: string, topic: string) =>
  mailto(
    `${appConfig.name} — Sign Up: ${topic}`,
    `Hi,\n\nI would like to join the workshop taking place on ${date}.\n\nTopic: ${topic}\n\nPlease confirm my registration.\n\nThank you.`,
  );

const Sessions = () => {
  const sessions = useMemo(() => {
    const dates = upcomingSaturdays(sessionTopics.length);
    return sessionTopics.map((session, index) => ({ ...session, date: dates[index] }));
  }, []);

  return (
    <section className="md:py-20 xl:py-28 py-12 scroll-mt-24" id="sessions">
      <Container className="space-y-8 md:space-y-12">
        <SectionHeading
          eyebrow="Live schedule"
          title="Upcoming Sessions"
          description="All classes are held every Saturday. Spots are limited to maintain quality discussion."
        />

        <AnimateOnView once y={40} className="overflow-hidden rounded-lg bg-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-border text-sm text-muted-foreground">
                  <th className="px-5 py-4 font-medium">Date</th>
                  <th className="px-5 py-4 font-medium">Module</th>
                  <th className="px-5 py-4 font-medium">Topic</th>
                  <th className="px-5 py-4 font-medium">Level</th>
                  <th className="px-5 py-4 font-medium">
                    <span className="sr-only">Sign up</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((session) => (
                  <tr key={session.module} className="border-b border-border last:border-b-0">
                    <td className="px-5 py-4 font-medium text-foreground whitespace-nowrap">{session.date}</td>
                    <td className="px-5 py-4 text-muted-foreground whitespace-nowrap">Module {session.module}</td>
                    <td className="px-5 py-4 text-card-foreground">{session.topic}</td>
                    <td className="px-5 py-4">
                      <LevelBadge level={session.level} />
                    </td>
                    <td className="px-5 py-4 text-right">
                      <a
                        href={signUpLink(session.date, session.topic)}
                        className="inline-flex h-9 items-center rounded-full border border-border px-4 text-sm font-medium text-primary transition-colors hover:border-primary hover:bg-brand-sky/40 whitespace-nowrap"
                      >
                        Sign up
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateOnView>
      </Container>
    </section>
  );
};

export default Sessions;

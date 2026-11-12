import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { founder } from "@/data/founder";
import { appConfig } from "@/utils/app-config";
import { AtSign, Check, GraduationCap, Mail, MapPin, Phone, Star } from "lucide-react";

const pill = "inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm";

const SkillGroup = ({ label, children }: { label: React.ReactNode; children: React.ReactNode }) => (
    <div>
        <h3 className="mb-3 flex items-center gap-2 font-semibold text-foreground">{label}</h3>
        <ul className="flex flex-wrap gap-2">{children}</ul>
    </div>
);

const CEOProfile = () => {
    const { contact, social } = appConfig;
    const contacts = [
        { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
        { icon: Phone, label: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
        { icon: MapPin, label: contact.location },
        { icon: AtSign, label: contact.handle.replace(/^@/, ""), href: social.instagram },
    ];

    return (
        <section className="md:py-20 xl:py-28 py-12 scroll-mt-24" id="founder">
            <Container className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:gap-16">
                {/* Profile */}
                <div>
                    <AnimateOnView once blur className="mb-6 flex items-center gap-5">
                        <div className="relative size-24 shrink-0 overflow-hidden rounded-full bg-secondary ring-4 ring-card shadow-sm md:size-32">
                            {/* The source file has a transparent margin around the portrait; these offsets crop to the photo itself. */}
                            <img
                                src={founder.photo}
                                alt={`${founder.name}, ${founder.role} of ${appConfig.name}`}
                                className="absolute max-w-none w-[247.54%] left-[-65.52%] top-[-19.66%]"
                            />
                        </div>
                        <div>
                            <Badge className="mb-2">{founder.role}</Badge>
                            <h2 className="h3 text-foreground">{founder.name}</h2>
                        </div>
                    </AnimateOnView>

                    <AnimateOnView once delay={0.1}>
                        <p className="mb-5 text-lg text-muted-foreground">
                            {founder.tagline} · {contact.location}
                        </p>
                        <div className="space-y-4 text-lg text-card-foreground">
                            {founder.bio.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                    </AnimateOnView>

                    <AnimateOnView once delay={0.2}>
                        <ul className="mt-8 flex flex-wrap gap-3">
                            {contacts.map(({ icon: Icon, label, href }) => {
                                const className =
                                    "inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm text-card-foreground";
                                const content = (
                                    <>
                                        <Icon className="size-4 text-primary" />
                                        {label}
                                    </>
                                );
                                return (
                                    <li key={label}>
                                        {href ? (
                                            <a
                                                href={href}
                                                className={`${className} transition-colors hover:border-primary hover:text-primary`}
                                                {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                                            >
                                                {content}
                                            </a>
                                        ) : (
                                            <span className={className}>{content}</span>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                        <img
                            src="/images/company/signature.svg"
                            alt={`${founder.name} signature`}
                            className="mt-8 h-12 w-auto"
                            loading="lazy"
                        />
                    </AnimateOnView>
                </div>

                {/* Skills & education */}
                <AnimateOnView once y={40} delay={0.2}>
                    <Card className="rounded-lg p-6 md:p-8">
                        <CardContent className="space-y-7">
                            <SkillGroup
                                label={
                                    <>
                                        <Star className="size-4 fill-primary text-primary" />
                                        Top Skills
                                    </>
                                }
                            >
                                {founder.topSkills.map((skill) => (
                                    <li key={skill} className={`${pill} bg-brand-sky/40 font-medium text-primary`}>
                                        {skill}
                                    </li>
                                ))}
                            </SkillGroup>

                            {founder.skillGroups.map((group) => (
                                <SkillGroup key={group.label} label={group.label}>
                                    {group.items.map((skill) => (
                                        <li key={skill} className={`${pill} bg-secondary text-card-foreground`}>
                                            {skill}
                                        </li>
                                    ))}
                                </SkillGroup>
                            ))}

                            <SkillGroup label={founder.certifications.label}>
                                {founder.certifications.items.map((name) => (
                                    <li key={name} className={`${pill} border border-primary/30 text-primary`}>
                                        {name}
                                        <Check className="size-3.5" />
                                    </li>
                                ))}
                            </SkillGroup>

                            <div>
                                <h3 className="mb-3 font-semibold text-foreground">Education &amp; Training</h3>
                                <ul className="space-y-3">
                                    {founder.education.map((item) => (
                                        <li key={item.qualification} className="flex items-start gap-3">
                                            <GraduationCap className="mt-0.5 size-5 shrink-0 text-primary" />
                                            <div className="text-sm">
                                                <p className="font-medium text-foreground">{item.qualification}</p>
                                                <p className="text-muted-foreground">{item.institution}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </AnimateOnView>
            </Container>
        </section>
    );
};

export default CEOProfile;

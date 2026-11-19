import { BlogBody } from "@/components/blog-body";
import Container from "@/components/container";
import NewsletterForm from "@/components/newsletter-form";
import { Card } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { BlogPost } from "@/lib/services/blog-service";
import { Button } from "@/components/ui/button";
import DOMPurify from "dompurify";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const hostname = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

interface BlogDetailsContentProps {
  post: BlogPost;
}

const BlogDetailsContent = ({ post }: BlogDetailsContentProps) => {

  // Sanitize HTML content to prevent XSS attacks
  const sanitizedContent = useMemo(() => {
    return DOMPurify.sanitize(post.content || "", {
      // Allow common HTML tags for blog content
      ALLOWED_TAGS: [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'p', 'br', 'strong', 'em', 'u', 's', 'b', 'i',
        'ul', 'ol', 'li', 'blockquote',
        'a', 'img', 'code', 'pre',
        'div', 'span', 'hr', 'table', 'thead', 'tbody', 'tr', 'td', 'th'
      ],
      // Allow specific attributes
      ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'id'],
      // Prevent data URIs and javascript: URLs
      ALLOW_DATA_ATTR: false,
    });
  }, [post.content]);

  return (
    <section>
      {/* Featured Image Section */}
      <Container className="pt-10 md:pt-14">
        <AnimateOnView once blur delay={0.3}>
          <div className="mx-auto aspect-[16/10] w-full max-w-[1200px] overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(15,23,42,0.15)]">
            <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
          </div>
        </AnimateOnView>
      </Container>
      <Container className="flex flex-col lg:flex-row justify-between md:gap-10 gap-6 pt-10 md:pt-14 pb-10 md:pb-14">
        {/* Main Content Column */}
        <div className="max-w-[717px] w-full">
          <BlogBody content={sanitizedContent} />

          {/* Sources: shown under every article that lists them */}
          {post.sources && post.sources.length > 0 && (
            <div className="mt-10 rounded-3xl border border-border bg-white p-6 md:p-8 shadow-[0_4px_24px_rgba(15,23,42,0.08)]">
              <h2 className="h6 mb-4">Sources</h2>
              <ol className="space-y-3">
                {post.sources.map((s, i) => (
                  <li key={s.url} className="flex gap-3 text-base">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-frost text-xs font-medium text-brand-cobalt">
                      {i + 1}
                    </span>
                    <span className="min-w-0">
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
                      >
                        {s.title}
                        <ExternalLink className="ml-1 inline size-3.5 align-[-1px] text-muted-foreground" aria-hidden="true" />
                      </a>
                      <span className="block truncate text-sm text-muted-foreground">{hostname(s.url)}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Article call to action (brand gradient) */}
          <div className="mt-6 flex flex-col gap-4 rounded-3xl p-6 text-white md:flex-row md:items-center md:justify-between md:p-8 [background:var(--gradient-brand)]">
            <div>
              <p className="h6 text-white">Want to close the gap in your business?</p>
              <p className="mt-1 text-white/85">Every WarsaAi engagement starts with an efficiency audit of your workflows, data and quick wins.</p>
            </div>
            <Button asChild className="shrink-0 bg-white text-brand-ink hover:bg-white/90">
              <Link to="/contact">
                Book a free call
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        {/* Newsletter Sidebar */}
        <aside className="max-w-[400px] w-full lg:sticky lg:top-[60px] lg:h-fit">
          <Card className="space-y-6 bg-brand-ink">
            <div className="max-w-[240px]">
              <h2 className="h6 mb-2 text-white">
                Get insights delivered straight to you
              </h2>
              <p className="text-muted">
                Get the latest insights on AI strategy and implementation.
              </p>
            </div>

            <NewsletterForm
              buttonVariant="default"
              buttonClassName="bg-primary text-white hover:bg-primary/90"
              inputClassName="h-[46px]"
              formClassName="flex"
              gap="gap-2.5"
            />
          </Card>
        </aside>
      </Container>
    </section>
  );
};

export default BlogDetailsContent;

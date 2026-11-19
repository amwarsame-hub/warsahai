import { ReactNode, useMemo } from "react";
import DOMPurify from "dompurify";

interface BlogContainerProps {
    children: ReactNode;
    className?: string;
}

export function BlogContainer({ children, className = "" }: BlogContainerProps) {
    return (
        <section
            className={`w-full max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-16 ${className}`}
        >
            {children}
        </section>
    );
}

interface BlogBodyProps {
    content: string;
}

export function BlogBody({ content }: BlogBodyProps) {
    // Sanitize HTML content to prevent XSS attacks (defense-in-depth)
    const sanitizedContent = useMemo(() => {
        return DOMPurify.sanitize(content || "", {
            ALLOWED_TAGS: [
                'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
                'p', 'br', 'strong', 'em', 'u', 's', 'b', 'i',
                'ul', 'ol', 'li', 'blockquote',
                'a', 'img', 'code', 'pre',
                'div', 'span', 'hr', 'table', 'thead', 'tbody', 'tr', 'td', 'th'
            ],
            ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'id'],
            ALLOW_DATA_ATTR: false,
        });
    }, [content]);

    return (
        <div className={`
          blog-prose max-w-none
          [&>div>*:first-child]:mt-0 [&>div>*:last-child]:mb-0

          [&_p]:mb-6
          [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary/80

          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2
          [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-2

          [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-6 [&_blockquote]:my-8 [&_blockquote]:italic
          [&_blockquote_p]:text-lg [&_blockquote_p]:text-foreground [&_blockquote_p]:font-medium

          [&_pre]:bg-gray-900 [&_pre]:text-gray-100 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:my-6
          [&_code]:bg-muted [&_code]:text-foreground [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm
          [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-gray-100

          [&_hr]:border-border [&_hr]:my-8
          [&_strong]:font-semibold [&_strong]:text-foreground
          [&_img]:rounded-lg [&_img]:shadow-md [&_img]:my-8
        `}>
            <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
        </div>
    );
}
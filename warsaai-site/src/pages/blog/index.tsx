import Layout from "@/components/layout";
import BlogDetailsContent from "@/components/sections/blog/blog-details-content";
import BlogDetailsHero from "@/components/sections/blog/blog-details-hero";
import BlogList from "@/components/sections/blog/blog-list";
import BlogHero from "@/components/sections/blog/hero";
import MoreBlogs from "@/components/sections/blog/more-blogs";
import SEO from "@/components/seo";
import { Skeleton } from "@/components/ui/skeleton";
import { useBlogPosts } from "@/hooks/use-blog";
import { appConfig } from "@/utils/app-config";

/**
 * /blog opens on the latest article in full (same layout as /blog/:slug),
 * with the other articles listed underneath once there are more.
 */
const Blog = () => {
  const { data: posts = [], isLoading } = useBlogPosts();
  const latest = posts[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `Blog | ${appConfig.name}`,
    description: `${appConfig.description}`,
    url: `${appConfig.url}/blog`,
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 space-y-8">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="w-full h-[400px] rounded-[32px]" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // No articles yet: keep the original listing page.
  if (!latest) {
    return (
      <>
        <SEO title={`Blog | ${appConfig.name}`} description={appConfig.description} canonicalUrl="/blog" ogType="website" jsonLd={jsonLd} />
        <Layout>
          <BlogHero />
          <BlogList />
        </Layout>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${latest.title} | Blog | ${appConfig.name}`}
        description={`Read ${latest.title} by ${latest.author} on the ${appConfig.name} blog.`}
        // Same article lives at /blog/<slug>; point search engines there to avoid duplicate content.
        canonicalUrl={`/blog/${latest.slug}`}
        ogType="article"
        jsonLd={jsonLd}
      />
      <Layout>
        <BlogDetailsHero post={latest} />
        <BlogDetailsContent post={latest} />
        <MoreBlogs excludeSlug={latest.slug} title="More articles" limit={6} />
      </Layout>
    </>
  );
};

export default Blog;

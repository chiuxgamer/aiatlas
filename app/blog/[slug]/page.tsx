import ArticleHero from "@/components/blog/article-hero";
import BlogPost from "@/components/blog/blog-post";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Artículo no encontrado | AIAtlas",
    };
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <ArticleHero
  title={post.title}
  description={post.excerpt}
  category={post.category}
  publishedAt={post.publishedAt}
  readingTime={post.readingTime}
/>

<BlogPost content={post.content} />
    </main>
  );
}

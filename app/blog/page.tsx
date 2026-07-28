import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | AIAtlas",
  description: "Guías, comparativas y artículos sobre inteligencia artificial.",
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-2 text-4xl font-bold">Blog de AIAtlas</h1>
      <p className="mb-10 text-gray-600">
        Aprende sobre inteligencia artificial con nuestras guías,
        comparativas y recomendaciones.
      </p>

      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-xl border p-6 transition hover:shadow-lg"
          >
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-gray-600">{post.excerpt}</p>

            <div className="mt-4 flex gap-4 text-sm text-gray-500">
              <span>{post.publishedAt}</span>
              <span>{post.readingTime} min</span>
              <span>{post.category}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
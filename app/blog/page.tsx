import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | AIAtlas",
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
    </main>
  );
}

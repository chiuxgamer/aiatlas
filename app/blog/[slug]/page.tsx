import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: `${slug} | AIAtlas`,
  };
}

export default async function BlogPostPage({ params }: Props) {
  await params;

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Artículo del blog</h1>
    </main>
  );
}

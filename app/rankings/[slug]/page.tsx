import { getToolsByBestFor } from "@/lib/tools";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function RankingPage({ params }: Props) {
  const { slug } = await params;

  const tools = getToolsByBestFor(slug);

  return (
    <main className="min-h-screen bg-zinc-950 p-10 text-white">
      <h1 className="text-5xl font-bold">
        Mejores IA para {slug}
      </h1>

      <p className="mt-4 text-zinc-400">
        Ranking actualizado de las mejores herramientas de IA para {slug}.
      </p>

      <div className="mt-10 space-y-6">
        {tools.map((tool, index) => (
          <Link
            key={tool.id}
            href={`/herramienta/${tool.slug}`}
            className="block rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-violet-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">
                  #{index + 1} {tool.name}
                </h2>

                <p className="mt-2 text-zinc-400">
                  {tool.tagline}
                </p>
              </div>

              <div className="text-right">
                <p className="text-2xl font-bold">
                  ⭐ {tool.rating}
                </p>

                <p className="text-sm text-zinc-400">
                  {tool.pricing}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
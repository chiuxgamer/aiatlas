import { ToolCard } from "@/components/tool/tool-card";
import { tools } from "@/data/tools";

export function TrendingTools() {
  const trending = [...tools]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <div className="mb-12">
          <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-300">
            🔥 Tendencias
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Las IA más populares ahora mismo
          </h2>

          <p className="mt-3 text-zinc-400">
            Las herramientas mejor valoradas por AIAtlas.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {trending.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

      </div>
    </section>
  );
}
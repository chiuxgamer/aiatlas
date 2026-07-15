import Link from "next/link";
import type { Tool } from "@/data/tools";

type ToolCardProps = {
  tool: Tool;
};

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={`/herramienta/${tool.slug}`}
      className="group rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-all hover:border-violet-500/30 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-violet-500/10"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-sm font-bold text-white">
          {tool.logo}
        </div>

        <span className="rounded-full bg-amber-400/10 px-3 py-1 text-sm font-semibold text-amber-400">
          ⭐ {tool.rating}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold text-white group-hover:text-violet-300">
        {tool.name}
      </h3>

      <p className="mt-2 text-sm text-zinc-400">
        {tool.tagline}
      </p>

      <div className="mt-5 flex items-center justify-between">
        <span className="rounded-lg bg-white/5 px-3 py-1 text-xs text-zinc-300">
          {tool.category}
        </span>

        <span className="text-sm text-violet-400">
          Ver más →
        </span>
      </div>
    </Link>
  );
}

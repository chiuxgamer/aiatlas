import Link from "next/link";
import Image from "next/image";
import type { Tool } from "@/data/tools";

type ToolCardProps = {
  tool: Tool;
};

export function ToolCard({ tool }: ToolCardProps) {
  const medals: Record<string, string> = {
  chatgpt: "🥇",
  claude: "🥈",
  gemini: "🥉",
};
  return (
    <Link
      href={`/herramienta/${tool.slug}`}
      className="group rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-all hover:border-violet-500/30 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-violet-500/10"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
 <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white p-2 shadow-lg">
  <Image
    src={`/logos/${tool.slug}.svg`}
    alt={tool.name}
    width={40}
    height={40}
    className="object-contain"
    onError={(e) => {
      e.currentTarget.style.display = "none";
      const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
      if (fallback) fallback.style.display = "flex";
    }}
  />

  <div
    style={{ display: "none" }}
    className="h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 text-lg font-bold text-white"
  >
    {tool.logo}
  </div>
</div>
  <div>
    <h3 className="flex items-center gap-2 text-xl font-bold text-white">
  {medals[tool.id] && (
    <span className="text-2xl">{medals[tool.id]}</span>
  )}

  {tool.name}
</h3>
{tool.editorChoice && (
  <span className="mt-2 inline-flex rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-300">
    👑 Editor's Choice
  </span>
)}

    <p className="text-sm text-zinc-400">
      {tool.tagline}
    </p>
  </div>
</div>

        <span className="rounded-full bg-amber-400/10 px-3 py-1 text-sm font-semibold text-amber-400">
          ⭐ {tool.rating}
        </span>
      </div>

    
<div className="mt-5 flex items-center justify-between">
  <div className="flex items-center gap-2">
    <span className="rounded-lg bg-white/5 px-3 py-1 text-xs text-zinc-300">
      {tool.category}
    </span>

    <span className="rounded-lg bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
      Free
    </span>
  </div>

  <span className="text-sm font-medium text-violet-400">
    → Ver análisis
  </span>
</div>
    </Link>
  );
}

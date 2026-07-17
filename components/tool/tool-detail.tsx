import Link from "next/link";
import type { Tool } from "@/data/tools";
import { StarRating } from "./star-rating";
import { ToolLogo } from "./tool-logo";

type ToolDetailProps = {
  tool: Tool;
  relatedTools: Tool[];
};
 export function ToolDetail({ tool, relatedTools }: ToolDetailProps) {
  return (
    <div className="min-h-full bg-zinc-950 text-zinc-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 text-xs font-bold text-white">
              AI
            </span>
            <span className="font-semibold">
              AI<span className="text-violet-400">Atlas</span>
            </span>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/herramientas"
              className="text-zinc-400 transition-colors hover:text-white"
            >
              ← Herramientas
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[120px]" />
          <div className="absolute right-0 top-1/2 h-[300px] w-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <div className="animate-fade-in-up flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <ToolLogo logo={tool.logo} name={tool.name} slug={tool.slug} />

              <div className="flex flex-col gap-4">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300 ring-1 ring-violet-500/20">
                      {tool.category}
                    </span>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 ring-1 ring-white/10">
                      {tool.pricing}
                    </span>
                  </div>
                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    {tool.name}
                  </h1>
                  <p className="mt-2 text-lg text-zinc-400">{tool.tagline}</p>
                </div>

                <StarRating rating={tool.rating} reviewCount={tool.reviewCount} />
              </div>
            </div>

            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-in-up animation-delay-200 inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 text-base font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:from-violet-500 hover:to-indigo-500 hover:shadow-violet-500/40 lg:mt-2"
            >
              Visitar web
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main content */}
          <div className="space-y-12 lg:col-span-2">
            {/* Description */}
            <section className="animate-fade-in-up animation-delay-100">
              <h2 className="text-xl font-semibold text-white">Descripción</h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                {tool.description}
              </p>
            </section>
{/* Características principales */}
<section className="animate-fade-in-up animation-delay-150">
  <h2 className="text-xl font-semibold text-white">
    Características principales
  </h2>
  <div className="mt-6 flex flex-wrap gap-3">
    {tool.features?.map((feature) => (
      <span
        key={feature}
        className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300"
      >
        {feature}
      </span>
    ))}
  </div>
</section>
{/* Pros & Cons */}
            {/* Pros & Cons */}
            <section className="animate-fade-in-up animation-delay-200 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-6">
                <h3 className="flex items-center gap-2 font-semibold text-emerald-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Pros
                </h3>
                <ul className="mt-4 space-y-3">
                  {tool.pros.map((pro) => (
                    <li key={pro} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-red-500/10 bg-red-500/5 p-6">
                <h3 className="flex items-center gap-2 font-semibold text-red-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Contras
                </h3>
                <ul className="mt-4 space-y-3">
                  {tool.cons.map((con) => (
                    <li key={con} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Use cases */}
            <section className="animate-fade-in-up animation-delay-300">
              <h2 className="text-xl font-semibold text-white">Casos de uso</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {tool.useCases.map((useCase, index) => (
                  <div
                    key={useCase}
                    className="group flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-violet-500/20 hover:bg-white/[0.04]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-sm font-bold text-violet-400 ring-1 ring-violet-500/20">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-zinc-300">{useCase}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Similar tech */}
            <section className="animate-fade-in-up animation-delay-200 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h2 className="text-lg font-semibold text-white">Tecnologías similares</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {tool.similarTech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-white/5 px-3 py-1.5 text-sm text-zinc-300 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Quick info */}
            <section className="animate-fade-in-up animation-delay-300 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h2 className="text-lg font-semibold text-white">Información rápida</h2>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Categoría
                  </dt>
                  <dd className="mt-1 text-sm text-zinc-200">{tool.category}</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Precio
                  </dt>
                  <dd className="mt-1 text-sm text-zinc-200">{tool.pricing}</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Puntuación
                  </dt>
                  <dd className="mt-1 text-sm text-zinc-200">
                    {tool.rating.toFixed(1)} / 5.0
                  </dd>
                </div>
              </dl>
            </section>
          </aside>
        </div>

        {/* Related tools */}
        {relatedTools.length > 0 && (
          <section className="animate-fade-in-up animation-delay-400 mt-16 border-t border-white/5 pt-16">
            <h2 className="text-2xl font-bold tracking-tight">Herramientas relacionadas</h2>
            <p className="mt-2 text-zinc-400">
              Otras herramientas que podrían interesarte en la misma categoría.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTools.map((related) => (
                <Link
                  key={related.id}
                  href={`/herramienta/${related.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-violet-500/30 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-violet-500/5"
                >
                  <ToolLogo
                    logo={related.logo}
                    name={related.name}
                    slug={related.slug}
                    size="md"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-white transition-colors group-hover:text-violet-300">
                      {related.name}
                    </h3>
                    <p className="mt-0.5 truncate text-sm text-zinc-500">
                      {related.tagline}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-xs text-amber-400">
                        ★ {related.rating.toFixed(1)}
                      </span>
                      <span className="text-xs text-zinc-600">·</span>
                      <span className="text-xs text-zinc-500">{related.category}</span>
                    </div>
                  </div>
                  <svg
                    className="h-5 w-5 shrink-0 text-zinc-600 transition-all group-hover:translate-x-0.5 group-hover:text-violet-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

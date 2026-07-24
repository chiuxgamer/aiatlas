import Link from "next/link";
import { ScoreBar } from "@/components/tool/score-bars";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
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
      <div className="mx-auto max-w-6xl px-6 pt-8">
  <Breadcrumb
    items={[
      {
        label: "Inicio",
        href: "/",
      },
      {
        label: "Herramientas",
        href: "/herramientas",
      },
      {
        label: tool.name,
      },
    ]}
  />
</div>

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
            <div className="mt-5 max-w-sm rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 p-5">
  <p className="text-sm uppercase tracking-wider text-violet-300">
    Valoración AIAtlas
  </p>

  <div className="mt-2 flex items-end gap-2">
    <span className="text-5xl font-bold text-white">
      {(tool.rating * 2).toFixed(1)}
    </span>

    <span className="mb-1 text-xl text-zinc-400">
      /10
    </span>
  </div>

  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
    Basada en facilidad de uso, funciones, precio, soporte y experiencia general.
  </p>
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
              <div className="mt-8 overflow-hidden rounded-xl border border-white/10">
  <table className="w-full text-left">
    <tbody>
      <tr className="border-b border-white/10">
        <td className="bg-white/5 px-4 py-3 font-medium">Empresa</td>
        <td className="px-4 py-3">{tool.company}</td>
      </tr>

      <tr className="border-b border-white/10">
        <td className="bg-white/5 px-4 py-3 font-medium">Lanzamiento</td>
        <td className="px-4 py-3">{tool.launchYear}</td>
      </tr>

      <tr className="border-b border-white/10">
        <td className="bg-white/5 px-4 py-3 font-medium">Categoría</td>
        <td className="px-4 py-3">{tool.category}</td>
      </tr>

      <tr className="border-b border-white/10">
        <td className="bg-white/5 px-4 py-3 font-medium">Plan gratuito</td>
        <td className="px-4 py-3">{tool.freePlan}</td>
      </tr>

      <tr>
        <td className="bg-white/5 px-4 py-3 font-medium">API</td>
        <td className="px-4 py-3">{tool.api}</td>
      </tr>
    </tbody>
  </table>
</div>
            </section>
            {/* Description */}
<section>
  ...
</section>

{/* ¿Merece la pena? */}
<section className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-6">
  <h3 className="text-lg font-semibold text-white">
    ¿Merece la pena {tool.name}?
  </h3>

  <p className="mt-3 leading-relaxed text-zinc-300">
    {tool.name} es una de las mejores opciones dentro de la categoría de{" "}
    <strong>{tool.category}</strong>. Destaca por su facilidad de uso, sus
    funciones y la gran comunidad que tiene detrás. Si buscas una herramienta
    fiable para este tipo de tareas, es una opción muy recomendable.
  </p>
</section>
{/* FAQ */}
<section className="mt-10">
  <h2 className="text-2xl font-bold text-white">
    Preguntas frecuentes
  </h2>

  <div className="mt-6 space-y-4">

    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <h3 className="font-semibold text-white">
        ¿{tool.name} tiene versión gratuita?
      </h3>
      <p className="mt-2 text-zinc-400">
        {tool.freePlan === "Sí"
          ? `${tool.name} ofrece un plan gratuito con ciertas limitaciones.`
          : `${tool.name} no dispone de un plan gratuito.`}
      </p>
    </div>

    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <h3 className="font-semibold text-white">
        ¿Para quién está recomendado?
      </h3>
      <p className="mt-2 text-zinc-400">
        Está pensado para usuarios que buscan una herramienta de{" "}
        {tool.category.toLowerCase()}.
      </p>
    </div>

    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <h3 className="font-semibold text-white">
        ¿Merece la pena en 2026?
      </h3>
      <p className="mt-2 text-zinc-400">
        Sí, sigue siendo una de las mejores opciones de su categoría.
      </p>
    </div>

  </div>
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
<section className="rounded-2xl border border-white/10 bg-white/5 p-6">
  <h2 className="text-xl font-semibold text-white">
    Información rápida
  </h2>

  <div className="mt-6 grid gap-4 sm:grid-cols-2">
    <div>
      <p className="text-sm text-zinc-500">Empresa</p>
      <p className="font-medium">{tool.company}</p>
    </div>

    <div>
      <p className="text-sm text-zinc-500">Lanzamiento</p>
      <p className="font-medium">{tool.launchYear}</p>
    </div>

    <div>
      <p className="text-sm text-zinc-500">Plataformas</p>
      <p className="font-medium">{tool.platforms}</p>
    </div>

    <div>
      <p className="text-sm text-zinc-500">API</p>
      <p className="font-medium">{tool.api}</p>
    </div>

    <div>
      <p className="text-sm text-zinc-500">Plan gratuito</p>
      <p className="font-medium">{tool.freePlan}</p>
    </div>
  </div>
</section>
{/* Valoración */}
<section className="rounded-2xl border border-white/10 bg-white/5 p-6">
  <h2 className="text-xl font-semibold text-white">
    Valoración AIAtlas
  </h2>

  <div className="mt-6 space-y-5">

    {[
      ["Facilidad de uso", 95],
      ["Funciones", 98],
      ["Relación calidad/precio", 92],
      ["Velocidad", 96],
      ["Calidad IA", 97],
    ].map(([label, value]) => (
      <div key={label}>
        <div className="mb-2 flex justify-between text-sm">
          <span>{label}</span>
          <span className="font-semibold">{value}/100</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    ))}

  </div>
</section>
<section className="rounded-2xl border border-white/10 bg-white/5 p-6">
  <h2 className="text-xl font-semibold text-white">
    Valoración detallada
  </h2>

  <div className="mt-6 space-y-5">
    <ScoreBar
  label="Calidad de respuesta"
  value={tool.responseQuality ?? 0}
/>

<ScoreBar
  label="Programación"
  value={tool.programming ?? 0}
/>

<ScoreBar
  label="Creatividad"
  value={tool.creativity ?? 0}
/>

<ScoreBar
  label="Velocidad"
  value={tool.speed ?? 0}
/>

<ScoreBar
  label="Facilidad de uso"
  value={tool.easeOfUse ?? 0}
/>

<ScoreBar
  label="Privacidad"
  value={tool.privacy ?? 0}
/>

    {[
      ["Facilidad de uso", 9.6],
      ["Funciones", 9.7],
      ["Relación calidad/precio", 9.4],
      ["Potencia IA", 9.8],
    ].map(([title, score]) => (
      <div key={title}>
        <div className="mb-2 flex justify-between text-sm">
          <span>{title}</span>
          <span className="font-semibold">{score}/10</span>
        </div>

        <div className="h-2 rounded-full bg-zinc-800">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
            style={{ width: `${Number(score) * 10}%` }}
          />
        </div>
      </div>
    ))}

  </div>
</section>
<section className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-6">
  <h2 className="text-xl font-semibold text-white">
    Opinión de AIAtlas
  </h2>

  <p className="mt-4 leading-relaxed text-zinc-300">
    Tras analizar <strong>{tool.name}</strong>, creemos que es una de las
    herramientas más completas dentro de la categoría de{" "}
    <strong>{tool.category}</strong>. Destaca especialmente por su facilidad de
    uso, la calidad de sus funciones y la frecuencia con la que recibe nuevas
    actualizaciones. Si buscas una solución fiable para este tipo de tareas,
    probablemente sea una de las mejores opciones disponibles actualmente.
  </p>
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
            <section className="mt-12">
  <h2 className="text-2xl font-bold text-white">
    Preguntas rápidas
  </h2>

  <div className="mt-6 space-y-4">

    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <h3 className="font-semibold text-white">
        ¿Tiene plan gratuito?
      </h3>
      <p className="mt-2 text-zinc-400">
        {tool.freePlan}
      </p>
    </div>

    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <h3 className="font-semibold text-white">
        ¿Dispone de API?
      </h3>
      <p className="mt-2 text-zinc-400">
        {tool.api}
      </p>
    </div>

    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <h3 className="font-semibold text-white">
        ¿En qué plataformas está disponible?
      </h3>
      <p className="mt-2 text-zinc-400">
        {tool.platforms}
      </p>
    </div>

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
        <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
  <h2 className="text-2xl font-bold text-white">
    Alternativas a {tool.name}
  </h2>

  <p className="mt-3 text-zinc-400">
    Si {tool.name} no termina de convencerte, existen otras herramientas que ofrecen funciones similares y pueden adaptarse mejor a tus necesidades.
  </p>
</section>

        {/* Related tools */}
        <section className="mt-16 rounded-2xl border border-violet-500/20 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 p-8 text-center">
  <h2 className="text-2xl font-bold text-white">
    ¿Quieres probar {tool.name}?
  </h2>

  <p className="mx-auto mt-3 max-w-2xl text-zinc-400">
    Accede a la página oficial de {tool.name}, crea una cuenta y empieza a utilizar todas sus funciones.
  </p>

  <a
    href={tool.website}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 inline-flex rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500"
  >
    Ir a la web oficial →
  </a>
</section>
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

import { RatingBars } from "@/components/tool/rating-bars";
import { getToolBySlug } from "@/lib/tools";
import { ComparisonTable } from "@/components/tool/comparison-table";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ComparativaPage({ params }: Props) {
  const { slug } = await params;

  const [tool1Slug, tool2Slug] = slug.split("-vs-");

  const tool1 = getToolBySlug(tool1Slug);
  const tool2 = getToolBySlug(tool2Slug);

  if (!tool1 || !tool2) {
    return (
      <main className="min-h-screen bg-zinc-950 flex items-center justify-center text-white">
        <h1 className="text-3xl font-bold">
          Comparativa no encontrada
        </h1>
      </main>
    );
  }

  const winner =
    tool1.rating >= tool2.rating ? tool1 : tool2;

  return (
    <main className="min-h-screen bg-zinc-950 p-10 text-white">
      <h1 className="text-5xl font-bold">
        {tool1.name} vs {tool2.name}
      </h1>

      <p className="mt-6 text-lg text-zinc-400">
        Comparativa completa entre herramientas de IA.
      </p>
<div className="mt-8 rounded-2xl border border-violet-500/30 bg-violet-500/10 p-6">
  <h2 className="text-2xl font-bold">
    🏆 Veredicto de AIAtlas
  </h2>

  <p className="mt-4 text-zinc-300">
    {tool1.rating > tool2.rating ? tool1.name : tool2.name} obtiene la mejor
    valoración general en AIAtlas gracias a su puntuación de{" "}
    <span className="font-bold">
      ⭐ {Math.max(tool1.rating, tool2.rating)}
    </span>.
  </p>
</div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {[tool1, tool2].map((tool) => (
          <div
            key={tool.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-2xl font-bold">{tool.name}</h2>

            <p className="mt-2 text-zinc-400">
              {tool.category}
            </p>

            <div className="mt-6 space-y-2 text-sm">
              <p>
                <strong>Precio:</strong> {tool.pricing}
              </p>

              <p>
                <strong>Puntuación:</strong> ⭐ {tool.rating}
              </p>

              <p>
                <strong>Plan gratuito:</strong> {tool.freePlan}
              </p>
            </div>
          </div>
        ))}
      </div>

      <ComparisonTable
  left={{
    name: tool1.name,
    pricing: tool1.pricing,
    rating: tool1.rating,
    category: tool1.category,
    
  }}
  right={{
    name: tool2.name,
    pricing: tool2.pricing,
    rating: tool2.rating,
    category: tool2.category,
    
  }}
  
/>
<div className="mt-10 grid gap-6 md:grid-cols-2">
  {[tool1, tool2].map((tool) => (
    <div
      key={tool.id}
      className="rounded-2xl border border-white/10 bg-white/5 p-6"
    >
      <h2 className="text-2xl font-bold">{tool.name}</h2>

      <div className="mt-6">
        <h3 className="mb-3 font-semibold text-green-400">
          ✅ Ventajas
        </h3>

        <ul className="space-y-2 text-zinc-300">
          {tool.pros.map((pro) => (
            <li key={pro}>• {pro}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="mb-3 font-semibold text-red-400">
          ❌ Inconvenientes
        </h3>

        <ul className="space-y-2 text-zinc-300">
          {tool.cons.map((con) => (
            <li key={con}>• {con}</li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>
      <section className="mt-12 grid gap-8 lg:grid-cols-2">
  {[tool1, tool2].map((tool) => (
    <div
      key={tool.id}
      className="rounded-2xl border border-white/10 bg-white/5 p-8"
    >
      <h2 className="text-2xl font-bold">{tool.name}</h2>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-green-400">
          ✅ Ventajas
        </h3>

        <ul className="mt-4 space-y-3">
          {tool.pros.map((pro) => (
            <li key={pro}>• {pro}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-red-400">
          ❌ Desventajas
        </h3>

        <ul className="mt-4 space-y-3">
          {tool.cons.map((con) => (
            <li key={con}>• {con}</li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</section>

      <div className="mt-12 rounded-2xl border border-violet-500/30 bg-violet-500/10 p-8">
        <h2 className="text-2xl font-bold">
          🏆 Veredicto de AIAtlas
        </h2>

        <p className="mt-4 text-zinc-300">
          Según nuestra valoración actual,{" "}
          <span className="font-bold text-white">
            {winner.name}
          </span>{" "}
          es la opción más recomendable gracias a su puntuación de{" "}
          <span className="font-bold">
            ⭐ {winner.rating}
          </span>.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-4">
  <a
    href={tool1.website}
    target="_blank"
    className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500"
  >
    Probar {tool1.name} →
  </a>

  <a
    href={tool2.website}
    target="_blank"
    className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
  >
    Probar {tool2.name} →
  </a>
</div>
    </main>
  );
}
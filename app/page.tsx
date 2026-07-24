"use client";
import { Hero } from "@/components/home/hero";
import { TrendingTools } from "@/components/home/trending-tools";
import { ToolCard } from "@/components/tool/tool-card";
import { tools } from "@/data/tools";
import { useState } from "react";
import { SearchBar } from "@/components/tool/search-bar"
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const ids = tools.map((t) => t.id);

console.log(ids);
console.log("ÚNICOS:", new Set(ids).size);

const filteredTools = tools.filter((tool) => {

 const query = searchQuery.toLowerCase();

  const matchesSearch =
    tool.name.toLowerCase().includes(query) ||
    tool.category.toLowerCase().includes(query) ||
    tool.tagline.toLowerCase().includes(query) ||
    tool.description.toLowerCase().includes(query) ||
    tool.useCases.some((useCase) =>
      useCase.toLowerCase().includes(query)
    );

  const matchesCategory =
    selectedCategory === "Todas" ||
    tool.category === selectedCategory;

  return matchesSearch && matchesCategory;
});
const categoriesFilter = [
  "Todas",
  "Conversación",
  "Programación",
  "Diseño",
  "Vídeo",
  "Audio",
  "Productividad",
  "Búsqueda",
];
const categories = [
    {
      emoji: "🧠",
      title: "IA para estudiar",
      description:
        "Resúmenes, flashcards, tutores virtuales y herramientas que te ayudan a aprender más rápido.",
    },
    {
      emoji: "💻",
      title: "IA para programar",
      description:
        "Asistentes de código, depuración inteligente y generación automática para acelerar tu desarrollo.",
    },
    {
      emoji: "🎨",
      title: "IA para diseño",
      description:
        "Generación de imágenes, edición creativa y prototipado visual con inteligencia artificial.",
    },
    {
      emoji: "📈",
      title: "IA para marketing",
      description:
        "Copywriting, análisis de datos y automatización de campañas para hacer crecer tu negocio.",
    },
  ];

  const advantages = [
    {
      title: "Directorio completo",
      description:
        "Accede a cientos de herramientas de IA organizadas por categoría, caso de uso y popularidad.",
    },
    {
      title: "Comparativas objetivas",
      description:
        "Compara funciones, precios y valoraciones para elegir la herramienta perfecta sin perder tiempo.",
    },
    {
      title: "Siempre actualizado",
      description:
        "Nuestro catálogo se actualiza constantemente con las últimas novedades del ecosistema de IA.",
    },
  ];

  return (
    <div className="flex min-h-full flex-col bg-zinc-950 font-sans text-zinc-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-sm font-bold text-white shadow-lg shadow-violet-500/25">
              AI
            </span>
            <span className="text-xl font-bold tracking-tight">
              AI<span className="text-violet-400">Atlas</span>
            </span>
          </a>

          <div className="flex items-center gap-3">
            <a
              href="#herramientas"
              className="hidden rounded-lg px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white sm:inline-block"
            >
              Explorar herramientas
            </a>
            <a
              href="#comparativas"
              className="rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-white/20"
            >
              Comparativas
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pb-24 pt-20 sm:pb-32 sm:pt-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
            <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
          </div>

          <div className="relative mx-auto max-w-4xl text-center">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              El mapa definitivo de la inteligencia artificial
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Encuentra la mejor IA para{" "}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-violet-300 bg-clip-text text-transparent">
                cualquier tarea.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
              Descubre, compara y aprende sobre cientos de herramientas de
              inteligencia artificial.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#herramientas"
                className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 text-base font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:from-violet-500 hover:to-indigo-500 hover:shadow-violet-500/40 sm:w-auto"
              >
                Explorar herramientas
              </a>
              <a
                href="#"
                className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 text-base font-semibold text-zinc-200 transition-all hover:border-white/20 hover:bg-white/10 sm:w-auto"
              >
                Empezar gratis
              </a>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="herramientas" className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
     
              <p className="mt-3 text-zinc-400">
                Encuentra la herramienta ideal según lo que necesites hacer.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <article
                  key={category.title}
                  className="group rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-all hover:border-violet-500/30 hover:bg-white/[0.06]"
                >
                  <span className="text-4xl" role="img" aria-hidden="true">
                    {category.emoji}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{category.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {category.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
{/* Herramientas destacadas */}
<section className="px-6 py-20">
  <div className="mx-auto max-w-6xl">
    <div className="mb-12 text-center">
     </div>
      
 <h2 className="text-4xl font-bold tracking-tight text-white">
  🔥 Herramientas en tendencia
</h2>

<p className="mt-4 text-lg text-zinc-400">
  Descubre las herramientas de inteligencia artificial más populares y mejor valoradas.
</p>
          </div>
        </section>
{/* Herramientas destacadas */}
<section className="px-6 py-20">
  <div className="mx-auto max-w-6xl">
    <div className="mb-12 text-center">
     
      
 <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
  Herramientas destacadas
</h2>

<p className="mt-3 text-zinc-400">
  Explora <span className="font-semibold text-white">{tools.length}</span>{" "}
  herramientas de IA cuidadosamente seleccionadas.
</p>

<div className="mt-6 flex flex-wrap justify-center gap-3">
  {categoriesFilter.map((category) => (
    <button
      key={category}
      onClick={() => setSelectedCategory(category)}
      className={`rounded-full px-4 py-2 transition ${
        selectedCategory === category
          ? "bg-violet-600 text-white"
          : "bg-white/5 text-zinc-400 hover:bg-white/10"
      }`}
    >
      {category}
    </button>
  ))}
</div>
  

    </div>

 {filteredTools.length === 0 && (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
    <h3 className="text-xl font-semibold text-white">
      No hemos encontrado ninguna herramienta
    </h3>

    <p className="mt-2 text-zinc-400">
      Prueba con otro nombre o categoría.
    </p>
  </div>
)}
<p className="text-red-500 text-2xl">
  Herramientas encontradas: {filteredTools.length}
</p>
 {filteredTools.length > 0 && (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {filteredTools.map((tool) => ( 
    <ToolCard key={tool.id} tool={tool} />
  ))}
</div>
)}
  </div>
</section>
{/* Herramientas más populares */}
<section className="px-6 pb-20">
  <div className="mx-auto max-w-6xl">
    <h2 className="text-3xl font-bold text-white">
      🔥 Herramientas más populares
    </h2>

    <p className="mt-3 text-zinc-400">
      Las herramientas de IA más utilizadas por nuestra comunidad.
    </p>

    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
     {[...tools]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 6)
  .map((tool) => (
    <ToolCard key={tool.id} tool={tool} />
))}
    </div>
  </div>
</section>
        {/* Why AIAtlas */}
        <section id="comparativas" className="border-t border-white/5 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                ¿Por qué AIAtlas?
              </h2>
              <p className="mt-3 text-zinc-400">
                Todo lo que necesitas para navegar el mundo de la IA con
                confianza.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {advantages.map((advantage, index) => (
                <div
                  key={advantage.title}
                  className="relative rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-8"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-sm font-bold text-violet-400 ring-1 ring-violet-500/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{advantage.title}</h3>
                  <p className="mt-3 leading-relaxed text-zinc-400">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 text-xs font-bold text-white">
              AI
            </span>
            <span className="font-semibold">
              AI<span className="text-violet-400">Atlas</span>
            </span>
          </div>

          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} AIAtlas. Todos los derechos reservados.
          </p>

          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="transition-colors hover:text-zinc-300">
              Privacidad
            </a>
            <a href="#" className="transition-colors hover:text-zinc-300">
              Términos
            </a>
            <a href="#" className="transition-colors hover:text-zinc-300">
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

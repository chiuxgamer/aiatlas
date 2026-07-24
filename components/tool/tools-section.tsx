"use client";

import { useMemo, useState } from "react";
import { ToolCard } from "@/components/tool/tool-card";
import { SearchBar } from "@/components/tool/search-bar";
import { tools } from "@/data/tools";

export function ToolsSection() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");
  const [sortBy, setSortBy] = useState("rating");

 const filteredTools = useMemo(() => {
  const sortedTools = [...tools].sort((a, b) => {
  if ((a.featured ?? false) === (b.featured ?? false)) return 0;
  return a.featured ? -1 : 1;
});

const filtered = sortedTools.filter((tool) => {
    const query = search.toLowerCase();

    const matchesSearch =
      tool.name.toLowerCase().includes(query) ||
      tool.category.toLowerCase().includes(query) ||
      tool.tagline.toLowerCase().includes(query);

    const matchesCategory =
      category === "Todas" || tool.category === category;

    return matchesSearch && matchesCategory;
    <div className="mb-8 flex gap-3">
  <button
    onClick={() => setSortBy("rating")}
    className={`rounded-xl px-4 py-2 ${
      sortBy === "rating"
        ? "bg-violet-600 text-white"
        : "bg-white/5 text-zinc-300"
    }`}
  >
    ⭐ Mejor valoradas
  </button>

  <button
    onClick={() => setSortBy("name")}
    className={`rounded-xl px-4 py-2 ${
      sortBy === "name"
        ? "bg-violet-600 text-white"
        : "bg-white/5 text-zinc-300"
    }`}
  >
    🔤 A-Z
  </button>
</div>
  });

  filtered.sort((a, b) => {
    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return a.name.localeCompare(b.name);
  });

  return filtered;
}, [search, category, sortBy]);

  return (
    
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Herramientas de IA
        </h2>

        <p className="mt-3 text-zinc-400">
          Explora {filteredTools.length} herramientas de inteligencia artificial.
        </p>

        <SearchBar
          value={search}
          onChange={setSearch}
          
        />
        <div className="mb-8 flex flex-wrap gap-3">
  {[
    "Todas",
    "Conversación",
    "Imagen",
    "Vídeo",
    "Programación",
    "Productividad",
  ].map((item) => (
    <button
      key={item}
      onClick={() => setCategory(item)}
      className={`rounded-xl px-4 py-2 text-sm transition ${
        category === item
          ? "bg-violet-600 text-white"
          : "bg-white/5 text-zinc-300 hover:bg-white/10"
      }`}
    >
      {item}
    </button>
  ))}
</div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool) => (
            <ToolCard
              key={tool.id}
              tool={tool}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
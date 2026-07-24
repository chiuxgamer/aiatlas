import Link from "next/link";

const rankings = [
  {
    title: "Mejor IA para estudiar",
    href: "/mejor-ia-para-estudiar",
  },
  {
    title: "Mejor IA para programar",
    href: "#",
  },
  {
    title: "Mejor IA para crear imágenes",
    href: "#",
  },
  {
    title: "Mejor IA para escribir",
    href: "#",
  },
];

export default function RankingsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold">
          Rankings de Inteligencia Artificial
        </h1>

        <p className="mt-4 text-zinc-400">
          Descubre nuestras comparativas y rankings de las mejores herramientas de IA.
        </p>

        <div className="mt-12 grid gap-6">
          {rankings.map((ranking) => (
            <Link
              key={ranking.title}
              href={ranking.href}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-violet-500 hover:bg-white/10"
            >
              <h2 className="text-2xl font-semibold">
                {ranking.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
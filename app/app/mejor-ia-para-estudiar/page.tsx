import Link from "next/link";

export default function MejorIAParaEstudiarPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-5xl font-bold">
          Mejor IA para estudiar en 2026
        </h1>

        <p className="mt-6 text-lg text-zinc-400">
          Hemos probado las principales inteligencias artificiales para
          estudiar y estas son las que ofrecen mejores resultados.
        </p>

        <div className="mt-12 space-y-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-bold">
              🥇 ChatGPT
            </h2>

            <p className="mt-4 text-zinc-300">
              Ideal para resolver dudas, resumir apuntes y explicar conceptos
              difíciles de forma sencilla.
            </p>

            <Link
              href="/herramienta/chatgpt"
              className="mt-6 inline-block rounded-xl bg-violet-600 px-6 py-3 font-semibold"
            >
              Ver análisis →
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-bold">
              🥈 Claude
            </h2>

            <p className="mt-4 text-zinc-300">
              Excelente para analizar documentos largos, PDFs y preparar
              trabajos.
            </p>

            <Link
              href="/herramienta/claude"
              className="mt-6 inline-block rounded-xl bg-white/10 px-6 py-3 font-semibold"
            >
              Ver análisis →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
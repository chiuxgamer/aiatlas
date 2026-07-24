export function Hero() {
  return (
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
          Descubre, compara y aprende sobre cientos de herramientas de IA.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#herramientas"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 font-semibold text-white"
          >
            Explorar herramientas
          </a>

          <a
            href="/mejor-ia-para-estudiar"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 font-semibold text-white"
          >
            Ver rankings
          </a>
        </div>
      </div>
    </section>
  );
}
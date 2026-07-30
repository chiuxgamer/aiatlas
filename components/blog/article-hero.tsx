type ArticleHeroProps = {
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readingTime: number;
};

export default function ArticleHero({
  title,
  description,
  category,
  publishedAt,
  readingTime,
}: ArticleHeroProps) {
  return (
    <header className="mb-16 border-b border-zinc-200 dark:border-zinc-800 pb-10">
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          {category}
        </span>

        <span className="text-sm text-zinc-500">
          📅 {publishedAt}
        </span>

        <span className="text-sm text-zinc-500">
          ⏱️ {readingTime} min de lectura
        </span>
      </div>

      <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
        {title}
      </h1>

      <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </header>
  );
}
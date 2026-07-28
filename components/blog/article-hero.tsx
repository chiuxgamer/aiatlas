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
    <header className="mb-12 border-b pb-8">
      <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
        {category}
      </span>

      <h1 className="mt-4 text-5xl font-bold tracking-tight">
        {title}
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-gray-600">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500">
        <span>{publishedAt}</span>
        <span>•</span>
        <span>{readingTime} min de lectura</span>
      </div>
    </header>
  );
}
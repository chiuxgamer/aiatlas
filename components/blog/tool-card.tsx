type ToolCardProps = {
  name: string;
  description: string;
  bestFor: string;
  pricing: string;
  href: string;
};

export default function ToolCard({
  name,
  description,
  bestFor,
  pricing,
  href,
}: ToolCardProps) {
  return (
    <div className="my-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">{name}</h3>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
          {pricing}
        </span>
      </div>

      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>

      <div className="mt-5">
        <span className="font-semibold">🎯 Ideal para:</span>{" "}
        <span>{bestFor}</span>
      </div>

      <a
        href={href}
        className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Ver ficha completa →
      </a>
    </div>
  );
}
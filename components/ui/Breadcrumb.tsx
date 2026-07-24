import Link from "next/link";

type BreadcrumbProps = {
  items: {
    label: string;
    href?: string;
  }[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="mb-8 text-sm text-zinc-400">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.href ? (
              <Link
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-white">
                {item.label}
              </span>
            )}

            {index < items.length - 1 && (
              <span>/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
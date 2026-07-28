type Section = {
  heading: string;
};

type TableOfContentsProps = {
  sections: Section[];
};

export default function TableOfContents({
  sections,
}: TableOfContentsProps) {
  return (
    <aside className="sticky top-24 rounded-xl border p-5">
      <h2 className="mb-4 text-lg font-semibold">
        Índice
      </h2>

      <nav>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.heading}>
              <a
                href={`#${section.heading
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                {section.heading}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
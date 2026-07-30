type Section = {
  heading: string;
  paragraphs: string[];
};

type BlogPostProps = {
  content: Section[];
};

export default function BlogPost({ content }: BlogPostProps) {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      {content.map((section) => (
        <section key={section.heading} className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            {section.heading}
          </h2>

          {section.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="mb-5 leading-8 text-zinc-700 dark:text-zinc-300"
            >
              {paragraph}
            </p>
          ))}
        </section>
      ))}

      <div className="mt-16 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-8">
        <h2 className="text-2xl font-bold mb-4">
          🚀 Descubre más herramientas de IA
        </h2>

        <p className="mb-6">
          En AIAtlas analizamos decenas de herramientas de inteligencia
          artificial para ayudarte a encontrar la mejor opción según tus
          necesidades.
        </p>

        <a
          href="/herramientas"
          className="inline-flex rounded-xl bg-black px-5 py-3 text-white dark:bg-white dark:text-black font-medium"
        >
          Ver todas las herramientas →
        </a>
      </div>
    </article>
  );
}
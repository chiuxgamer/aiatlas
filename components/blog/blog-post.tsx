type Section = {
  heading: string;
  paragraphs: string[];
};

type BlogPostProps = {
  content: Section[];
};

export default function BlogPost({ content }: BlogPostProps) {
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      {content.map((section) => (
        <section key={section.heading} className="mb-10">
          <h2 id={section.heading.toLowerCase().replace(/\s+/g, "-")}>
            {section.heading}
          </h2>

          {section.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>
      ))}
    </article>
  );
}
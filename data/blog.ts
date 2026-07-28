export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
content: {
  heading: string;
  paragraphs: string[];
}[];
  author: string;
  publishedAt: string;
  readingTime: number;
  image: string;
  category: string;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "mejor-ia-para-estudiar",
    title: "Mejor IA para estudiar en 2026: las 7 herramientas que realmente merecen la pena",
    excerpt:
      "Descubre cuáles son las mejores inteligencias artificiales para estudiar, hacer resúmenes, resolver dudas y preparar exámenes.",
    content: [
{
  heading: "1. ChatGPT",
  paragraphs: [
    "ChatGPT es la mejor herramienta de inteligencia artificial para la mayoría de estudiantes. Destaca por su capacidad para explicar conceptos complejos de forma sencilla, resolver ejercicios paso a paso, resumir apuntes y generar esquemas claros.",
    "Es especialmente útil para preparar exámenes, aprender idiomas, redactar trabajos y comprender materias como matemáticas, historia, biología o programación. La versión gratuita es suficiente para la mayoría de estudiantes, aunque ChatGPT Plus ofrece respuestas más avanzadas y acceso a los modelos más recientes.",
    "Si solo pudieras elegir una IA para estudiar, ChatGPT sería nuestra primera recomendación."
  ]
},
  
],
    author: "AIAtlas",
    publishedAt: "27 de julio de 2026",
    readingTime: 8,
    image: "/blog/mejor-ia-estudiar.jpg",
    category: "Guías",
    tags: ["IA", "Estudiar", "ChatGPT", "Claude", "Gemini"],
    seoTitle: "Mejor IA para estudiar en 2026 | AIAtlas",
    seoDescription:
      "Comparativa de las mejores herramientas de inteligencia artificial para estudiar, resumir apuntes y preparar exámenes en 2026."
  }
];
import { tools } from "@/data/tools";
import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const toolPages = tools.map((tool) => ({
  url: `https://aiatlas.vercel.app/herramienta/${tool.slug}`,
  lastModified: new Date(),
  changeFrequency: "weekly" as const,
  priority: 0.8,
}));

const rankings = [
  "programar",
  "estudiar",
  "escribir",
  "trabajo",
].map((slug) => ({
  url: `https://aiatlas.vercel.app/rankings/${slug}`,
  lastModified: new Date(),
  changeFrequency: "weekly" as const,
  priority: 0.8,
}));
 return [
  {
    url: "https://aiatlas.vercel.app",
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  },
  {
    url: "https://aiatlas.vercel.app/herramientas",
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.9,
  },
  {
    url: "https://aiatlas.vercel.app/comparativas",
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.9,
  },
  {
    url: "https://aiatlas.vercel.app/blog",
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.8,
  },

  ...toolPages,
  ...rankings,
];
}
import { blogPosts } from "@/data/blog";
import { tools } from "@/data/tools";
import { MetadataRoute } from "next";

const BASE_URL = "https://aiatlas.es";

export default function sitemap(): MetadataRoute.Sitemap {
  const toolPages = tools.map((tool) => ({
    url: `${BASE_URL}/herramienta/${tool.slug}`,
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
    url: `${BASE_URL}/rankings/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
  const blogPages = blogPosts.map((post) => ({
  url: `${BASE_URL}/blog/${post.slug}`,
  lastModified: new Date(post.publishedAt),
  changeFrequency: "monthly" as const,
  priority: 0.7,
}));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/herramientas`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/comparativas`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },

    ...toolPages,
    ...rankings,
  ];
}
import { tools, type Tool } from "@/data/tools";

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getRelatedTools(tool: Tool): Tool[] {
  return tool.relatedTools
    .map((slug) => getToolBySlug(slug))
    .filter((t): t is Tool => t !== undefined);
}

export function getAllToolSlugs(): string[] {
  return tools.map((tool) => tool.slug);
}

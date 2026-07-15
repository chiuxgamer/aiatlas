import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolDetail } from "@/components/tool/tool-detail";
import {
  getAllToolSlugs,
  getRelatedTools,
  getToolBySlug,
} from "@/lib/tools";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllToolSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: "Herramienta no encontrada | AIAtlas",
    };
  }

  return {
    title: `${tool.name} — ${tool.tagline} | AIAtlas`,
    description: tool.description,
  };
}

export default async function HerramientaPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const relatedTools = getRelatedTools(tool);

  return <ToolDetail tool={tool} relatedTools={relatedTools} />;
}

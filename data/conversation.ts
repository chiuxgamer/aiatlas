import type { Tool } from "./tools";

export const conversationTools: Tool[] = [
{
    id: "chatgpt",
    slug: "chatgpt",
    name: "ChatGPT",
    tagline: "El asistente de IA más popular del mundo",
    category: "Conversación",
    description:
      "ChatGPT es el asistente conversacional de OpenAI que revolucionó el acceso público a la inteligencia artificial. Permite redactar textos, resolver problemas, programar, analizar datos y mantener conversaciones contextuales de alta calidad. Su versión Plus desbloquea modelos avanzados, navegación web, análisis de archivos y generación de imágenes.",
    pricing: "Freemium",
    website: "https://chat.openai.com",
    logo: "CG",
    rating: 4.8,
    reviewCount: 12400,
    pros: [
      "Respuestas rápidas y naturales en múltiples idiomas",
      "Ecosistema amplio con plugins, GPTs personalizados y API",
      "Excelente para redacción, brainstorming y productividad general",
    ],
    cons: [
      "El plan gratuito tiene límites de uso y modelo menos potente",
      "Puede generar información incorrecta sin verificación",
      "Privacidad limitada en el plan gratuito",
    ],
    useCases: [
      "Redacción de emails, artículos y copy de marketing",
      "Tutoría y resolución de dudas académicas",
      "Asistencia en programación y depuración de código",
      "Resumen y análisis de documentos largos",
    ],
    similarTech: ["GPT-4o", "LLM", "OpenAI API", "RAG"],
    relatedTools: ["claude", "gemini", "perplexity"],
  
  features: [
  "GPT-5",
  "Generación de imágenes",
  "Análisis de documentos",
  "Programación",
  "Memoria",
  "Navegación web",
],

company: "OpenAI",
launchYear: "2022",
platforms: "Web, iOS, Android, Windows, macOS",
api: "Sí",
freePlan: "Sí",
},
];
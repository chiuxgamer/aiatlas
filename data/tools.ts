export type Tool = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  pricing: string;
  website: string;
  logo: string;
  rating: number;
  reviewCount: number;

  pros: string[];
  cons: string[];
  useCases: string[];
  similarTech: string[];
  relatedTools: string[];
  features?: string[];
  bestFor?: string[];
  company?: string;
  launchYear?: string;
  platforms?: string;
  api?: string;
  freePlan?: string;
  featured?: boolean;
  editorChoice?: boolean;
  seoTitle?: string;
seoDescription?: string;
keywords?: string[];

  // Comparativas
  responseQuality?: number;
  programming?: number;
  creativity?: number;
  speed?: number;
  easeOfUse?: number;
  privacy?: number;
};

export const tools: Tool[] = [
  {
  id: "chatgpt",
  slug: "chatgpt",
  name: "ChatGPT",
  tagline: "El asistente de IA de OpenAI",
  category: "Chatbots",

  description:
    "ChatGPT es el asistente de inteligencia artificial desarrollado por OpenAI. Permite responder preguntas, generar textos, programar, resumir documentos, traducucir contenido, analizar imágenes y automatizar tareas. Es una de las herramientas de IA más utilizadas del mundo tanto por estudiantes como por empresas.",

  pricing: "Freemium",
  website: "https://chatgpt.com",
  logo: "GPT",

  rating: 4.9,
  reviewCount: 2500000,

  company: "OpenAI",
  launchYear: "2022",
  platforms: "Web, Windows, macOS, iOS y Android",
  api: "Sí",
  freePlan: "Sí",

  pros: [
    "Excelente calidad de respuestas",
    "Muy fácil de utilizar",
    "Ideal para programación y escritura",
    "Gran ecosistema de herramientas",
  ],

  cons: [
    "Las funciones más avanzadas requieren ChatGPT Plus",
    "Puede cometer errores o inventar información",
  ],

  features: [
    "GPT-5",
    "Modo voz",
    "Análisis de imágenes",
    "Generación de texto",
    "Programación",
    "Carga de documentos",
  ],

  useCases: [
    "Redacción de contenido",
    "Programación",
    "Estudio",
    "Marketing",
    "Automatización",
  ],

  bestFor: [
    "estudiar",
    "programar",
    "escribir",
    "trabajo",
  ],

  similarTech: [
    "Claude",
    "Gemini",
    "DeepSeek",
    "Perplexity",
  ],

  relatedTools: [
    "claude",
    "gemini",
    "perplexity",
    "deepseek",
  ],

  featured: true,
  editorChoice: true,

  seoTitle:
    "ChatGPT: análisis, precio, funciones y alternativas (2026)",

  seoDescription:
    "Descubre ChatGPT de OpenAI. Analizamos sus funciones, precio, ventajas, inconvenientes y las mejores alternativas disponibles.",

  keywords: [
    "chatgpt",
    "chatgpt gratis",
    "chatgpt precio",
    "chatgpt opiniones",
    "openai",
  ],

  responseQuality: 5,
  programming: 5,
  creativity: 5,
  speed: 5,
  easeOfUse: 5,
  privacy: 4,
},
  
  {
  id: "claude",
  slug: "claude",
  name: "Claude",
  tagline: "La IA de Anthropic especializada en razonamiento y escritura",
  category: "Chatbots",

  description:
    "Claude es el asistente de inteligencia artificial desarrollado por Anthropic. Destaca por su excelente razonamiento, su capacidad para analizar documentos largos y generar textos naturales. Es una de las mejores alternativas a ChatGPT para profesionales, desarrolladores y empresas.",

  pricing: "Freemium",
  website: "https://claude.ai",
  logo: "CL",

  rating: 4.8,
  reviewCount: 6800,

  company: "Anthropic",
  launchYear: "2023",
  platforms: "Web, iOS y Android",
  api: "Sí",
  freePlan: "Sí",

  pros: [
    "Excelente comprensión de documentos largos",
    "Respuestas muy naturales",
    "Gran capacidad de razonamiento",
    "Muy útil para programación y escritura",
  ],

  cons: [
    "Menos integraciones que ChatGPT",
    "No genera imágenes de forma nativa",
    "El plan gratuito tiene límites diarios",
  ],

  features: [
    "Claude 4",
    "Contexto largo",
    "Análisis de documentos",
    "Programación",
    "Escritura profesional",
    "API",
  ],

  useCases: [
    "Programación",
    "Análisis de documentos",
    "Redacción profesional",
    "Investigación",
  ],

  bestFor: [
    "programar",
    "escribir",
    "estudiar",
    "empresas",
  ],

  similarTech: [
    "ChatGPT",
    "Gemini",
    "DeepSeek",
    "Perplexity",
  ],

  relatedTools: [
    "chatgpt",
    "gemini",
    "deepseek",
    "perplexity",
  ],

  featured: true,
  editorChoice: true,

  seoTitle:
    "Claude AI: análisis, precio, funciones y alternativas (2026)",

  seoDescription:
    "Conoce Claude AI de Anthropic. Descubre sus funciones, ventajas, precio, opiniones y las mejores alternativas a ChatGPT.",

  keywords: [
    "claude",
    "claude ai",
    "anthropic",
    "claude precio",
    "claude opiniones",
  ],

  responseQuality: 5,
  programming: 5,
  creativity: 5,
  speed: 5,
  easeOfUse: 4,
  privacy: 5,
},
  {
  id: "gemini",
  slug: "gemini",
  name: "Gemini",
  tagline: "La inteligencia artificial multimodal de Google",
  category: "Chatbots",

  description:
    "Gemini es el asistente de inteligencia artificial desarrollado por Google. Gracias a sus capacidades multimodales puede comprender texto, imágenes, audio y documentos, además de integrarse con Gmail, Google Docs, Drive y el resto del ecosistema Google.",

  pricing: "Freemium",
  website: "https://gemini.google.com",
  logo: "GM",

  rating: 4.7,
  reviewCount: 5200,

  company: "Google",
  launchYear: "2023",
  platforms: "Web, Android, iOS",
  api: "Sí",
  freePlan: "Sí",

  pros: [
    "Excelente integración con Google Workspace",
    "Capacidades multimodales",
    "Muy útil para estudiar y trabajar",
    "Acceso gratuito bastante completo",
  ],

  cons: [
    "El razonamiento todavía puede ser irregular",
    "Algunas funciones solo están disponibles en Gemini Advanced",
    "Menos preciso que ChatGPT en programación compleja",
  ],

  features: [
    "Gemini 2.5",
    "Análisis de imágenes",
    "Google Workspace",
    "Carga de documentos",
    "Programación",
    "API",
  ],

  useCases: [
    "Estudiar",
    "Productividad",
    "Análisis de documentos",
    "Investigación",
    "Automatización",
  ],

  bestFor: [
    "estudiar",
    "trabajo",
    "google workspace",
    "investigación",
  ],

  similarTech: [
    "ChatGPT",
    "Claude",
    "DeepSeek",
    "Perplexity",
  ],

  relatedTools: [
    "chatgpt",
    "claude",
    "perplexity",
    "deepseek",
  ],

  featured: true,
  editorChoice: true,

  seoTitle:
    "Gemini AI: análisis, precio, funciones y opiniones (2026)",

  seoDescription:
    "Descubre Gemini de Google. Analizamos sus funciones, ventajas, precio, opiniones y alternativas.",

  keywords: [
    "gemini",
    "google gemini",
    "gemini ai",
    "gemini precio",
    "gemini opiniones",
  ],

  responseQuality: 4,
  programming: 4,
  creativity: 4,
  speed: 5,
  easeOfUse: 5,
  privacy: 4,
},

{
  id: "perplexity",
  slug: "perplexity",
  name: "Perplexity",
  tagline: "El buscador con inteligencia artificial y fuentes verificadas",
  category: "Investigación",

  description:
    "Perplexity combina un motor de búsqueda con inteligencia artificial para ofrecer respuestas actualizadas acompañadas de fuentes verificables. Es una de las mejores herramientas para investigar, contrastar información y encontrar datos fiables en pocos segundos.",

  pricing: "Freemium",
  website: "https://www.perplexity.ai",
  logo: "PX",

  rating: 4.8,
  reviewCount: 4100,

  company: "Perplexity AI",
  launchYear: "2022",
  platforms: "Web, iOS y Android",
  api: "Sí",
  freePlan: "Sí",

  pros: [
    "Incluye fuentes verificadas",
    "Información actualizada",
    "Excelente para investigación",
    "Muy rápida",
  ],

  cons: [
    "No destaca tanto en creatividad",
    "Las mejores funciones requieren Pro",
    "Depende de las fuentes disponibles",
  ],

  features: [
    "Búsqueda web",
    "Fuentes verificadas",
    "Investigación",
    "Modo Pro",
    "API",
  ],

  useCases: [
    "Investigación",
    "Verificación de información",
    "Estudio",
    "Noticias",
    "Investigación de mercado",
  ],

  bestFor: [
    "investigar",
    "estudiar",
    "periodismo",
    "empresas",
  ],

  similarTech: [
    "ChatGPT",
    "Gemini",
    "Claude",
    "DeepSeek",
  ],

  relatedTools: [
    "chatgpt",
    "gemini",
    "claude",
    "deepseek",
  ],

  featured: true,

  seoTitle:
    "Perplexity AI: análisis, precio y opiniones (2026)",

  seoDescription:
    "Analizamos Perplexity AI, el buscador con inteligencia artificial que responde utilizando fuentes verificadas.",

  keywords: [
    "perplexity",
    "perplexity ai",
    "buscador ia",
    "perplexity opiniones",
    "perplexity precio",
  ],

  responseQuality: 5,
  programming: 3,
  creativity: 3,
  speed: 5,
  easeOfUse: 5,
  privacy: 4,
},

{
  id: "cursor",
  slug: "cursor",
  name: "Cursor",
  tagline: "El editor de código con inteligencia artificial más avanzado",
  category: "Programación",

  description:
    "Cursor es un editor basado en Visual Studio Code que incorpora inteligencia artificial para programar más rápido. Permite generar código, modificar proyectos completos, explicar funciones y trabajar con agentes inteligentes directamente desde el editor.",

  pricing: "Freemium",
  website: "https://cursor.com",
  logo: "CR",

  rating: 4.9,
  reviewCount: 8900,

  company: "Cursor",
  launchYear: "2023",
  platforms: "Windows, macOS y Linux",
  api: "No",
  freePlan: "Sí",

  pros: [
    "Excelente para desarrollar software",
    "Entiende proyectos completos",
    "Muy rápido",
    "Compatible con VS Code",
  ],

  cons: [
    "Consume créditos rápidamente",
    "Requiere conexión a internet",
    "Puede resultar complejo para principiantes",
  ],

  features: [
    "Autocompletado",
    "Agentes IA",
    "Edición de múltiples archivos",
    "Chat integrado",
    "Refactorización",
  ],

  useCases: [
    "Desarrollo web",
    "Aplicaciones móviles",
    "Refactorización",
    "Debugging",
    "Programación diaria",
  ],

  bestFor: [
    "programadores",
    "desarrolladores",
    "startups",
    "empresas",
  ],

  similarTech: [
    "GitHub Copilot",
    "ChatGPT",
    "Claude",
    "Windsurf",
  ],

  relatedTools: [
    "github-copilot",
    "chatgpt",
    "claude",
    "deepseek",
  ],

  featured: true,
  editorChoice: true,

  seoTitle:
    "Cursor AI: análisis, precio y opiniones (2026)",

  seoDescription:
    "Descubre Cursor AI, uno de los mejores editores de código con inteligencia artificial para programadores.",

  keywords: [
    "cursor ai",
    "cursor editor",
    "cursor ia",
    "cursor opiniones",
    "cursor precio",
  ],

  responseQuality: 4,
  programming: 5,
  creativity: 3,
  speed: 5,
  easeOfUse: 4,
  privacy: 4,
},
  {
  id: "midjourney",
  slug: "midjourney",
  name: "Midjourney",
  tagline: "La referencia en generación de imágenes con inteligencia artificial",
  category: "Diseño",

  description:
    "Midjourney es una de las mejores herramientas de generación de imágenes mediante inteligencia artificial. Destaca por crear ilustraciones, arte conceptual, fotografías y diseños con un nivel de calidad excepcional, siendo una de las opciones favoritas de diseñadores, artistas y estudios creativos.",

  pricing: "De pago",
  website: "https://www.midjourney.com",
  logo: "MJ",

  rating: 4.9,
  reviewCount: 7600,

  company: "Midjourney",
  launchYear: "2022",
  platforms: "Web (Discord)",
  api: "No",
  freePlan: "No",

  pros: [
    "Calidad artística líder del mercado",
    "Resultados muy realistas y creativos",
    "Gran comunidad de usuarios",
    "Ideal para diseño profesional",
  ],

  cons: [
    "No dispone de plan gratuito",
    "Se utiliza principalmente desde Discord",
    "No permite editar imágenes con tanta precisión como otras herramientas",
  ],

  features: [
    "Generación de imágenes",
    "Arte conceptual",
    "Fotografía IA",
    "Estilos personalizados",
    "Upscaling",
  ],

  useCases: [
    "Concept Art",
    "Marketing",
    "Diseño gráfico",
    "Redes sociales",
    "Branding",
  ],

  bestFor: [
    "diseñadores",
    "artistas",
    "marketing",
    "creadores de contenido",
  ],

  similarTech: [
    "Flux",
    "Ideogram",
    "Adobe Firefly",
    "Canva AI",
  ],

  relatedTools: [
    "flux",
    "ideogram",
    "adobe-firefly",
    "canva-ai",
  ],

  featured: true,
  editorChoice: true,

  seoTitle:
    "Midjourney: análisis, precio, funciones y opiniones (2026)",

  seoDescription:
    "Descubre Midjourney, una de las mejores IA para generar imágenes. Analizamos sus funciones, ventajas, precio y alternativas.",

  keywords: [
    "midjourney",
    "midjourney ai",
    "generador de imágenes ia",
    "midjourney precio",
    "midjourney opiniones",
  ],

  responseQuality: 5,
  programming: 1,
  creativity: 5,
  speed: 4,
  easeOfUse: 3,
  privacy: 4,
},
{
  id: "runway",
  slug: "runway",
  name: "Runway",
  tagline: "La plataforma líder para crear vídeos con inteligencia artificial",
  category: "Vídeo",

  description:
    "Runway permite generar, editar y mejorar vídeos mediante inteligencia artificial. Es una de las plataformas más utilizadas para crear contenido audiovisual, anuncios, cortometrajes y vídeos para redes sociales gracias a sus modelos de generación de vídeo y herramientas de edición avanzadas.",

  pricing: "Freemium",
  website: "https://runwayml.com",
  logo: "RW",

  rating: 4.8,
  reviewCount: 3400,

  company: "Runway",
  launchYear: "2018",
  platforms: "Web",
  api: "Sí",
  freePlan: "Sí",

  pros: [
    "Excelente calidad de vídeo",
    "Generación de vídeo desde texto e imágenes",
    "Herramientas profesionales de edición",
    "Muy utilizado por creadores de contenido",
  ],

  cons: [
    "Los créditos gratuitos se agotan rápido",
    "La generación puede tardar varios minutos",
    "Funciones avanzadas solo disponibles en planes de pago",
  ],

  features: [
    "Texto a vídeo",
    "Imagen a vídeo",
    "Edición IA",
    "Eliminación de fondos",
    "Motion Tracking",
  ],

  useCases: [
    "YouTube",
    "TikTok",
    "Publicidad",
    "Cine",
    "Marketing",
  ],

  bestFor: [
    "creadores de contenido",
    "empresas",
    "agencias",
    "marketing",
  ],

  similarTech: [
    "Kling AI",
    "Pika",
    "Luma AI",
    "Canva AI",
  ],

  relatedTools: [
    "kling-ai",
    "pika",
    "luma-ai",
    "canva-ai",
  ],

  featured: true,

  seoTitle:
    "Runway AI: análisis, precio y opiniones (2026)",

  seoDescription:
    "Analizamos Runway AI, una de las mejores plataformas para crear y editar vídeos con inteligencia artificial.",

  keywords: [
    "runway",
    "runway ai",
    "video ia",
    "texto a video",
    "runway precio",
  ],

  responseQuality: 4,
  programming: 1,
  creativity: 5,
  speed: 4,
  easeOfUse: 4,
  privacy: 4,
},
{
  id: "elevenlabs",
  slug: "elevenlabs",
  name: "ElevenLabs",
  tagline: "La mejor inteligencia artificial para generar voces realistas",
  category: "Audio",

  description:
    "ElevenLabs es una plataforma especializada en síntesis de voz mediante inteligencia artificial. Permite crear voces extremadamente realistas, clonar voces, doblar vídeos a otros idiomas y generar narraciones con calidad profesional para todo tipo de proyectos.",

  pricing: "Freemium",
  website: "https://elevenlabs.io",
  logo: "EL",

  rating: 4.9,
  reviewCount: 5100,

  company: "ElevenLabs",
  launchYear: "2022",
  platforms: "Web",
  api: "Sí",
  freePlan: "Sí",

  pros: [
    "Voces muy naturales",
    "Excelente clonación de voz",
    "Compatible con múltiples idiomas",
    "Muy utilizado por creadores de contenido",
  ],

  cons: [
    "El plan gratuito tiene bastantes límites",
    "La clonación de voz requiere verificación",
    "Puede utilizarse de forma indebida si no se controla",
  ],

  features: [
    "Texto a voz",
    "Clonación de voz",
    "Doblaje IA",
    "Más de 30 idiomas",
    "API",
  ],

  useCases: [
    "YouTube",
    "Podcasts",
    "Audiolibros",
    "Narraciones",
    "Asistentes virtuales",
  ],

  bestFor: [
    "creadores de contenido",
    "podcasters",
    "empresas",
    "youtube",
  ],

  similarTech: [
    "Murf AI",
    "PlayHT",
    "Speechify",
    "Google AI Studio",
  ],

  relatedTools: [
    "murf-ai",
    "playht",
    "speechify",
    "runway",
  ],

  featured: true,
  editorChoice: true,

  seoTitle:
    "ElevenLabs: análisis, precio y opiniones (2026)",

  seoDescription:
    "Descubre ElevenLabs, la plataforma líder para generar voces con inteligencia artificial y clonación de voz.",

  keywords: [
    "elevenlabs",
    "texto a voz",
    "voz ia",
    "clonar voz",
    "elevenlabs opiniones",
  ],

  responseQuality: 5,
  programming: 2,
  creativity: 5,
  speed: 5,
  easeOfUse: 5,
  privacy: 4,
},
 {
  id: "grok",
  slug: "grok",
  name: "Grok",
  tagline: "La inteligencia artificial de xAI con información en tiempo real",
  category: "Chatbots",

  description:
    "Grok es el asistente de inteligencia artificial desarrollado por xAI. Destaca por su integración con X (Twitter), el acceso a información en tiempo real y su capacidad para responder preguntas, programar, analizar documentos y generar contenido con un estilo conversacional.",

  pricing: "Freemium",
  website: "https://grok.com",
  logo: "GK",

  rating: 4.7,
  reviewCount: 7200,

  company: "xAI",
  launchYear: "2023",
  platforms: "Web, iOS y Android",
  api: "Sí",
  freePlan: "Sí",

  pros: [
    "Información actualizada en tiempo real",
    "Excelente integración con X",
    "Buen razonamiento",
    "Muy rápido respondiendo",
  ],

  cons: [
    "Algunas funciones requieren suscripción",
    "Menos integraciones que ChatGPT",
    "Todavía en evolución",
  ],

  features: [
    "Búsqueda web",
    "Programación",
    "Análisis de documentos",
    "IA conversacional",
    "API",
  ],

  useCases: [
    "Noticias",
    "Investigación",
    "Programación",
    "Creación de contenido",
  ],

  bestFor: [
    "investigar",
    "programar",
    "trabajo",
    "actualidad",
  ],

  similarTech: [
    "ChatGPT",
    "Claude",
    "Gemini",
    "DeepSeek",
  ],

  relatedTools: [
    "chatgpt",
    "claude",
    "gemini",
    "deepseek",
  ],

  featured: true,

  seoTitle:
    "Grok AI: análisis, precio, funciones y opiniones (2026)",

  seoDescription:
    "Descubre Grok, la inteligencia artificial de xAI. Analizamos sus funciones, ventajas, precio y alternativas.",

  keywords: [
    "grok",
    "grok ai",
    "xai",
    "grok chat",
    "grok opiniones",
  ],

  responseQuality: 5,
  programming: 4,
  creativity: 4,
  speed: 5,
  easeOfUse: 5,
  privacy: 4,
},{
  id: "microsoft-copilot",
  slug: "microsoft-copilot",
  name: "Microsoft Copilot",
  tagline: "El asistente de IA integrado en Microsoft 365 y Windows",
  category: "Productividad",

  description:
    "Microsoft Copilot es el asistente de inteligencia artificial de Microsoft. Está integrado en Windows, Microsoft 365, Edge y otras aplicaciones para ayudar a redactar documentos, analizar datos, crear presentaciones y mejorar la productividad diaria.",

  pricing: "Freemium",
  website: "https://copilot.microsoft.com",
  logo: "MC",

  rating: 4.7,
  reviewCount: 8400,

  company: "Microsoft",
  launchYear: "2023",
  platforms: "Web, Windows, iOS y Android",
  api: "Sí",
  freePlan: "Sí",

  pros: [
    "Integración excelente con Microsoft 365",
    "Muy útil para empresas",
    "Compatible con Windows",
    "Fácil de utilizar",
  ],

  cons: [
    "Las funciones avanzadas requieren Microsoft 365",
    "Menos creativo que ChatGPT",
    "Su potencial depende del ecosistema Microsoft",
  ],

  features: [
    "Microsoft 365",
    "Word",
    "Excel",
    "PowerPoint",
    "IA conversacional",
    "API",
  ],

  useCases: [
    "Trabajo de oficina",
    "Presentaciones",
    "Análisis de datos",
    "Productividad",
  ],

  bestFor: [
    "empresas",
    "trabajo",
    "oficina",
    "productividad",
  ],

  similarTech: [
    "ChatGPT",
    "Claude",
    "Gemini",
    "Notion AI",
  ],

  relatedTools: [
    "chatgpt",
    "claude",
    "gemini",
    "notion-ai",
  ],

  featured: true,

  seoTitle:
    "Microsoft Copilot: análisis, precio y opiniones (2026)",

  seoDescription:
    "Descubre Microsoft Copilot, el asistente de inteligencia artificial integrado en Windows y Microsoft 365.",

  keywords: [
    "microsoft copilot",
    "copilot",
    "copilot microsoft",
    "windows copilot",
    "microsoft ia",
  ],

  responseQuality: 5,
  programming: 4,
  creativity: 4,
  speed: 5,
  easeOfUse: 5,
  privacy: 4,
},{
  id: "poe",
  slug: "poe",
  name: "Poe",
  tagline: "Accede a los mejores modelos de IA desde una sola aplicación",
  category: "Chatbots",

  description:
    "Poe es una plataforma desarrollada por Quora que reúne modelos de inteligencia artificial como ChatGPT, Claude, Gemini, Grok y muchos más. Permite comparar respuestas entre diferentes modelos y crear bots personalizados desde una única interfaz.",

  pricing: "Freemium",
  website: "https://poe.com",
  logo: "PO",

  rating: 4.6,
  reviewCount: 5400,

  company: "Quora",
  launchYear: "2022",
  platforms: "Web, iOS y Android",
  api: "No",
  freePlan: "Sí",

  pros: [
    "Acceso a múltiples modelos",
    "Muy fácil de utilizar",
    "Permite comparar respuestas",
    "Creación de bots personalizados",
  ],

  cons: [
    "Los mejores modelos requieren suscripción",
    "Límite diario en el plan gratuito",
    "Depende de servicios externos",
  ],

  features: [
    "Múltiples modelos",
    "Bots personalizados",
    "Comparación de respuestas",
    "Chat IA",
  ],

  useCases: [
    "Comparar modelos",
    "Programación",
    "Estudio",
    "Creación de contenido",
  ],

  bestFor: [
    "estudiar",
    "programar",
    "comparar modelos",
    "escribir",
  ],

  similarTech: [
    "ChatGPT",
    "Claude",
    "Gemini",
    "Grok",
  ],

  relatedTools: [
    "chatgpt",
    "claude",
    "gemini",
    "grok",
  ],

  featured: true,

  seoTitle:
    "Poe AI: análisis, precio y opiniones (2026)",

  seoDescription:
    "Analizamos Poe AI, la plataforma que permite utilizar ChatGPT, Claude, Gemini, Grok y muchos otros modelos desde un único lugar.",

  keywords: [
    "poe ai",
    "poe",
    "quora poe",
    "chatbots ia",
    "poe opiniones",
  ],

  responseQuality: 4,
  programming: 4,
  creativity: 5,
  speed: 5,
  easeOfUse: 5,
  privacy: 4,
},{
  id: "adobe-firefly",
  slug: "adobe-firefly",
  name: "Adobe Firefly",
  tagline: "La inteligencia artificial generativa integrada en Adobe",
  category: "Diseño",

  description:
    "Adobe Firefly es la plataforma de inteligencia artificial generativa de Adobe. Permite crear imágenes, efectos, ilustraciones y contenido gráfico directamente desde Photoshop, Illustrator y el resto de aplicaciones de Creative Cloud, convirtiéndose en una de las mejores opciones para diseñadores profesionales.",

  pricing: "Freemium",
  website: "https://firefly.adobe.com",
  logo: "AF",

  rating: 4.8,
  reviewCount: 5100,

  company: "Adobe",
  launchYear: "2023",
  platforms: "Web",
  api: "Sí",
  freePlan: "Sí",

  pros: [
    "Integración perfecta con Creative Cloud",
    "Resultados muy profesionales",
    "Generación rápida de imágenes",
    "Uso comercial seguro con Adobe",
  ],

  cons: [
    "Se aprovecha mejor con Creative Cloud",
    "Funciones avanzadas requieren suscripción",
    "Menos libertad creativa que Midjourney",
  ],

  features: [
    "Texto a imagen",
    "Relleno generativo",
    "Edición IA",
    "Photoshop",
    "Illustrator",
    "API",
  ],

  useCases: [
    "Diseño gráfico",
    "Marketing",
    "Fotografía",
    "Publicidad",
  ],

  bestFor: [
    "diseñadores",
    "empresas",
    "marketing",
    "fotografía",
  ],

  similarTech: [
    "Midjourney",
    "Leonardo AI",
    "Ideogram",
    "Canva AI",
  ],

  relatedTools: [
    "midjourney",
    "leonardo-ai",
    "ideogram",
    "canva-ai",
  ],

  featured: true,

  seoTitle:
    "Adobe Firefly: análisis, precio y opiniones (2026)",

  seoDescription:
    "Descubre Adobe Firefly, la plataforma de inteligencia artificial generativa integrada en Photoshop e Illustrator.",

  keywords: [
    "adobe firefly",
    "firefly ai",
    "photoshop ia",
    "adobe inteligencia artificial",
    "firefly opiniones",
  ],

  responseQuality: 5,
  programming: 1,
  creativity: 5,
  speed: 5,
  easeOfUse: 5,
  privacy: 5,
},{
  id: "flux",
  slug: "flux",
  name: "Flux",
  tagline: "Uno de los mejores modelos de generación de imágenes con IA",
  category: "Diseño",

  description:
    "Flux es un modelo de generación de imágenes desarrollado por Black Forest Labs. Destaca por ofrecer imágenes muy realistas, una excelente calidad visual y una velocidad superior a muchos modelos de difusión tradicionales.",

  pricing: "Freemium",
  website: "https://blackforestlabs.ai",
  logo: "FX",

  rating: 4.8,
  reviewCount: 3200,

  company: "Black Forest Labs",
  launchYear: "2024",
  platforms: "Web",
  api: "Sí",
  freePlan: "Sí",

  pros: [
    "Imágenes muy realistas",
    "Excelente calidad",
    "Muy rápido generando contenido",
    "Compatible con numerosas plataformas",
  ],

  cons: [
    "No dispone de aplicación propia completa",
    "Depende de servicios compatibles",
    "Menos conocido que Midjourney",
  ],

  features: [
    "Texto a imagen",
    "Alta resolución",
    "Generación rápida",
    "API",
  ],

  useCases: [
    "Diseño gráfico",
    "Publicidad",
    "Concept Art",
    "Marketing",
  ],

  bestFor: [
    "diseñadores",
    "marketing",
    "creadores",
    "publicidad",
  ],

  similarTech: [
    "Midjourney",
    "Leonardo AI",
    "Stable Diffusion",
    "Ideogram",
  ],

  relatedTools: [
    "midjourney",
    "stable-diffusion",
    "leonardo-ai",
    "ideogram",
  ],

  featured: true,

  seoTitle:
    "Flux AI: análisis, precio y opiniones (2026)",

  seoDescription:
    "Analizamos Flux, uno de los modelos de inteligencia artificial más avanzados para generar imágenes realistas.",

  keywords: [
    "flux ai",
    "black forest labs",
    "generador imágenes ia",
    "flux opiniones",
  ],

  responseQuality: 5,
  programming: 1,
  creativity: 5,
  speed: 5,
  easeOfUse: 4,
  privacy: 4,
},{
  id: "stable-diffusion",
  slug: "stable-diffusion",
  name: "Stable Diffusion",
  tagline: "El modelo open source más popular para generar imágenes",
  category: "Diseño",

  description:
    "Stable Diffusion es uno de los modelos de generación de imágenes mediante inteligencia artificial más populares del mundo. Al ser de código abierto, permite personalizar modelos, entrenar estilos propios y utilizar la IA tanto en la nube como de forma local.",

  pricing: "Gratis",
  website: "https://stability.ai",
  logo: "SD",

  rating: 4.8,
  reviewCount: 11200,

  company: "Stability AI",
  launchYear: "2022",
  platforms: "Web, Windows, macOS y Linux",
  api: "Sí",
  freePlan: "Sí",

  pros: [
    "Completamente open source",
    "Muy personalizable",
    "Gran comunidad",
    "Compatible con miles de modelos",
  ],

  cons: [
    "Requiere conocimientos técnicos",
    "Necesita hardware potente para uso local",
    "Curva de aprendizaje elevada",
  ],

  features: [
    "Texto a imagen",
    "Modelos personalizados",
    "Open Source",
    "API",
  ],

  useCases: [
    "Concept Art",
    "Marketing",
    "Diseño",
    "Videojuegos",
  ],

  bestFor: [
    "desarrolladores",
    "artistas",
    "diseñadores",
    "usuarios avanzados",
  ],

  similarTech: [
    "Flux",
    "Midjourney",
    "Leonardo AI",
    "Ideogram",
  ],

  relatedTools: [
    "flux",
    "midjourney",
    "leonardo-ai",
    "ideogram",
  ],

  featured: true,
  editorChoice: true,

  seoTitle:
    "Stable Diffusion: análisis, funciones y opiniones (2026)",

  seoDescription:
    "Descubre Stable Diffusion, el modelo open source más utilizado para generar imágenes con inteligencia artificial.",

  keywords: [
    "stable diffusion",
    "stability ai",
    "ia imágenes",
    "stable diffusion opiniones",
  ],

  responseQuality: 5,
  programming: 2,
  creativity: 5,
  speed: 4,
  easeOfUse: 3,
  privacy: 5,
},{
  id: "pika",
  slug: "pika",
  name: "Pika",
  tagline: "Crea vídeos con inteligencia artificial en cuestión de segundos",
  category: "Vídeo",

  description:
    "Pika es una plataforma de generación de vídeo mediante inteligencia artificial que transforma texto e imágenes en vídeos dinámicos con efectos cinematográficos. Es especialmente popular entre creadores de contenido que necesitan producir vídeos para redes sociales de forma rápida.",

  pricing: "Freemium",
  website: "https://pika.art",
  logo: "PK",

  rating: 4.7,
  reviewCount: 3900,

  company: "Pika Labs",
  launchYear: "2023",
  platforms: "Web",
  api: "No",
  freePlan: "Sí",

  pros: [
    "Muy fácil de utilizar",
    "Generación rápida de vídeos",
    "Ideal para contenido en redes sociales",
    "Resultados visualmente atractivos",
  ],

  cons: [
    "Créditos gratuitos limitados",
    "Funciones avanzadas reservadas al plan de pago",
    "Menos opciones de edición que Runway",
  ],

  features: [
    "Texto a vídeo",
    "Imagen a vídeo",
    "Animaciones IA",
    "Efectos visuales",
  ],

  useCases: [
    "TikTok",
    "Instagram",
    "Publicidad",
    "Marketing",
  ],

  bestFor: [
    "creadores de contenido",
    "redes sociales",
    "marketing",
    "vídeo",
  ],

  similarTech: [
    "Runway",
    "Kling AI",
    "Luma AI",
    "Sora",
  ],

  relatedTools: [
    "runway",
    "kling-ai",
    "luma-ai",
  ],

  featured: true,

  seoTitle:
    "Pika AI: análisis, precio y opiniones (2026)",

  seoDescription:
    "Descubre Pika AI, una plataforma para crear vídeos mediante inteligencia artificial de forma rápida y sencilla.",

  keywords: [
    "pika ai",
    "pika labs",
    "texto a vídeo",
    "pika opiniones",
  ],

  responseQuality: 4,
  programming: 1,
  creativity: 5,
  speed: 5,
  easeOfUse: 5,
  privacy: 4,
},{
  id: "udio",
  slug: "udio",
  name: "Udio",
  tagline: "Crea música profesional con IA",
  category: "Audio",
  description:
    "Udio permite generar canciones realistas con voces e instrumentos mediante inteligencia artificial.",
  pricing: "Freemium",
  website: "https://udio.com",
  logo: "UD",
  rating: 4.8,
  reviewCount: 7200,
  pros: ["Muy realista", "Gran calidad", "Fácil de usar"],
  cons: ["Créditos diarios", "Funciones premium"],
  useCases: ["Música", "Publicidad", "Contenido"],
  similarTech: ["Suno"],
  relatedTools: ["suno", "elevenlabs"],
  company: "Udio",
  launchYear: "2024",
  platforms: "Web",
  api: "No",
  freePlan: "Sí",
  featured: true,
  bestFor: ["audio"],
  responseQuality: 5,
  programming: 1,
  creativity: 5,
  speed: 5,
  easeOfUse: 5,
  privacy: 4,
},{
  id: "grammarly",
  slug: "grammarly",
  name: "Grammarly",
  tagline: "La IA líder para mejorar tu escritura",
  category: "Escritura",
  description:
    "Grammarly corrige gramática, ortografía, estilo y tono mediante inteligencia artificial.",
  pricing: "Freemium",
  website: "https://grammarly.com",
  logo: "GR",
  rating: 4.8,
  reviewCount: 21000,
  pros: ["Muy preciso", "Extensiones para navegador", "Excelente para inglés"],
  cons: ["Más limitado en español", "Funciones Pro de pago"],
  useCases: ["Emails", "Trabajo", "Universidad"],
  similarTech: ["ChatGPT"],
  relatedTools: ["chatgpt", "claude"],
  company: "Grammarly",
  launchYear: "2009",
  platforms: "Web, Windows, macOS",
  api: "No",
  freePlan: "Sí",
  featured: true,
  bestFor: ["escribir", "trabajo"],
  responseQuality: 5,
  programming: 1,
  creativity: 4,
  speed: 5,
  easeOfUse: 5,
  privacy: 5,
},{
  id: "gamma",
  slug: "gamma",
  name: "Gamma",
  tagline: "Presentaciones creadas con IA",
  category: "Productividad",
  description:
    "Gamma genera presentaciones, documentos y páginas web mediante inteligencia artificial.",
  pricing: "Freemium",
  website: "https://gamma.app",
  logo: "GA",
  rating: 4.8,
  reviewCount: 6800,
  pros: ["Muy rápido", "Presentaciones profesionales", "Diseño moderno"],
  cons: ["Créditos limitados", "Funciones premium"],
  useCases: ["Presentaciones", "Trabajo", "Ventas"],
  similarTech: ["Canva AI"],
  relatedTools: ["canva-ai", "chatgpt"],
  company: "Gamma",
  launchYear: "2023",
  platforms: "Web",
  api: "No",
  freePlan: "Sí",
  featured: true,
  bestFor: ["trabajo", "escribir"],
  responseQuality: 5,
  programming: 1,
  creativity: 5,
  speed: 5,
  easeOfUse: 5,
  privacy: 4,
},{
  id: "bolt-new",
  slug: "bolt-new",
  name: "Bolt.new",
  tagline: "Crea aplicaciones completas con IA",
  category: "Programación",
  description:
    "Bolt.new permite desarrollar aplicaciones web completas mediante prompts utilizando inteligencia artificial.",
  pricing: "Freemium",
  website: "https://bolt.new",
  logo: "BO",
  rating: 4.9,
  reviewCount: 5900,
  pros: ["Genera proyectos completos", "Muy rápido", "Ideal para MVPs"],
  cons: ["Puede requerir ajustes manuales", "Límites en el plan gratuito"],
  useCases: ["SaaS", "Next.js", "React", "MVP"],
  similarTech: ["Cursor", "GitHub Copilot"],
  relatedTools: ["cursor", "github-copilot", "chatgpt"],
  company: "StackBlitz",
  launchYear: "2024",
  platforms: "Web",
  api: "No",
  freePlan: "Sí",
  featured: true,
  bestFor: ["programar"],
  responseQuality: 5,
  programming: 5,
  creativity: 4,
  speed: 5,
  easeOfUse: 5,
  privacy: 4,
},
{
  id: "deepseek",
  slug: "deepseek",
  name: "DeepSeek",
  tagline: "Asistente de IA avanzado para programación y razonamiento",
  category: "Conversación",
  description:
    "DeepSeek es un modelo de inteligencia artificial especializado en programación, razonamiento y resolución de problemas complejos.",
  pricing: "Gratis",
  website: "https://www.deepseek.com",
  logo: "DS",
  rating: 4.8,
  reviewCount: 8100,
  pros: ["Muy bueno programando", "Gratis", "Excelente razonamiento"],
  cons: ["Menos integraciones", "Puede ser más lento"],
  useCases: ["Programación", "Estudiar", "Investigación", "Matemáticas"],
  similarTech: ["ChatGPT", "Claude"],
  relatedTools: ["chatgpt", "claude", "gemini"],
  company: "DeepSeek AI",
  launchYear: "2024",
  platforms: "Web",
  api: "Sí",
  freePlan: "Sí",
  featured: true,
  bestFor: ["programar"],
  responseQuality: 5,
  programming: 5,
  creativity: 4,
  speed: 4,
  easeOfUse: 5,
  privacy: 4,
},
{
  id: "pi-ai",
  slug: "pi-ai",
  name: "Pi AI",
  tagline: "Asistente conversacional centrado en conversaciones naturales",
  category: "Conversación",
  description:
    "Pi AI ofrece conversaciones naturales y un enfoque más humano para responder preguntas y acompañar al usuario.",
  pricing: "Gratis",
  website: "https://pi.ai",
  logo: "PI",
  rating: 4.6,
  reviewCount: 4300,
  pros: ["Muy natural", "Gratis", "Fácil de usar"],
  cons: ["Menos potente programando", "Pocas funciones avanzadas"],
  useCases: ["Conversaciones", "Estudiar", "Ideas"],
  similarTech: ["ChatGPT", "Claude"],
  relatedTools: ["chatgpt", "claude"],
  company: "Inflection AI",
  launchYear: "2023",
  platforms: "Web, iOS",
  api: "No",
  freePlan: "Sí",
  featured: false,
  bestFor: ["chat"],
  responseQuality: 4,
  programming: 2,
  creativity: 5,
  speed: 5,
  easeOfUse: 5,
  privacy: 4,
},{
  id: "windsurf",
  slug: "windsurf",
  name: "Windsurf",
  tagline: "Editor de código con IA de nueva generación",
  category: "Programación",
  description:
    "Windsurf es un editor de código impulsado por inteligencia artificial que ayuda a desarrollar software más rápido.",
  pricing: "Freemium",
  website: "https://windsurf.com",
  logo: "WS",
  rating: 4.8,
  reviewCount: 4100,
  pros: ["Muy rápido", "Excelente IA", "Ideal para desarrolladores"],
  cons: ["Funciones premium", "Curva de aprendizaje"],
  useCases: ["React", "Next.js", "Python", "Desarrollo web"],
  similarTech: ["Cursor", "Bolt.new"],
  relatedTools: ["cursor", "bolt-new", "github-copilot"],
  company: "Codeium",
  launchYear: "2024",
  platforms: "Windows, macOS, Linux",
  api: "No",
  freePlan: "Sí",
  featured: true,
  bestFor: ["programar"],
  responseQuality: 5,
  programming: 5,
  creativity: 4,
  speed: 5,
  easeOfUse: 5,
  privacy: 4,
},
{
  id: "lovable",
  slug: "lovable",
  name: "Lovable",
  tagline: "Crea aplicaciones completas mediante IA",
  category: "Programación",
  description:
    "Lovable genera aplicaciones completas utilizando prompts y permite crear MVPs en pocos minutos.",
  pricing: "Freemium",
  website: "https://lovable.dev",
  logo: "LV",
  rating: 4.8,
  reviewCount: 3600,
  pros: ["Muy fácil", "Ideal para startups", "Genera apps completas"],
  cons: ["Necesita revisiones", "Plan gratuito limitado"],
  useCases: ["SaaS", "MVP", "React", "Next.js"],
  similarTech: ["Bolt.new", "Cursor"],
  relatedTools: ["bolt-new", "cursor"],
  company: "Lovable",
  launchYear: "2024",
  platforms: "Web",
  api: "No",
  freePlan: "Sí",
  featured: true,
  bestFor: ["programar"],
  responseQuality: 5,
  programming: 5,
  creativity: 5,
  speed: 5,
  easeOfUse: 5,
  privacy: 4,
},
{
  id: "replit-ai",
  slug: "replit-ai",
  name: "Replit AI",
  tagline: "Programa desde el navegador con IA",
  category: "Programación",
  description:
    "Replit AI permite crear, editar y desplegar proyectos completos directamente desde el navegador.",
  pricing: "Freemium",
  website: "https://replit.com",
  logo: "RP",
  rating: 4.7,
  reviewCount: 7200,
  pros: ["Muy cómodo", "Cloud IDE", "Despliegue integrado"],
  cons: ["Límites gratuitos", "Depende de Internet"],
  useCases: ["Python", "JavaScript", "Web", "Educación"],
  similarTech: ["Cursor", "Codeium"],
  relatedTools: ["cursor", "codeium"],
  company: "Replit",
  launchYear: "2023",
  platforms: "Web",
  api: "Sí",
  freePlan: "Sí",
  featured: false,
  bestFor: ["programar"],
  responseQuality: 4,
  programming: 5,
  creativity: 4,
  speed: 5,
  easeOfUse: 5,
  privacy: 4,
},
{
  id: "codeium",
  slug: "codeium",
  name: "Codeium",
  tagline: "Autocompletado de código con IA",
  category: "Programación",
  description:
    "Codeium ofrece autocompletado inteligente y asistencia para programadores en múltiples lenguajes.",
  pricing: "Freemium",
  website: "https://codeium.com",
  logo: "CD",
  rating: 4.7,
  reviewCount: 6800,
  pros: ["Muy rápido", "Compatible con muchos IDE", "Gratis para uso personal"],
  cons: ["No siempre acierta", "Funciones premium"],
  useCases: ["VS Code", "Python", "Java", "C++"],
  similarTech: ["GitHub Copilot", "Cursor"],
  relatedTools: ["github-copilot", "cursor"],
  company: "Codeium",
  launchYear: "2022",
  platforms: "Windows, macOS, Linux",
  api: "Sí",
  freePlan: "Sí",
  featured: false,
  bestFor: ["programar"],
  responseQuality: 4,
  programming: 5,
  creativity: 3,
  speed: 5,
  easeOfUse: 5,
  privacy: 4,
},
{
  id: "ideogram",
  slug: "ideogram",
  name: "Ideogram",
  tagline: "Genera imágenes y texto con IA",
  category: "Diseño",
  description: "Ideogram crea imágenes de alta calidad con una excelente generación de texto dentro de las imágenes.",
  pricing: "Freemium",
  website: "https://ideogram.ai",
  logo: "IG",
  rating: 4.8,
  reviewCount: 6100,
  pros: ["Excelente texto", "Muy buena calidad", "Fácil de usar"],
  cons: ["Créditos limitados", "Funciones premium"],
  useCases: ["Logotipos", "Carteles", "Marketing", "Redes sociales"],
  similarTech: ["Midjourney", "FLUX"],
  relatedTools: ["midjourney", "flux"],
  company: "Ideogram",
  launchYear: "2023",
  platforms: "Web",
  api: "Sí",
  freePlan: "Sí",
  featured: true,
  bestFor: ["imagenes"],
  responseQuality: 5,
  programming: 1,
  creativity: 5,
  speed: 5,
  easeOfUse: 5,
  privacy: 4,
},
{
  id: "canva-ai",
  slug: "canva-ai",
  name: "Canva AI",
  tagline: "Diseño inteligente para todos",
  category: "Diseño",
  description: "Canva AI incorpora herramientas de inteligencia artificial para crear diseños, presentaciones e imágenes en minutos.",
  pricing: "Freemium",
  website: "https://www.canva.com",
  logo: "CV",
  rating: 4.8,
  reviewCount: 18500,
  pros: ["Muy fácil", "Miles de plantillas", "Ideal para principiantes"],
  cons: ["Algunas funciones son Pro", "Menos personalización"],
  useCases: ["Presentaciones", "Redes sociales", "Marketing"],
  similarTech: ["Adobe Firefly", "Ideogram"],
  relatedTools: ["adobe-firefly", "ideogram"],
  company: "Canva",
  launchYear: "2023",
  platforms: "Web, iOS, Android",
  api: "No",
  freePlan: "Sí",
  featured: true,
  bestFor: ["diseño"],
  responseQuality: 4,
  programming: 1,
  creativity: 5,
  speed: 5,
  easeOfUse: 5,
  privacy: 4,
},
{
  id: "luma-ai",
  slug: "luma-ai",
  name: "Luma AI",
  tagline: "Generación de vídeos y modelos 3D con inteligencia artificial",
  category: "Vídeo",

  description:
    "Luma AI es una plataforma especializada en generación de vídeo y creación de escenas 3D mediante inteligencia artificial. Gracias a sus modelos avanzados permite producir vídeos realistas, animaciones y reconstrucciones tridimensionales con calidad profesional.",

  pricing: "Freemium",
  website: "https://lumalabs.ai",
  logo: "LU",

  rating: 4.8,
  reviewCount: 3400,

  company: "Luma Labs",
  launchYear: "2023",
  platforms: "Web",
  api: "Sí",
  freePlan: "Sí",

  pros: [
    "Excelente calidad visual",
    "Generación de escenas 3D",
    "Muy innovador",
    "Compatible con flujos profesionales",
  ],

  cons: [
    "Funciones avanzadas de pago",
    "La generación puede tardar varios minutos",
    "Curva de aprendizaje superior a otras plataformas",
  ],

  features: [
    "Texto a vídeo",
    "Escenas 3D",
    "Imagen a vídeo",
    "API",
  ],

  useCases: [
    "Cine",
    "Publicidad",
    "Modelado 3D",
    "Marketing",
  ],

  bestFor: [
    "cine",
    "empresas",
    "vídeo",
    "3d",
  ],

  similarTech: [
    "Runway",
    "Kling AI",
    "Pika",
    "Sora",
  ],

  relatedTools: [
    "runway",
    "kling-ai",
    "pika",
  ],

  featured: true,

  seoTitle:
    "Luma AI: análisis, precio y opiniones (2026)",

  seoDescription:
    "Analizamos Luma AI, una de las plataformas más avanzadas para generar vídeos y escenas 3D con inteligencia artificial.",

  keywords: [
    "luma ai",
    "luma labs",
    "vídeo ia",
    "3d ia",
  ],

  responseQuality: 5,
  programming: 1,
  creativity: 5,
  speed: 4,
  easeOfUse: 4,
  privacy: 4,
},{
  id: "synthesia",
  slug: "synthesia",
  name: "Synthesia",
  tagline: "Crea vídeos profesionales con avatares de inteligencia artificial",
  category: "Vídeo",

  description:
    "Synthesia permite crear vídeos con presentadores virtuales generados por inteligencia artificial en decenas de idiomas. Es una de las plataformas más utilizadas por empresas para formación, comunicación interna, ventas y marketing.",

  pricing: "De pago",
  website: "https://www.synthesia.io",
  logo: "SY",

  rating: 4.8,
  reviewCount: 6100,

  company: "Synthesia",
  launchYear: "2019",
  platforms: "Web",
  api: "Sí",
  freePlan: "No",

  pros: [
    "Avatares muy realistas",
    "Compatible con numerosos idiomas",
    "Ideal para empresas",
    "No requiere conocimientos de edición",
  ],

  cons: [
    "No dispone de un plan gratuito completo",
    "Menos flexible para proyectos cinematográficos",
    "Los mejores avatares requieren planes superiores",
  ],

  features: [
    "Avatares IA",
    "Texto a vídeo",
    "Doblaje",
    "API",
  ],

  useCases: [
    "Formación",
    "Presentaciones",
    "Marketing",
    "Empresas",
  ],

  bestFor: [
    "empresas",
    "formación",
    "marketing",
    "presentaciones",
  ],

  similarTech: [
    "HeyGen",
    "Runway",
    "Pika",
    "Luma AI",
  ],

  relatedTools: [
    "runway",
    "pika",
    "luma-ai",
  ],

  featured: true,

  seoTitle:
    "Synthesia: análisis, precio y opiniones (2026)",

  seoDescription:
    "Descubre Synthesia, la plataforma líder para crear vídeos con avatares de inteligencia artificial.",

  keywords: [
    "synthesia",
    "avatares ia",
    "video ia",
    "synthesia opiniones",
  ],

  responseQuality: 5,
  programming: 1,
  creativity: 4,
  speed: 5,
  easeOfUse: 5,
 privacy: 5,
},{
  id: "suno",
  slug: "suno",
  name: "Suno",
  tagline: "Genera canciones completas con inteligencia artificial",
  category: "Audio",

  description:
    "Suno permite crear canciones completas a partir de una simple descripción. Genera automáticamente letra, voz e instrumentación con una calidad sorprendente, convirtiéndose en una de las herramientas de IA musical más populares del mercado.",

  pricing: "Freemium",
  website: "https://suno.com",
  logo: "SU",

  rating: 4.9,
  reviewCount: 9800,

  company: "Suno",
  launchYear: "2023",
  platforms: "Web",
  api: "No",
  freePlan: "Sí",

  pros: [
    "Calidad musical excelente",
    "Muy fácil de utilizar",
    "Genera canciones completas",
    "Gran variedad de estilos musicales",
  ],

  cons: [
    "Créditos gratuitos limitados",
    "Funciones avanzadas reservadas al plan Pro",
    "No permite un control tan detallado como un DAW profesional",
  ],

  features: [
    "Generación de canciones",
    "Letra automática",
    "Voces IA",
    "Música instrumental",
  ],

  useCases: [
    "Música",
    "YouTube",
    "TikTok",
    "Publicidad",
  ],

  bestFor: [
    "músicos",
    "creadores de contenido",
    "youtube",
    "marketing",
  ],

  similarTech: [
    "Udio",
    "ElevenLabs",
    "AIVA",
    "Soundraw",
  ],

 relatedTools: [
    "elevenlabs",
  ],

  featured: true,
  editorChoice: true,

  seoTitle:
    "Suno AI: análisis, precio y opiniones (2026)",

  seoDescription:
    "Analizamos Suno AI, una de las mejores herramientas para generar canciones con inteligencia artificial.",

  keywords: [
    "suno ai",
    "generar canciones ia",
    "música ia",
    "suno opiniones",
  ],

  responseQuality: 5,
  programming: 1,
  creativity: 5,
  speed: 5,
  easeOfUse: 5,
  privacy: 4,
},
{
  id: "descript",
  slug: "descript",
  name: "Descript",
  tagline: "Edita audio y vídeo como si editaras un documento",

  category: "Audio",

  description:
    "Descript es una plataforma de edición de audio y vídeo impulsada por inteligencia artificial que permite modificar grabaciones simplemente editando el texto transcrito. También incorpora clonación de voz, eliminación de palabras de relleno y herramientas para creadores de contenido y podcasts.",

  pricing: "Freemium",
  website: "https://www.descript.com",
  logo: "DE",

  rating: 4.8,
  reviewCount: 6100,

  company: "Descript",
  launchYear: "2019",
  platforms: "Windows y macOS",
  api: "Sí",
  freePlan: "Sí",

  pros: [
    "Edición muy intuitiva",
    "Transcripción automática muy precisa",
    "Clonación de voz integrada",
    "Ideal para podcasts y YouTube",
  ],

  cons: [
    "Plan gratuito limitado",
    "Puede consumir bastantes recursos",
    "Las mejores funciones requieren suscripción",
  ],

  features: [
    "Transcripción automática",
    "Edición mediante texto",
    "Clonación de voz",
    "Eliminación de muletillas",
    "API",
  ],

  useCases: [
    "Podcasts",
    "YouTube",
    "Entrevistas",
    "Edición de vídeo",
  ],

  bestFor: [
    "podcasters",
    "creadores de contenido",
    "youtube",
    "edición",
  ],

  similarTech: [
    "ElevenLabs",
    "Adobe Podcast",
    "CapCut",
    "Audacity",
  ],

  relatedTools: [
    "elevenlabs",
  ],

  seoTitle:
    "Descript: análisis, precio y opiniones (2026)",

  seoDescription:
    "Descubre Descript, una de las mejores herramientas para editar audio y vídeo mediante inteligencia artificial.",

  keywords: [
    "descript",
    "descript ai",
    "editar podcast",
    "transcripción ia",
    "descript opiniones",
  ],

  responseQuality: 4,
  programming: 1,
  creativity: 5,
  speed: 5,
  easeOfUse: 5,
  privacy: 4,
},{
  id: "heygen",
  slug: "heygen",
  name: "HeyGen",
  tagline: "Crea vídeos con avatares realistas mediante inteligencia artificial",

  category: "Vídeo",

  description:
    "HeyGen permite crear vídeos profesionales utilizando avatares generados por inteligencia artificial. Incluye traducción automática, sincronización labial, clonación de voz y herramientas pensadas para marketing, formación y comunicación empresarial.",

  pricing: "Freemium",
  website: "https://www.heygen.com",
  logo: "HG",

  rating: 4.8,
  reviewCount: 7800,

  company: "HeyGen",
  launchYear: "2023",
  platforms: "Web",
  api: "Sí",
  freePlan: "Sí",

  pros: [
    "Avatares muy realistas",
    "Excelente doblaje mediante IA",
    "Muy fácil de utilizar",
    "Ideal para empresas",
  ],

  cons: [
    "El plan gratuito es limitado",
    "Los planes avanzados son relativamente caros",
    "Menos flexible para edición cinematográfica",
  ],

  features: [
    "Avatares IA",
    "Texto a vídeo",
    "Traducción automática",
    "Clonación de voz",
    "API",
  ],

  useCases: [
    "Marketing",
    "Empresas",
    "Formación",
    "Presentaciones",
  ],

  bestFor: [
    "empresas",
    "marketing",
    "formación",
    "presentaciones",
  ],

  similarTech: [
    "Synthesia",
    "Runway",
    "Pika",
    "Luma AI",
  ],

  relatedTools: [
    "synthesia",
    "runway",
    "pika",
  ],

  featured: true,

  seoTitle:
    "HeyGen: análisis, precio y opiniones (2026)",

  seoDescription:
    "Analizamos HeyGen, una de las plataformas más populares para crear vídeos con avatares mediante inteligencia artificial.",

  keywords: [
    "heygen",
    "heygen ai",
    "avatares ia",
    "video ia",
    "heygen opiniones",
  ],

  responseQuality: 5,
  programming: 1,
  creativity: 5,
  speed: 5,
  easeOfUse: 5,
  privacy: 4,
},
];

console.log("TOOLS:", tools.map(t => t.id));
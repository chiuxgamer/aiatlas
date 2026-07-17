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
};

export const tools: Tool[] = [
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
},
  {
    id: "claude",
    slug: "claude",
    name: "Claude",
    tagline: "IA segura y precisa para trabajo profundo",
    category: "Conversación",
    description:
      "Claude es el asistente de Anthropic diseñado para conversaciones largas, análisis detallado y razonamiento cuidadoso. Destaca en la lectura de documentos extensos, escritura con tono natural y tareas que requieren contexto amplio. Es una alternativa sólida para profesionales que priorizan calidad de respuesta sobre velocidad.",
    pricing: "Freemium",
    website: "https://claude.ai",
    logo: "CL",
    rating: 4.7,
    reviewCount: 6800,
    pros: [
      "Excelente manejo de contexto largo y documentos extensos",
      "Tono de escritura natural y bien estructurado",
      "Enfoque en seguridad y respuestas más prudentes",
    ],
    cons: [
      "Menos integraciones de terceros que ChatGPT",
      "Sin generación de imágenes nativa",
      "Límites estrictos en el plan gratuito",
    ],
    useCases: [
      "Análisis de contratos, informes y PDFs largos",
      "Redacción profesional y contenido editorial",
      "Investigación y síntesis de información compleja",
      "Asistencia en estrategia y toma de decisiones",
    ],
    similarTech: ["Claude 3.5", "Constitutional AI", "LLM", "Anthropic API"],
    relatedTools: ["chatgpt", "gemini", "notion-ai"],
  },
  {
    id: "gemini",
    slug: "gemini",
    name: "Gemini",
    tagline: "IA multimodal integrada con Google",
    category: "Conversación",
    description:
      "Gemini es el modelo de inteligencia artificial de Google con capacidades multimodales: texto, imágenes, audio y video. Se integra nativamente con Gmail, Docs, Drive y el buscador de Google, lo que lo convierte en una opción potente para usuarios del ecosistema Google que necesitan IA en su flujo de trabajo diario.",
    pricing: "Freemium",
    website: "https://gemini.google.com",
    logo: "GM",
    rating: 4.5,
    reviewCount: 5200,
    pros: [
      "Integración profunda con productos de Google",
      "Capacidades multimodales nativas",
      "Acceso gratuito generoso para uso personal",
    ],
    cons: [
      "Resultados variables en tareas de razonamiento complejo",
      "Menos maduro que competidores en programación",
      "Disponibilidad de funciones según región",
    ],
    useCases: [
      "Resumir emails y redactar respuestas en Gmail",
      "Investigación con acceso a información actualizada",
      "Análisis de imágenes y contenido visual",
      "Productividad en Google Workspace",
    ],
    similarTech: ["Gemini 1.5", "Multimodal AI", "Google AI", "Bard"],
    relatedTools: ["chatgpt", "claude", "perplexity"],
  },
  {
    id: "perplexity",
    slug: "perplexity",
    name: "Perplexity",
    tagline: "Búsqueda con IA y fuentes verificables",
    category: "Búsqueda",
    description:
      "Perplexity combina un motor de búsqueda con modelos de lenguaje para ofrecer respuestas directas con citas y fuentes enlazadas. Es ideal para investigación, verificación de hechos y obtención de información actualizada, superando a los chatbots tradicionales cuando la precisión factual es prioritaria.",
    pricing: "Freemium",
    website: "https://www.perplexity.ai",
    logo: "PX",
    rating: 4.6,
    reviewCount: 4100,
    pros: [
      "Respuestas con fuentes citadas y enlaces verificables",
      "Información actualizada en tiempo real",
      "Interfaz limpia orientada a investigación",
    ],
    cons: [
      "Menos versátil para tareas creativas o de programación",
      "Pro Mode requiere suscripción de pago",
      "Dependiente de la calidad de las fuentes indexadas",
    ],
    useCases: [
      "Investigación de mercado y competencia",
      "Verificación de noticias y datos actuales",
      "Preparación de informes con referencias",
      "Aprendizaje rápido sobre temas nuevos",
    ],
    similarTech: ["RAG", "Web Search AI", "Citation Engine", "LLM"],
    relatedTools: ["chatgpt", "gemini", "claude"],
  },
  {
    id: "cursor",
    slug: "cursor",
    name: "Cursor",
    tagline: "El IDE definitivo para programar con IA",
    category: "Programación",
    description:
      "Cursor es un editor de código basado en VS Code con IA profundamente integrada. Ofrece autocompletado inteligente, chat contextual sobre tu codebase, edición multi-archivo con agentes y refactorización automática. Es la herramienta preferida por desarrolladores que quieren multiplicar su productividad sin salir del editor.",
    pricing: "Freemium",
    website: "https://cursor.com",
    logo: "CR",
    rating: 4.9,
    reviewCount: 8900,
    pros: [
      "Comprensión profunda del contexto del proyecto completo",
      "Agentes que editan múltiples archivos automáticamente",
      "Experiencia familiar basada en VS Code",
    ],
    cons: [
      "Curva de aprendizaje para aprovechar agentes al máximo",
      "Uso intensivo consume créditos rápidamente",
      "Requiere conexión a internet para funciones de IA",
    ],
    useCases: [
      "Desarrollo full-stack con asistencia de IA",
      "Refactorización y migración de código legacy",
      "Generación de tests y documentación técnica",
      "Debugging asistido con contexto del proyecto",
    ],
    similarTech: ["Copilot", "Code LLM", "Agentic IDE", "VS Code"],
    relatedTools: ["chatgpt", "claude", "notion-ai"],
  },
  {
    id: "midjourney",
    slug: "midjourney",
    name: "Midjourney",
    tagline: "Arte e imágenes de calidad profesional con IA",
    category: "Diseño",
    description:
      "Midjourney es el referente en generación de imágenes artísticas por IA. Produce resultados estéticamente superiores en ilustración, concept art, fotografía sintética y diseño visual. Opera principalmente a través de Discord y ofrece control avanzado mediante prompts, parámetros y estilos personalizados.",
    pricing: "De pago",
    website: "https://www.midjourney.com",
    logo: "MJ",
    rating: 4.8,
    reviewCount: 7600,
    pros: [
      "Calidad artística superior a la mayoría de competidores",
      "Estilos visuales consistentes y altamente pulidos",
      "Comunidad activa con recursos y prompts compartidos",
    ],
    cons: [
      "Sin plan gratuito permanente",
      "Interfaz basada en Discord puede resultar poco intuitiva",
      "Control preciso de texto en imágenes es limitado",
    ],
    useCases: [
      "Concept art para videojuegos y cine",
      "Ilustraciones para redes sociales y marketing",
      "Diseño de portadas y material visual editorial",
      "Moodboards y exploración creativa de marca",
    ],
    similarTech: ["Diffusion Models", "Text-to-Image", "Discord Bot", "Generative AI"],
    relatedTools: ["canva-ai", "runway", "elevenlabs"],
  },
  {
    id: "runway",
    slug: "runway",
    name: "Runway",
    tagline: "Creación y edición de video con IA generativa",
    category: "Video",
    description:
      "Runway es una plataforma de creación audiovisual que permite generar, editar y transformar videos con inteligencia artificial. Incluye generación de video desde texto, eliminación de fondos, motion tracking y efectos visuales asistidos por IA. Es la herramienta de referencia para creadores de contenido y profesionales del vídeo.",
    pricing: "Freemium",
    website: "https://runwayml.com",
    logo: "RW",
    rating: 4.6,
    reviewCount: 3400,
    pros: [
      "Generación de video de alta calidad desde texto o imagen",
      "Suite completa de edición con herramientas de IA",
      "Usado por estudios profesionales y creadores",
    ],
    cons: [
      "Los créditos gratuitos se agotan rápidamente",
      "Generación de video puede ser lenta",
      "Curva de aprendizaje en herramientas avanzadas",
    ],
    useCases: [
      "Videos promocionales y contenido para redes",
      "Efectos visuales y postproducción rápida",
      "Prototipado de escenas para cine y publicidad",
      "Eliminación de fondos y rotoscopia automática",
    ],
    similarTech: ["Gen-3", "Video Diffusion", "Text-to-Video", "VFX AI"],
    relatedTools: ["midjourney", "elevenlabs", "canva-ai"],
  },
  {
    id: "elevenlabs",
    slug: "elevenlabs",
    name: "ElevenLabs",
    tagline: "Voces sintéticas indistinguibles de humanos reales",
    category: "Audio",
    description:
      "ElevenLabs lidera la síntesis de voz con IA, ofreciendo locuciones ultrarrealistas, clonación de voz, doblaje multilingüe y efectos de audio. Es la solución preferida para podcasts, audiolibros, vídeos narrados y accesibilidad, con voces que capturan emoción, ritmo y matices naturales.",
    pricing: "Freemium",
    website: "https://elevenlabs.io",
    logo: "EL",
    rating: 4.7,
    reviewCount: 5100,
    pros: [
      "Calidad de voz líder en la industria",
      "Clonación de voz con pocos minutos de audio",
      "Doblaje automático a múltiples idiomas",
    ],
    cons: [
      "Riesgo de uso indebido en deepfakes de voz",
      "Plan gratuito muy limitado en caracteres",
      "Clonación de voz requiere verificación en planes avanzados",
    ],
    useCases: [
      "Narración de vídeos y contenido de YouTube",
      "Producción de audiolibros y podcasts",
      "Doblaje de contenido a otros idiomas",
      "Asistentes de voz y experiencias interactivas",
    ],
    similarTech: ["TTS", "Voice Cloning", "Speech Synthesis", "Audio AI"],
    relatedTools: ["runway", "midjourney", "notion-ai"],
  },
  {
    id: "notion-ai",
    slug: "notion-ai",
    name: "Notion AI",
    tagline: "IA integrada en tu espacio de trabajo",
    category: "Productividad",
    description:
      "Notion AI lleva la inteligencia artificial directamente al espacio de trabajo más popular para notas, wikis y gestión de proyectos. Permite redactar, resumir, traducir, generar tablas y automatizar tareas sin salir de Notion, ideal para equipos que ya organizan su trabajo en la plataforma.",
    pricing: "De pago",
    website: "https://www.notion.so/product/ai",
    logo: "NA",
    rating: 4.4,
    reviewCount: 2900,
    pros: [
      "Integración nativa sin cambiar de herramienta",
      "Perfecto para equipos que ya usan Notion",
      "Resúmenes y acciones rápidas sobre cualquier página",
    ],
    cons: [
      "Requiere suscripción de Notion además del add-on de IA",
      "Menos potente que asistentes dedicados como ChatGPT",
      "Funciones limitadas fuera del ecosistema Notion",
    ],
    useCases: [
      "Documentación de equipos y wikis internas",
      "Resumen de reuniones y notas de proyecto",
      "Generación de briefs y planes de contenido",
      "Organización de bases de conocimiento empresarial",
    ],
    similarTech: ["Workspace AI", "Knowledge Base", "LLM", "Productivity"],
    relatedTools: ["chatgpt", "claude", "canva-ai"],
  },
  {
    id: "canva-ai",
    slug: "canva-ai",
    name: "Canva AI",
    tagline: "Diseño gráfico accesible potenciado por IA",
    category: "Diseño",
    description:
      "Canva AI integra generación de imágenes, redacción de textos, edición mágica y diseño automático en la plataforma de diseño más accesible del mercado. Permite a cualquier persona crear contenido visual profesional para redes sociales, presentaciones y marketing sin experiencia en diseño gráfico.",
    pricing: "Freemium",
    website: "https://www.canva.com/ai",
    logo: "CA",
    rating: 4.5,
    reviewCount: 9800,
    pros: [
      "Interfaz intuitiva sin curva de aprendizaje",
      "Plantillas profesionales combinadas con IA generativa",
      "Ideal para marketing y redes sociales",
    ],
    cons: [
      "Menor calidad artística que herramientas especializadas",
      "Funciones avanzadas de IA requieren plan Pro",
      "Personalización limitada para diseño muy específico",
    ],
    useCases: [
      "Posts y stories para Instagram, LinkedIn y TikTok",
      "Presentaciones y pitch decks corporativos",
      "Material gráfico para campañas de marketing",
      "Diseño rápido de logos y branding básico",
    ],
    similarTech: ["Magic Design", "Text-to-Image", "Template AI", "Graphic Design"],
    relatedTools: ["midjourney", "notion-ai", "runway"],
  },
];

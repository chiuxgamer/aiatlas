import Image from "next/image";
const GRADIENTS = [
  "from-violet-500 to-purple-700",
  "from-blue-500 to-cyan-600",
  "from-emerald-500 to-teal-600",
  "from-orange-500 to-red-600",
  "from-pink-500 to-rose-600",
  "from-indigo-500 to-blue-700",
  "from-amber-500 to-orange-600",
  "from-fuchsia-500 to-purple-600",
];

function getGradient(slug: string) {
  const index = slug.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return GRADIENTS[index % GRADIENTS.length];
}

type ToolLogoProps = {
  logo: string;
  name: string;
  slug: string;
  size?: "md" | "lg";
};

export function ToolLogo({ logo, name, slug, size = "lg" }: ToolLogoProps) {
  const gradient = getGradient(slug);
  const sizeClasses =
    size === "lg"
      ? "h-28 w-28 text-3xl sm:h-32 sm:w-32 sm:text-4xl"
      : "h-14 w-14 text-lg";

  return (
  <div
    className={`flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} font-bold text-white shadow-2xl shadow-violet-500/20 ring-1 ring-white/10 transition-transform duration-300 hover:scale-105 overflow-hidden ${sizeClasses}`}
    aria-label={`Logo de ${name}`}
  >
    <Image
      src={`/logos/${slug}.svg`}
      alt={name}
      width={size === "lg" ? 80 : 40}
      height={size === "lg" ? 80 : 40}
      className="object-contain p-3"
    
    />

    
  </div>
);
}
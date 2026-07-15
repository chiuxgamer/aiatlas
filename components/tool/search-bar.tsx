"use client";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="mx-auto mb-12 max-w-2xl">
      <input
        type="text"
        placeholder="Buscar herramientas de IA..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-lg text-white outline-none transition-all placeholder:text-zinc-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
      />
    </div>
  );
}
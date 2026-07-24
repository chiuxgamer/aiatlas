"use client";

import { Search } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl">
      <div className="relative">
        <Search
          size={22}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
        />

        <input
          type="text"
          placeholder="Buscar ChatGPT, Claude, Gemini..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-6 text-lg text-white outline-none transition-all placeholder:text-zinc-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
        />
      </div>
    </div>
  );
}
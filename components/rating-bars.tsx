type RatingBarsProps = {
  title: string;
  value: number;
};

export function RatingBars({ title, value }: RatingBarsProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-zinc-300">{title}</span>
        <span className="text-sm font-semibold text-white">
          {value}/5
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
          style={{ width: `${value * 20}%` }}
        />
      </div>
    </div>
  );
}
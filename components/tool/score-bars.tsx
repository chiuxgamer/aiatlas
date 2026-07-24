type Props = {
  label: string;
  value: number;
};

export function ScoreBar({ label, value }: Props) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{value}/5</span>
      </div>

      <div className="h-2 rounded-full bg-white/10">
        <div
          className="h-2 rounded-full bg-violet-500"
          style={{
            width: `${value * 20}%`,
          }}
        />
      </div>
    </div>
  );
}
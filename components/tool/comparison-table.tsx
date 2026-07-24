type Props = {
  left: {
    name: string;
    pricing: string;
    rating: number;
    category: string;
  };
  right: {
    name: string;
    pricing: string;
    rating: number;
    category: string;
  };
};

export function ComparisonTable({ left, right }: Props) {
  const rows = [
    {
      title: "Precio",
      left: left.pricing,
      right: right.pricing,
    },
    {
      title: "Categoría",
      left: left.category,
      right: right.category,
    },
    {
      title: "Puntuación",
      left: `⭐ ${left.rating}`,
      right: `⭐ ${right.rating}`,
    },
    {
  title: "Ganador",
  left: left.rating > right.rating ? "🏆" : "",
  right: right.rating > left.rating ? "🏆" : "",
},
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <table className="w-full">
        <thead className="bg-zinc-900">
          <tr>
            <th className="p-4 text-left"></th>
            <th className="p-4 text-center">{left.name}</th>
            <th className="p-4 text-center">{right.name}</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr
              key={row.title}
              className="border-t border-white/10"
            >
              <td className="bg-zinc-900 p-4 font-semibold">
                {row.title}
              </td>

              <td className="p-4 text-center">
                {row.left}
              </td>

              <td className="p-4 text-center">
                {row.right}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
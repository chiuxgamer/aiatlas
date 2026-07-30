type ComparisonItem = {
  name: string;
  bestFor: string;
  free: boolean;
  rating: number;
};

type ComparisonTableProps = {
  items: ComparisonItem[];
};

export default function ComparisonTable({
  items,
}: ComparisonTableProps) {
  return (
    <div className="my-10 overflow-x-auto rounded-2xl border border-zinc-800">
      <table className="w-full border-collapse">
        <thead className="bg-zinc-900">
          <tr>
            <th className="px-5 py-4 text-left">Herramienta</th>
            <th className="px-5 py-4 text-left">Ideal para</th>
            <th className="px-5 py-4 text-center">Gratis</th>
            <th className="px-5 py-4 text-center">Valoración</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr
              key={item.name}
              className="border-t border-zinc-800"
            >
              <td className="px-5 py-4 font-semibold">
                {item.name}
              </td>

              <td className="px-5 py-4">
                {item.bestFor}
              </td>

              <td className="px-5 py-4 text-center">
                {item.free ? "✅" : "❌"}
              </td>

              <td className="px-5 py-4 text-center">
                {"⭐".repeat(item.rating)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
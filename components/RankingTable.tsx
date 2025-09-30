export default function RankingTable() {
  const data = [
    {
      rank: 1,
      name: "Parija Faiza",
      class: "PEMROGRAMAN",
      modul: "L1",
      point: 1234,
    },
    {
      rank: 2,
      name: "Ahmad Ridho",
      class: "CREATIVE MARKETING",
      modul: "L2",
      point: 1100,
    },
    {
      rank: 3,
      name: "Siti Nurhaliza",
      class: "MANAGEMENT SDM",
      modul: "L1",
      point: 980,
    },
    {
      rank: 4,
      name: "Budi Santoso",
      class: "PEMROGRAMAN",
      modul: "L3",
      point: 870,
    },
    {
      rank: 5,
      name: "Rina Maharani",
      class: "CREATIVE MARKETING",
      modul: "L1",
      point: 820,
    },
  ];

  return (
    <div className="overflow-x-auto rounded-lg shadow">
      <table className="min-w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-sm">
            <th className="px-4 py-2 font-semibold">Rank</th>
            <th className="px-4 py-2 font-semibold">Name</th>
            <th className="px-4 py-2 font-semibold">Class</th>
            <th className="px-4 py-2 font-semibold">Modul</th>
            <th className="px-4 py-2 font-semibold">Point</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr
              key={idx}
              className="border-b last:border-none hover:bg-gray-50 text-sm"
            >
              {/* Rank */}
              <td className="px-4 py-2">{item.rank}</td>

              {/* Name */}
              <td className="px-4 py-2 font-semibold">{item.name}</td>

              {/* Class */}
              <td className="px-4 py-2">{item.class}</td>

              {/* Modul */}
              <td className="px-4 py-2">{item.modul}</td>

              {/* Point */}
              <td className="px-4 py-2 text-green-500 font-medium">
                {item.point.toLocaleString()} Point
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

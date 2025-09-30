import Image from "next/image";

interface Competency {
  id: number;
  text: string;
  active: "Y" | "N" | string;
}

interface CardProps {
  image?: string;
  title: string;
  competencies: Competency[];
  bgColor?: string; // default putih
}

export default function CompetencyCard({
  image,
  title,
  competencies,
  bgColor = "bg-white",
}: CardProps) {
  return (
    <div
      className={`rounded-xl shadow-md overflow-hidden border ${bgColor} flex flex-col`}
    >
      {/* Header Image */}
      {image && (
        <div className="relative w-full h-[120px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 className="text-white font-bold uppercase text-sm">
              {title}
            </h3>
          </div>
        </div>
      )}

      {/* Body */}
      <div className="p-4 flex flex-col gap-2">
        <h4 className="text-sm font-semibold">MATERI KOMPETENSI</h4>
        <div className="flex flex-col gap-2">
          {competencies.map((item) => (
            <div
              key={item.id}
              className={`text-sm px-2 py-1 rounded ${
                item.active === "Y"
                  ? "bg-yellow-300 font-medium"
                  : "bg-transparent"
              }`}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

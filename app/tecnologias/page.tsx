import Image from "next/image";
import tecnologiasData from "@/app/data/tecnologias.json";

type Tecnologia = {
  title: string;
  image: string;
  description: string;
  rating: number;
};

export default function Tecnologias() {
  const tecnologias: Tecnologia[] = JSON.parse(JSON.stringify(tecnologiasData));

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Tecnologias Exploradas
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tecnologias.map((tec: Tecnologia, index: number) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-5 flex flex-col items-center text-center border hover:shadow-lg transition"
          >
            <Image
              src={`/tecnologias/${tec.image}`}
              alt={tec.title}
              width={120}
              height={120}
              className="mb-4"
            />

            <h3 className="text-xl font-semibold mb-2">{tec.title}</h3>

            <p className="text-gray-600 text-sm mb-3">{tec.description}</p>

            <p className="font-bold text-yellow-500">
              ⭐ {tec.rating}/5
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

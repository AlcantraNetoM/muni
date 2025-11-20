import tecnologiasData from "@/app/data/tecnologias.json";
import TecnologiaCard from "@/app/components/TecnologiaCard";

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {tecnologias.map((tec: Tecnologia, index: number) => (
          <TecnologiaCard
            key={index}
            id={index}
            title={tec.title}
            image={tec.image}
          />

        ))}
      </div>
    </div>
  );
}

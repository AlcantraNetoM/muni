import Caracteristica from "@/app/components/Caracteristica";

const listaCaracteristicas = [
  "Fácil de usar",
  "Modular",
  "Responsivo",
  "Moderno",
  "Rápido",
  "Flexível",
];

export default function CaracteristicasPage() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <h2 className="text-2xl font-bold mb-4">Características</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {listaCaracteristicas.map((car, index) => (
          <Caracteristica key={index} caracteristica={car} index={index} />
        ))}
      </div>
    </div>
  );
}

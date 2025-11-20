import Link from "next/link";

const listaCaracteristicas = [
    "Fácil de usar",
    "Modular",
    "Responsivo",
    "Moderno",
    "Rápido",
    "Flexível",
];

export default function CaracteristicaPage({ params }: { params: { caracteristica: string } }) {
    const index = parseInt(params.caracteristica);
    const caracteristica = listaCaracteristicas[index];

    if (!caracteristica) {
        return <p className="text-center p-8">Característica não encontrada.</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
            <h2 className="text-3xl font-bold mb-4">{caracteristica}</h2>

            <Link
                href="/caracteristicas"
                className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
                Voltar
            </Link>
        </div>
    );
}

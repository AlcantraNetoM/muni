import tecnologiasData from "@/app/data/tecnologias.json";
import TecnologiaDetailsCard from "@/app/components/TecnologiaDetailsCard";
import Link from "next/link";

export default function TecnologiaPage({ params }: { params: { id: string } }) {
    const tecnologias = JSON.parse(JSON.stringify(tecnologiasData));

    const index = parseInt(params.id);
    const tecnologia = tecnologias[index];

    if (!tecnologia) {
        return <p>Tecnologia não encontrada.</p>;
    }

    return (
        <div className="p-8 flex flex-col items-center gap-6">

            <TecnologiaDetailsCard tecnologia={tecnologia} />

            <Link
                href="/tecnologias"
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Voltar
            </Link>

        </div>
    );
}

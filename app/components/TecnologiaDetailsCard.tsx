import Image from "next/image";
import ContadorPersonalizado from "@/app/components/ContadorPersonalizado";

interface Tecnologia {
    title: string;
    image: string;
    description: string;
    rating: number;
}

export default function TecnologiaDetailsCard({
    tecnologia,
}: {
    tecnologia: Tecnologia;
}) {
    return (
        <div className="bg-white shadow-md rounded-xl p-6 w-96 flex flex-col items-center text-center border">

            <Image
                src={`/tecnologias/${tecnologia.image}`}
                alt={tecnologia.title}
                width={120}
                height={120}
                className="mb-4"
            />

            <h2 className="text-2xl font-bold mb-2">
                {tecnologia.title}
            </h2>

            <p className="text-gray-600 mb-4">
                {tecnologia.description}
            </p>

            <p className="font-bold text-yellow-500 text-lg mb-4">
                ⭐ {tecnologia.rating}/5
            </p>

            {/* Botão de Likes */}
            <ContadorPersonalizado title={tecnologia.title} />

        </div>
    );
}

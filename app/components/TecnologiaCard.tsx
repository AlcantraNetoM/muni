import Image from "next/image";

interface TecnologiaCardProps {
    title: string;
    image: string;
}

export default function TecnologiaCard({ title, image }: TecnologiaCardProps) {
    return (
        <div className="bg-white shadow-md w-48 h-48 rounded-xl flex flex-col items-center justify-center p-4 border hover:shadow-lg transition">
            <Image
                src={`/tecnologias/${image}`}
                alt={title}
                width={70}
                height={70}
                className="mb-3"
            />
            <h3 className="text-center font-semibold">{title}</h3>
        </div>
    );
}

import Image from "next/image";
import Link from "next/link";

interface TecnologiaCardProps {
    title: string;
    image: string;
    id: number;
}

export default function TecnologiaCard({ title, image, id }: TecnologiaCardProps) {
    return (
        <Link href={`/tecnologias/${id}`}>
            <div className="bg-white shadow-md w-48 h-48 rounded-xl flex flex-col items-center justify-center p-4 border hover:shadow-lg transition cursor-pointer">
                <Image
                    src={`/tecnologias/${image}`}
                    alt={title}
                    width={80}
                    height={80}
                    className="mb-3"
                />
                <h3 className="text-center font-semibold">{title}</h3>
            </div>
        </Link>
    );
}

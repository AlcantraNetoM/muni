import Link from "next/link";

interface CaracteristicaProps {
    caracteristica: string;
    index: number;
}

export default function Caracteristica({ caracteristica, index }: CaracteristicaProps) {
    return (
        <Link href={`/caracteristicas/${index}`}>
            <div className="p-4 bg-white shadow rounded-lg cursor-pointer hover:shadow-lg transition">
                {caracteristica}
            </div>
        </Link>
    );
}

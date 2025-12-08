import Image from "next/image";
import { Product } from "@/models/interfaces";

export default function ProdutoDetalhe({ produto }: { produto: Product }) {
    return (
        <div className="bg-white shadow-xl rounded-xl p-6 max-w-md w-full flex flex-col gap-4 items-center text-center">

            <h2 className="text-2xl font-bold">
                {produto.title}
            </h2>

            <Image
                src={produto.image}
                alt={produto.title}
                width={200}
                height={200}
            />

            <p>{produto.description}</p>

            <p className="font-bold">
                {produto.price} €
            </p>

            <p className="text-yellow-500">
                ⭐ {produto.rating.rate} ({produto.rating.count})
            </p>

            <p className="italic">
                Categoria: {produto.category}
            </p>

        </div>
    );
}

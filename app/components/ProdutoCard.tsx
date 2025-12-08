import { Product } from "@/models/interfaces";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

type ProdutoCardProps = {
    produto: Product;
    onAdd?: (produto: Product) => void;
    onRemove?: (id: number) => void;
};

export default function ProdutoCard({
    produto,
    onAdd,
    onRemove,
}: ProdutoCardProps) {
    return (
        <Card className="hover:shadow-lg transition">

            <CardHeader>
                <CardTitle className="text-sm min-h-[40px]">
                    {produto.title}
                </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-4">

                <Image
                    src={produto.image}
                    alt={produto.title}
                    width={140}
                    height={140}
                />

                {/* BOTÕES */}
                {onAdd && (
                    <button
                        onClick={() => onAdd(produto)}
                        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
                    >
                        Adicionar
                    </button>
                )}

                {onRemove && (
                    <button
                        onClick={() => onRemove(produto.id)}
                        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                    >
                        Remover
                    </button>
                )}

            </CardContent>
        </Card>
    );
}
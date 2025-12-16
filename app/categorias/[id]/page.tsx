import Image from "next/image";
import Link from "next/link";

interface Produto {
    id: number;
    title: string;
    price: number;
    image: string;
}

async function getProdutosCategoria(id: string): Promise<Produto[]> {
    const res = await fetch(
        `https://deisishop.pythonanywhere.com/products/?category=${id}`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        return [];
    }

    return res.json();
}

export default async function CategoriaDetalhePage({
    params,
}: {
    params: { id: string };
}) {
    const produtos = await getProdutosCategoria(params.id);

    return (
        <div className="p-8">
            <h1 className="text-3xl mb-6 text-center">
                Produtos da categoria
            </h1>

            {produtos.length === 0 && (
                <p className="text-center">
                    Nenhum produto nesta categoria.
                </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {produtos.map((p) => (
                    <div key={p.id}>
                        <Link
                            href={`/produtos/${p.id}`}
                            className="border p-4 rounded hover:shadow block"
                        >
                            <Image
                                src={`https://deisishop.pythonanywhere.com${p.image}`}
                                alt={p.title}
                                width={150}
                                height={150}
                            />

                            <h3 className="mt-2 font-bold">
                                {p.title}
                            </h3>

                            <p>
                                {Number(p.price).toFixed(2)} €
                            </p>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="mt-6 text-center">
                <Link
                    href="/categorias"
                    className="text-blue-500 underline"
                >
                    Voltar às categorias
                </Link>
            </div>
        </div>
    );
}

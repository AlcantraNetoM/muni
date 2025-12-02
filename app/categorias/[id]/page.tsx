import Image from "next/image";
import Link from "next/link";

interface Produto {
    id: number;
    name: string;
    price: number;
    image: string;
}

async function getProdutosCategoria(id: string): Promise<Produto[]> {
    const res = await fetch(
        `https://deisishop.pythonanywhere.com/api/categorias/${id}/produtos/`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        console.error("Erro ao buscar produtos da categoria:", res.status);
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
        <div>

            <h1>Produtos da categoria</h1>

            {produtos.length === 0 && (
                <p>Nenhum produto nesta categoria.</p>
            )}

            <div className="grid grid-cols-2 gap-4">

                {produtos.map((p) => (
                    <Link key={p.id} href={`/produtos/${p.id}`}>

                        <div className="border p-4 rounded hover:shadow">

                            <Image
                                src={p.image}
                                alt={p.name}
                                width={150}
                                height={150}
                            />

                            <h3>{p.name}</h3>
                            <p>{p.price} €</p>

                        </div>

                    </Link>
                ))}

            </div>

        </div>
    );
}

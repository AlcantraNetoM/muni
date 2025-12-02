import Image from "next/image";
import Link from "next/link";

async function getProdutosCategoria(id: string) {
    const res = await fetch(
        `https://deisishop.pythonanywhere.com/api/categories/${id}/products/`,
        { cache: "no-store" }
    );
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

            <div className="grid grid-cols-2 gap-4">

                {produtos.map((p: any) => (
                    <Link href={`/produtos/${p.id}`} key={p.id}>

                        <div className="border rounded-lg p-3 hover:shadow-md">

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

import Image from "next/image";
import { redirect } from "next/navigation";

async function getProduto(id: string) {
    const res = await fetch(
        `https://deisishop.pythonanywhere.com/api/products/${id}/`,
        { cache: "no-store" }
    );

    if (!res.ok) return null;
    return res.json();
}

async function apagarProduto(id: string) {
    "use server";

    await fetch(
        `https://deisishop.pythonanywhere.com/api/products/${id}/`,
        {
            method: "DELETE",
        }
    );

    redirect("/produtos");
}

export default async function ProdutoPage({
    params,
}: {
    params: { id: string };
}) {

    const produto = await getProduto(params.id);

    if (!produto) return <h1>Produto não encontrado</h1>;

    return (
        <div className="flex flex-col gap-4">

            <h1>{produto.name}</h1>

            <Image
                src={produto.image}
                alt={produto.name}
                width={250}
                height={250}
            />

            <p>{produto.description}</p>
            <p>Preço: {produto.price} €</p>

            {/* Botão apagar */}
            <form action={apagarProduto.bind(null, params.id)}>
                <button className="bg-red-500 text-white px-3 py-2 rounded">
                    Apagar Produto
                </button>
            </form>

        </div>
    );
}

import Image from "next/image";
import { redirect } from "next/navigation";

interface Produto {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

async function getProduto(id: string): Promise<Produto | null> {
    const res = await fetch(
        `https://deisishop.pythonanywhere.com/api/produtos/${id}/`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        console.error("Erro ao buscar produto:", res.status);
        return null;
    }

    return res.json();
}

async function apagarProduto(id: string) {
    "use server";

    await fetch(
        `https://deisishop.pythonanywhere.com/api/produtos/${id}/`,
        { method: "DELETE" }
    );

    redirect("/produtos");
}

export default async function ProdutoPage({
    params,
}: {
    params: { id: string };
}) {

    const produto = await getProduto(params.id);

    if (!produto) {
        return <h1>Produto não encontrado</h1>;
    }

    return (
        <div className="flex flex-col gap-4">

            <h1 className="text-2xl font-bold">
                {produto.name}
            </h1>

            <Image
                src={produto.image}
                alt={produto.name}
                width={250}
                height={250}
                priority
            />

            <p>{produto.description}</p>

            <p className="font-bold">
                {produto.price} €
            </p>

            <form action={apagarProduto.bind(null, params.id)}>
                <button className="bg-red-500 px-4 py-2 text-white rounded">
                    Apagar produto
                </button>
            </form>

        </div>
    );
}

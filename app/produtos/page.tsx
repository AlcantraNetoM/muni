import Image from "next/image";
import Link from "next/link";

async function getProdutos() {
    const res = await fetch("https://deisishop.pythonanywhere.com/api/products/", {
        cache: "no-store",
    });
    return res.json();
}

export default async function ProdutosPage() {
    const produtos = await getProdutos();

    return (
        <div>
            <h1>Produtos</h1>

            <div className="grid grid-cols-2 gap-4">
                {produtos.map((p: any) => (
                    <Link key={p.id} href={`/produtos/${p.id}`}>
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

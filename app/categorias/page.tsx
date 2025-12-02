import Image from "next/image";
import Link from "next/link";

interface Categoria {
    id: number;
    name: string;
    logo: string;
}

async function getCategorias(): Promise<Categoria[]> {
    const res = await fetch(
        "https://deisishop.pythonanywhere.com/api/categorias/",
        { cache: "no-store" }
    );

    if (!res.ok) {
        console.error("Erro ao buscar categorias:", res.status);
        return [];
    }

    return res.json();
}

export default async function CategoriasPage() {
    const categorias = await getCategorias();

    return (
        <div>

            <h1>Categorias</h1>

            {categorias.length === 0 && <p>Nenhuma categoria encontrada.</p>}

            <div className="grid grid-cols-3 gap-4">
                {categorias.map((c) => (
                    <Link key={c.id} href={`/categorias/${c.id}`}>

                        <div className="border p-4 rounded text-center hover:shadow">

                            <Image
                                src={c.logo}
                                alt={c.name}
                                width={120}
                                height={120}
                                priority
                            />

                            <p>{c.name}</p>

                        </div>

                    </Link>
                ))}
            </div>

        </div>
    );
}

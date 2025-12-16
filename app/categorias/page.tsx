import Link from "next/link";
import { Fragment } from "react";

interface Categoria {
    id: number;
    name: string;
}

async function getCategorias(): Promise<Categoria[]> {
    const res = await fetch(
        "https://deisishop.pythonanywhere.com/categories/",
        { cache: "no-store" }
    );

    if (!res.ok) {
        return [];
    }

    return res.json();
}

export default async function CategoriasPage() {
    const categorias = await getCategorias();

    return (
        <div className="p-8">
            <h1 className="text-3xl mb-6 text-center">
                Categorias
            </h1>

            {categorias.length === 0 && (
                <p className="text-center">
                    Nenhuma categoria encontrada.
                </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {categorias.map((c) => (
                    <Fragment key={c.id}>
                        <Link
                            href={`/categorias/${c.id}`}
                            className="border p-6 rounded text-center hover:shadow block"
                        >
                            {c.name}
                        </Link>
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

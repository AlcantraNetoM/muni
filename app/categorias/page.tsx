import Image from "next/image";
import Link from "next/link";

async function getCategorias() {
    const res = await fetch(
        "https://deisishop.pythonanywhere.com/api/categories/",
        { cache: "no-store" }
    );
    return res.json();
}

export default async function CategoriasPage() {

    const categorias = await getCategorias();

    return (
        <div>
            <h1>Categorias</h1>

            <div className="grid grid-cols-3 gap-4">
                {categorias.map((c: any) => (
                    <Link key={c.id} href={`/categorias/${c.id}`}>

                        <div className="border rounded-lg p-3 hover:shadow-md">

                            <Image
                                src={c.logo}
                                alt={c.name}
                                width={120}
                                height={120}
                            />

                            <h3>{c.name}</h3>

                        </div>

                    </Link>
                ))}
            </div>
        </div>
    );
}

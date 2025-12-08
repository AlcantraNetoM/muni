"use client";

import useSWR from "swr";
import { Product } from "@/models/interfaces";
import ProdutoDetalhe from "@/app/components/ProdutoDetalhe";
import Link from "next/link";
import { Loader2 } from "lucide-react";

const fetcher = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Erro ao obter produto");
    return res.json();
};

export default function ProdutoPage({ params }: { params: { id: string } }) {

    const { data, error, isLoading } = useSWR<Product>(
        `https://deisishop.pythonanywhere.com/products/${params.id}`,
        fetcher
    );

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-[60vh]">
                <Loader2 className="w-10 h-10 animate-spin" />
            </div>
        );
    }

    if (error || !data) {
        return <p className="text-center text-red-500">Produto não encontrado.</p>;
    }

    return (
        <div className="p-8 flex flex-col items-center gap-6">

            <ProdutoDetalhe produto={data} />

            <Link
                href="/produtos"
                className="bg-blue-500 px-6 py-2 text-white rounded hover:bg-blue-600 transition"
            >
                Voltar à lista
            </Link>

        </div>
    );
}

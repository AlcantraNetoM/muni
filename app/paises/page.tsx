"use client";

import useSWR from "swr";
import { useEffect, useState } from "react";
import PaisCard from "@/app/components/PaisCard";
import { Pais } from "@/models/interfaces";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function PaisesPage() {

    const { data, error, isLoading } = useSWR(
        "/data/paises.json",
        fetcher
    );

    const [pesquisa, setPesquisa] = useState("");
    const [ordenacao, setOrdenacao] = useState("");
    const [paisesFiltrados, setPaisesFiltrados] = useState<Pais[]>([]);

    useEffect(() => {

        if (!data) {
            return;
        }

        let lista: Pais[] = data.map((p: any) => ({
            nome: p.name.common,
            area: p.area,
            populacao: p.population
        }));

        if (pesquisa !== "") {
            lista = lista.filter(p =>
                p.nome.toLowerCase().includes(pesquisa.toLowerCase())
            );
        }

        if (ordenacao === "pop-asc") {
            lista.sort((a, b) => a.populacao - b.populacao);
        }

        if (ordenacao === "pop-desc") {
            lista.sort((a, b) => b.populacao - a.populacao);
        }

        setPaisesFiltrados(lista);

    }, [data, pesquisa, ordenacao]);

    if (isLoading) {
        return <p>A carregar países...</p>;
    }

    if (error) {
        return <p>Erro ao carregar países.</p>;
    }

    return (
        <div className="p-6">

            <h1 className="text-2xl mb-4">Países</h1>

            <input
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                placeholder="Pesquisar país"
                className="border p-2 mb-4 w-full"
            />

            <select
                value={ordenacao}
                onChange={(e) => setOrdenacao(e.target.value)}
                className="border p-2 mb-6 w-full"
            >
                <option value="">Ordenar por população</option>
                <option value="pop-asc">Menor população</option>
                <option value="pop-desc">Maior população</option>
            </select>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {paisesFiltrados.map((pais) => (
                    <PaisCard
                        key={pais.nome}
                        pais={pais}
                    />
                ))}
            </div>

        </div>
    );
}

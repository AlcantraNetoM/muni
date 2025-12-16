"use client";

import useSWR from "swr";
import { useState, useEffect } from "react";
import Pais from "@/app/components/Paises";
import { Pais as PaisInterface } from "@/models/interfaces";

const fetcher = (url: string) =>
    fetch(url).then((res) => res.json());

export default function PaisesPage() {
    const { data, error } = useSWR<PaisInterface[]>(
        "/data/paises.json",
        fetcher
    );

    const [pesquisa, setPesquisa] = useState("");
    const [ordenar, setOrdenar] = useState("");
    const [lista, setLista] = useState<PaisInterface[]>([]);

    useEffect(() => {
        if (!data) {
            return;
        }

        let resultado = data;

        if (pesquisa !== "") {
            resultado = resultado.filter((p) =>
                p.nome.toLowerCase().includes(pesquisa.toLowerCase())
            );
        }

        if (ordenar === "mais") {
            resultado = [...resultado].sort(
                (a, b) => b.populacao - a.populacao
            );
        }

        if (ordenar === "menos") {
            resultado = [...resultado].sort(
                (a, b) => a.populacao - b.populacao
            );
        }

        setLista(resultado);
    }, [pesquisa, ordenar, data]);

    return (
        <div>

            <h1>Países</h1>

            <input
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                placeholder="Pesquisar país"
            />

            <select
                value={ordenar}
                onChange={(e) => setOrdenar(e.target.value)}
            >
                <option value="">Ordenar</option>
                <option value="mais">Mais população</option>
                <option value="menos">Menos população</option>
            </select>

            <div>
                {lista.map((pais) => (
                    <Pais key={pais.nome} pais={pais} />
                ))}
            </div>

        </div>
    );
}

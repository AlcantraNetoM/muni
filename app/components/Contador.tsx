"use client";

import { useEffect, useState } from "react";

export default function Contador() {
    const [contador, setContador] = useState<number>(0);
    const [historico, setHistorico] = useState<number[]>([]);

    useEffect(() => {
        const storedCounter = localStorage.getItem("contador");
        const storedHistory = localStorage.getItem("historico");

        if (storedCounter) {
            setContador(Number(storedCounter));
        }

        if (storedHistory) {
            setHistorico(JSON.parse(storedHistory));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("contador", contador.toString());
        localStorage.setItem("historico", JSON.stringify(historico));
    }, [contador, historico]);

    const getColor = () => {
        if (contador <= 3) return "red";
        if (contador <= 7) return "gold";
        return "green";
    };

    const atualizarContador = (novoValor: number) => {
        if (novoValor < 0 || novoValor > 10) return;

        setContador(novoValor);
        setHistorico((prev) => [...prev, novoValor]);
    };

    return (
        <div>
            <h2 style={{ color: getColor() }}>
                Valor atual: {contador}
            </h2>

            <div style={{ marginBottom: "1rem" }}>
                <button onClick={() => atualizarContador(contador - 1)}>
                    -
                </button>

                <button onClick={() => atualizarContador(contador + 1)}>
                    +
                </button>

                <button onClick={() => atualizarContador(0)}>
                    Reset
                </button>
            </div>

            <h3>Histórico</h3>

            <ul>
                {historico.map((valor, index) => (
                    <li key={index}>{valor}</li>
                ))}
            </ul>
        </div>
    );
}

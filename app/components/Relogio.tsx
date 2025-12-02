"use client";

import { useEffect, useState } from "react";

export default function Relogio() {
    const [hora, setHora] = useState<string>("");

    useEffect(() => {
        const atualizarHora = () => {
            const agora = new Date();
            setHora(agora.toLocaleTimeString("pt-PT"));
        };

        atualizarHora(); // mostra logo ao carregar
        const interval = setInterval(atualizarHora, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            🕒 {hora}
        </div>
    );
}

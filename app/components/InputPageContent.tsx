"use client";

import { useState } from "react";

export default function InputPageContent() {

    //TEXTO EM TEMPO REAL
    const [texto, setTexto] = useState("");

    //SELECT
    const tecnologias = [
        "React",
        "Next.js",
        "TypeScript",
        "Node",
        "CSS",
        "HTML",
    ];

    const [tecnologia, setTecnologia] = useState(tecnologias[0]);

    //LISTA DE TAREFAS
    const [novaTarefa, setNovaTarefa] = useState("");
    const [tarefas, setTarefas] = useState<string[]>([]);
    const [editandoIndex, setEditandoIndex] = useState<number | null>(null);

    const adicionarTarefa = () => {
        if (!novaTarefa.trim()) return;

        if (editandoIndex !== null) {
            const copia = [...tarefas];
            copia[editandoIndex] = novaTarefa;
            setTarefas(copia);
            setEditandoIndex(null);
        } else {
            setTarefas([...tarefas, novaTarefa]);
        }

        setNovaTarefa("");
    };

    const editarTarefa = (index: number) => {
        setNovaTarefa(tarefas[index]);
        setEditandoIndex(index);
    };

    const apagarTarefa = (index: number) => {
        setTarefas(tarefas.filter((_, i) => i !== index));
    };

    return (
        <div>

            {/* INPUT TEXTO */}
            <section>
                <h3>Texto em tempo real</h3>

                <input
                    type="text"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    placeholder="Digite algo..."
                />

                <p>
                    <strong>Texto digitado:</strong> {texto}
                </p>
            </section>

            <hr />

            {/* SELECT */}
            <section>
                <h3>Selecionar tecnologia</h3>

                <select
                    value={tecnologia}
                    onChange={(e) => setTecnologia(e.target.value)}
                >
                    {tecnologias.map((tec) => (
                        <option key={tec} value={tec}>
                            {tec}
                        </option>
                    ))}
                </select>

                <p>
                    Tecnologia selecionada: <strong>{tecnologia}</strong>
                </p>
            </section>

            <hr />

            {/* TODO LIST */}
            <section>
                <h3>Lista de tarefas</h3>

                <input
                    type="text"
                    value={novaTarefa}
                    onChange={(e) => setNovaTarefa(e.target.value)}
                    placeholder="Nova tarefa"
                />

                <button onClick={adicionarTarefa}>
                    {editandoIndex !== null ? "Guardar" : "Adicionar"}
                </button>

                <ul>
                    {tarefas.map((tarefa, index) => (
                        <li key={index}>
                            {tarefa}

                            <button
                                onClick={() => editarTarefa(index)}
                                style={{ marginLeft: 8 }}
                            >
                                Editar
                            </button>

                            <button
                                onClick={() => apagarTarefa(index)}
                                style={{ marginLeft: 4 }}
                            >
                                Apagar
                            </button>
                        </li>
                    ))}
                </ul>
            </section>

        </div>
    );
}

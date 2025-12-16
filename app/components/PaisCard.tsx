import { Pais } from "@/models/interfaces";

export default function PaisCard({ pais }: { pais: Pais }) {
    return (
        <div className="border p-4 rounded">
            <h3 className="font-bold">{pais.nome}</h3>
            <p>Área: {pais.area} km²</p>
            <p>População: {pais.populacao}</p>
        </div>
    );
}

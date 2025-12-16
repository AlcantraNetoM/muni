import {Pais } from "@/models/interfaces";

export default function Pais({ pais }: { pais: Pais }) {
  return (
    <div className="border p-4 rounded">
      <h3>{pais.nome}</h3>
      <p>Área: {pais.area} km</p>
      <p>População: {pais.populacao}</p>
    </div>
  );
}
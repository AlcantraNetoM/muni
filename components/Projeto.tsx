type ProjetoProps = {
    nome: string;
    url: string;
};

export default function Projeto({ nome, url }: ProjetoProps) {
    return (
        <p>
            Projeto: <strong>{nome}</strong> —
            <a href={url}
                target="_blank"
                className="text-blue-600 underline ml-1"
            >Visitar projeto</a>
        </p>
    );
}

import Projeto from "./Projeto";

export default function DescricaoProjetos() {
    return (
        <div className="flex flex-col gap-4">

            <p>
                Ao longo da disciplina desenvolvi vários projetos.
                Pode ver todos os meus projetos no meu GitHub Pages:
                <a
                    href="https://SEU-USERNAME.github.io"
                    target="_blank"
                    className="text-blue-600 underline ml-1"
                >
                    GitHub Pages
                </a>
            </p>

            <Projeto
                nome="Loja Online"
                url="https://SEU-REPO-LOJA.github.io"
            />

            <Projeto
                nome="Site com JavaScript Interativo"
                url="https://SEU-REPO-JS.github.io"
            />

            {/* Adicione mais projetos se quiser */}
        </div>
    );
}

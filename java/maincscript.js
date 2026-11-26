
const descricao = document.getElementById("descricao");
const botoes = document.querySelectorAll(".botoes button");

// =========================
// DESCRIÇÕES E TTS
// =========================

const textos = [
    "Conheça os projetos e acesse os fóruns!",
    "Conheça os integrantes da equipe e suas principais funções",
    "Personalize as configurações do site!",
    "Encontre conteúdos e surpresas extras!"
];

const categoriasTTS = [
    "projetos",
    "equipe",
    "configuracoes",
    "extras"
];

let ultimoBotao = null;
let quantidadeHover = 0;

botoes.forEach((botao, index) => {

    botao.addEventListener("mouseenter", function () {

        if (descricao) {
            descricao.textContent = textos[index] || "";
        }

        if (window.LosDevsTTS && categoriasTTS[index]) {
            window.LosDevsTTS.falar(categoriasTTS[index]);
        }

        if (botao === ultimoBotao) {
            quantidadeHover++;
        } else {
            ultimoBotao = botao;
            quantidadeHover = 1;
        }

        if (quantidadeHover === 5) {

            if (window.LosDevsTTS) {
                window.LosDevsTTS.falar("pare");
            }

            quantidadeHover = 0;
            ultimoBotao = null;
        }

    });

    botao.addEventListener("mouseleave", function () {

        if (descricao) {
            descricao.textContent = "";
        }

    });

});

// =========================
// EFEITO DO BOTÃO PROJETOS
// =========================

const botaoProjetos = botoes[0];

const tirarEfeito =
    localStorage.getItem("losdevs-tirar-efeito") === "true";

const efeito = document.createElement("div");

efeito.className = "projetos-efeito";
efeito.setAttribute("aria-hidden", "true");

if (tirarEfeito) {
    efeito.classList.add("sem-fundo-giratorio");
}

const fundoProjetos = document.createElement("img");
fundoProjetos.src = "/projetoimag/lobackground.png";
fundoProjetos.alt = "";
fundoProjetos.className = "lo-background";

const dispositivoProjetos = document.createElement("img");
dispositivoProjetos.src = "/projetoimag/lodevice.png";
dispositivoProjetos.alt = "";
dispositivoProjetos.className = "lo-device";

efeito.appendChild(fundoProjetos);
efeito.appendChild(dispositivoProjetos);

document.body.appendChild(efeito);

if (botaoProjetos) {

    botaoProjetos.addEventListener("mouseenter", function () {
        efeito.classList.add("ativo");
    });

    botaoProjetos.addEventListener("mouseleave", function () {
        efeito.classList.remove("ativo");
    });

}

// =========================
// MODO AAA: IMAGENS
// =========================

if (localStorage.getItem("losdevs-aaa") === "true") {

    document.documentElement.classList.add("modo-aaa");

    const tema = document.documentElement.dataset.theme || "night";
    const sufixo = tema === "day" ? "d" : "n";

    // -------------------------
    // CÍRCULOS DOS BOTÕES
    // -------------------------

    const circulos = [
        `circle1${sufixo}.png`,
        `circle2${sufixo}.png`,
        `circle3${sufixo}.png`
    ];

    botoes.forEach(botao => {

        botao.classList.add("aaa-botao");

        const imagem = document.createElement("img");
        const sorteio = Math.floor(Math.random() * circulos.length);

        imagem.src = `../triplea/${circulos[sorteio]}`;
        imagem.classList.add("aaa-circulo");
        imagem.alt = "";

        botao.appendChild(imagem);

    });

    // -------------------------
    // IMAGEM CENTRAL
    // -------------------------

    const imagensComuns = tema === "day"
        ? [
            "lostmecrapd.png",
            "smile1d.png",
            "arrow1d.png"
        ]
        : [
            "lostmecrapn.png",
            "smile1n.png",
            "arrow1n.png",
            "arrow2n.png"
        ];

    const imagensRaras = [
        "eye1nd.png",
        "billynd.png"
    ];

    // As imagens raras têm peso menor no sorteio.

    const opcoes = [
        ...imagensComuns,
        ...imagensComuns,
        ...imagensComuns,
        ...imagensComuns,
        ...imagensComuns,
        ...imagensRaras
    ];

    const imagemEscolhida =
        opcoes[Math.floor(Math.random() * opcoes.length)];

    const central = document.createElement("img");

    central.src = `../triplea/${imagemEscolhida}`;
    central.classList.add("aaa-central");
    central.alt = "";

    document.body.appendChild(central);

}

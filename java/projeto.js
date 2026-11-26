
const projetos = [
    {
        nome: "saudações",
        imagem: "../loyd.png",
        integrantes: "Aberano, GuimaArts, Jocardo, Test",
        genero: "????",
        faixaEtaria: "livre",
        descricao: "sejam bem vindos à aba de projetos, navegue para inspecionar e ver mais sobre nossos projetos.",
        pagina: "./mainsc.html",
        fala: "projetoSaudacoes"
    },
    {
        nome: "Ilha do Dragão: Você não sabe onde está!",
        imagem: "../projetoimag/dilogo.png",
        integrantes: "Aberano, GuimaArts, Jocardo, Test",
        genero: "comédia, ação, suspense",
        faixaEtaria: "14 anos",
        descricao: "PARABÉNS! você, um anão vesgo, um ranzinza cor de uva e um tapado acabaram de naufragar na ilha mais temida da história! explore os vastos biomas, colete materiais, resolva quebra cabeças, mate criaturas de todos os tipos, USE A SUA ESTRATÉGIA e reconstrua o navio! (de preferência, tente voltar em um pedaço) e lembre-se: ninguém vai te ajudar!.",
        pagina: "./di.html",
        musica: "../music/bongo.wav",
        fala: "projetoIlhaDragao",

        // ABERTURAS COMUNS: TODAS COM A MESMA CHANCE
        videos: [
            "../pageimagdi/beastopen.mp4",
            "../pageimagdi/shipopen.mp4",
            "../pageimagdi/shoreopen.mp4"
        ],

        // ABERTURA RARA: 1 EM 100
        videoRaro: {
            arquivo: "../pageimagdi/darknessopen.mp4",
            chance: 0.01
        }
    }

    // Adicione os próximos projetos aqui.
];

let projetoAtual = 0;


// ELEMENTOS DA PÁGINA

const imagemProjeto = document.getElementById("imagemProjeto");
const nomeProjeto = document.getElementById("nomeProjeto");
const integrantes = document.getElementById("integrantes");
const genero = document.getElementById("genero");
const faixaEtaria = document.getElementById("faixaEtaria");
const descricaoProjeto = document.getElementById("descricaoProjeto");

const startButton = document.getElementById("startButton");
const forumButton = document.getElementById("forumButton");
const leftButton = document.getElementById("leftButton");
const volumeButton = document.getElementById("volumeButton");
const settingsButton = document.getElementById("settingsButton");
const rightButton = document.getElementById("rightButton");
const leaveButton = document.getElementById("leaveButton");

// ELEMENTOS DA ABERTURA EM VÍDEO

const videoTela = document.getElementById("videoTela");
const aberturaVideo = document.getElementById("aberturaVideo");

let aberturaIniciada = false;


// SISTEMA DE ABERTURA ALEATÓRIA

function abrirProjeto(projeto) {

    const videos = projeto.videos;
    const videoRaro = projeto.videoRaro;

    // Se o projeto não tiver vídeos, abre diretamente.
    if (!Array.isArray(videos) || videos.length === 0) {
        window.location.href = projeto.pagina;
        return;
    }

    let videoEscolhido;

    // PRIMEIRO: TESTA A CHANCE DA ABERTURA RARA

    if (
        videoRaro &&
        videoRaro.arquivo &&
        Math.random() < videoRaro.chance
    ) {
        videoEscolhido = videoRaro.arquivo;
    } else {

        // SE NÃO SORTEAR A RARA, ESCOLHE UMA COMUM
        const indiceAleatorio = Math.floor(
            Math.random() * videos.length
        );

        videoEscolhido = videos[indiceAleatorio];
    }

    aberturaIniciada = true;

    // INTERROMPE A MÚSICA DO MENU
    solicitacaoAtual++;
    pararMusica();

    // INTERROMPE QUALQUER FALA DO LOYD
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }

    // PREPARA A TELA DE VÍDEO
    videoTela.hidden = false;
    aberturaVideo.src = videoEscolhido;
    aberturaVideo.load();

    // AO TERMINAR, ABRE A PÁGINA DO PROJETO
    aberturaVideo.onended = () => {
        window.location.href = projeto.pagina;
    };

    // SE HOUVER ERRO NO ARQUIVO, SEGUE PARA O PROJETO
    aberturaVideo.onerror = () => {
        console.error("Erro ao carregar o vídeo:", videoEscolhido);
        window.location.href = projeto.pagina;
    };

    // TENTA ATIVAR O MODO TELA CHEIA
    if (videoTela.requestFullscreen) {
        const telaCheia = videoTela.requestFullscreen();

        if (telaCheia && telaCheia.catch) {
            telaCheia.catch(erro => {
                console.warn("Tela cheia indisponível:", erro);
            });
        }
    }

    // INICIA O VÍDEO
    const reproducao = aberturaVideo.play();

    if (reproducao && reproducao.catch) {
        reproducao.catch(erro => {
            console.error("Não foi possível reproduzir o vídeo:", erro);
            window.location.href = projeto.pagina;
        });
    }
}


// SISTEMA DE ÁUDIO

let contextoAudio = null;
let volumePrincipal = null;
let fonteAtual = null;

let musicaMutada = false;
let solicitacaoAtual = 0;

const cacheMusicas = new Map();

function pararMusica() {
    if (fonteAtual) {
        try {
            fonteAtual.stop();
        } catch (erro) {
            // A fonte já pode ter sido interrompida.
        }

        fonteAtual.disconnect();
        fonteAtual = null;
    }
}

async function tocarMusicaProjeto() {
    const projeto = projetos[projetoAtual];
    const solicitacao = ++solicitacaoAtual;

    pararMusica();

    if (!projeto.musica) {
        return;
    }

    try {
        if (!contextoAudio) {
            contextoAudio = new AudioContext();

            volumePrincipal = contextoAudio.createGain();
            volumePrincipal.connect(contextoAudio.destination);

            volumePrincipal.gain.value = musicaMutada ? 0 : 1;
        }

        await contextoAudio.resume();

        let buffer = cacheMusicas.get(projeto.musica);

        if (!buffer) {
            const resposta = await fetch(projeto.musica);

            if (!resposta.ok) {
                throw new Error("Não foi possível carregar a música.");
            }

            const dados = await resposta.arrayBuffer();

            buffer = await contextoAudio.decodeAudioData(dados);

            cacheMusicas.set(projeto.musica, buffer);
        }

        if (solicitacao !== solicitacaoAtual) {
            return;
        }

        fonteAtual = contextoAudio.createBufferSource();

        fonteAtual.buffer = buffer;
        fonteAtual.loop = true;

        fonteAtual.connect(volumePrincipal);

        fonteAtual.start(0);

    } catch (erro) {
        console.error("Erro ao reproduzir música:", erro);
    }
}


// ATUALIZAÇÃO DOS PROJETOS

function atualizarProjeto() {
    if (projetos.length === 0) {
        return;
    }

    const projeto = projetos[projetoAtual];

    imagemProjeto.src = projeto.imagem;
    nomeProjeto.textContent = projeto.nome;
    integrantes.textContent = projeto.integrantes;
    genero.textContent = projeto.genero;
    faixaEtaria.textContent = projeto.faixaEtaria;
    descricaoProjeto.textContent = projeto.descricao;

    document.querySelector(".descricao").scrollTop = 0;

    // LOYD COMENTA O PROJETO ATUAL
    if (window.LosDevsTTS && projeto.fala) {
        window.LosDevsTTS.falar(projeto.fala);
    }
}


// NAVEGAÇÃO

function navegarProjeto(direcao) {
    projetoAtual += direcao;

    if (projetoAtual >= projetos.length) {
        projetoAtual = 0;
    }

    if (projetoAtual < 0) {
        projetoAtual = projetos.length - 1;
    }

    atualizarProjeto();
    tocarMusicaProjeto();
}

leftButton.addEventListener("click", () => {
    navegarProjeto(-1);
});

rightButton.addEventListener("click", () => {
    navegarProjeto(1);
});


// BOTÃO DE INICIAR PROJETO

startButton.addEventListener("click", () => {
    if (aberturaIniciada) {
        return;
    }

    const projeto = projetos[projetoAtual];
    abrirProjeto(projeto);
});


// BOTÃO DO FÓRUM

forumButton.addEventListener("click", () => {
    // Fórum será implementado futuramente.
});


// CONFIGURAÇÕES

settingsButton.addEventListener("click", () => {
    window.location.href = "./configuracoes.html";
});


// VOLTAR

leaveButton.addEventListener("click", () => {
    window.location.href = "./mainsc.html";
});


// BOTÃO DE VOLUME E REAÇÕES DO LOYD

let cliquesVolume = 0;
let temporizadorVolume = null;

const LIMITE_CLIQUES = 5;
const INTERVALO_CLIQUES = 1800;

volumeButton.addEventListener("click", () => {

    musicaMutada = !musicaMutada;

    if (volumePrincipal) {
        volumePrincipal.gain.value = musicaMutada ? 0 : 1;
    }

    cliquesVolume++;

    clearTimeout(temporizadorVolume);

    // VERIFICA SE O JOGADOR ESTÁ CLICANDO DEMAIS

    if (cliquesVolume >= LIMITE_CLIQUES) {

        if (window.LosDevsTTS) {
            window.LosDevsTTS.falar("volumeSpam");
        }

        cliquesVolume = 0;
        temporizadorVolume = null;

        return;
    }

    // FALA NORMAL DE MUTAR OU DESMUTAR

    if (window.LosDevsTTS) {
        if (musicaMutada) {
            window.LosDevsTTS.falar("volumeOff");
        } else {
            window.LosDevsTTS.falar("volumeOn");
        }
    }

    // REINICIA O CONTADOR SE O JOGADOR PARAR

    temporizadorVolume = setTimeout(() => {
        cliquesVolume = 0;
        temporizadorVolume = null;
    }, INTERVALO_CLIQUES);
});


// EFEITOS VISUAIS DOS BOTÕES PRESSIONADOS

const botoesPressionados = {
    startButton: "startPressed",
    forumButton: "forumPressed",
    leftButton: "leftPressed",
    volumeButton: "volumePressed",
    settingsButton: "settingsPressed",
    rightButton: "rightPressed",
    leaveButton: "leavePressed"
};

Object.entries(botoesPressionados).forEach(([botaoId, imagemId]) => {
    const botao = document.getElementById(botaoId);
    const imagem = document.getElementById(imagemId);

    botao.addEventListener("pointerdown", () => {
        imagem.style.display = "block";
    });

    function soltarBotao() {
        imagem.style.display = "none";
    }

    botao.addEventListener("pointerup", soltarBotao);
    botao.addEventListener("pointerleave", soltarBotao);
    botao.addEventListener("pointercancel", soltarBotao);
});


// CARREGA O PRIMEIRO PROJETO SEM INICIAR A MÚSICA

atualizarProjeto();


(function () {

    const traducoes = {
        "pt-BR": {
            ativar: [
                "Tá bom, já acordei!",
                "Sério? Modo A A A?",
                "Buon giorno!",
                "Você devia sair dessa tela.",
                "Botões, muitos botões!",
                "Decepção...",
                "E meu pagamento?",
                "Eu sou altamente corporativo, e totalmente disposto.",
                "Eu já acordei!",
                "acabou o sossego!",
                "eu tenho coisas pra fazer, sabia disso?",
                "qual foi?"
            ],

            desativar: [
                "Finalmente...",
                "Boa noite...",
                "Melhor você deixar o modo noturno ativado pra eu dormir melhor...",
                "Aos amigos, a rede na varanda, aos inimigos, o comic sans!"
            ],

            dia: [
                "MEUS OLHOS!",
                "Bom dia, luz do dia!",
                "Que haja luz!",
                "Cadê o café da manhã?",
                "Muito claro!"
            ],

            noite: [
                "Muito melhor...",
                "Boa noite, o que rima com noite mesmo?",
                "E os grilos dormem!",
                "Chega deu sono com todo esse conforto..."
            ],

            fonteOn: [
                "SEU ANIMAL!",
                "Inspirador...",
                "Já considerou uma terapia?",
                "Ok Google, chamar psicólogo!",
                "Sério, na minha frente?",
                "Catastrófico..."
            ],

            fonteOff: [
                "Nunca duvidei da sua saúde mental, sabia disso?",
                "Ok Google, cancelar terapia para daqui a pouco!",
                "Chega meu cérebro aliviou..."
            ],

            entrada: [
                "Tela inicial!",
                "Olha, mais botões!",
                "Belos desenhos!",
                "Engraçado como você precisa desses rabiscos pra se guiar!",
                "Você tem daltonismo?"
            ],

            parado: [
                "Olá?",
                "Se demorar demais, eu vou dormir!",
                "Que tédio, você devia mexer em alguma coisa, sabia disso?",
                "Você sabe usar um mouse?",
                "Sorte sua que não posso ir embora sozinho!",
                "Odeio meu trabalho!",
                "três tigres tristes comem três pratos de trigo!",
                "o rato roeu a roupa do rei de roma",
                "quer que eu mova o mouse pra você também?",
                "você é meu inimigo?"
            ],

            projetos: [
                "Projetos! A aba lá que mostra aquelas coisas, você sabia que eu fui resultado de tédio? Eu amo projetos.",
                "aquela aba cheia de coisas coisadas",
                "um monte de bagulhos bagulhados",
                "eu amo projetos!"
            ],

            equipe: [
                "Equipe! Eu não quero conhecer ninguém, mas clique!",
                "eu devia saber?",
                "uma equipe?",
                "créditos!",
                "a página onde vemos quem criou o site e cia"
            ],

            configuracoes: [
                "Minha voz te irrita?",
                "configurações!",
                "vamos ajustar o site",
                "vai estragar o site?",
                "vá em frente, mas não espere que eu não te julgue"
            ],

            extras: [
                "Extras! O que poderia ter de extra pra mostrar?",
                "vem em breve!"
            ],
                        projetoSaudacoes: [
                "Projetos!",
                "Saudações!",
                "Olha! É o Loyd!"
            ],

            projetoIlhaDragao: [
                "Ilha do Dragão!",
                "Eu não sei onde estou.",
                "Faça pelo Shtambo!",
                "Hmmm, piratas.",
                "Eu estou ouvindo bongos?",
                "Soa intrigante.",
                "os olhos da floresta te julgam...",
                "se comporte...",
                "quem vive pela espada, por ela morrerá",
                "que bom que não é eu naufragado na ilha...",
                "existe algo nas profundezas",
                "o que poderia estar nas profundezas?",
                "eu vejo algo na água..."
            ],

            volumeOff: [
                "Tá, tire o volume.",
                "Sério?",
                "Estragou a vaibe.",
                "Estava na melhor parte.",
                "O silêncio é ensurdecedor."
            ],

            volumeOn: [
                "Quer me matar de susto?",
                "E a música retorna.",
                "Qual é o nome dessa música mesmo?",
                "Melodioso...",
                "Quem fez essa música, Jocardo?",
                "então é assim que surdos vivem"
            ],

            volumeSpam: [
                "Tá com dúvidas?",
                "Se decida!",
                "Tá brincando?",
                "Eu estou rindo?",
                "Comeu palhacitos, foi?",
                "Deixa eu adivinhar, tique nervoso?",
                "Estragou a música, caba!",
                "Debilóide..."
            ],
            pare: [
                "PARE!",
                "chega!",
                "você me odeia?",
                "você está bem?",
                "vou chamar o hospício!",
                "não te graça",
                "parece que estou rindo?",
                "vamos, repete mais!",
                "o que eu poderia esperar?"
            ]
        },

        "en-US": {
            ativar: [
                "Fine, I'm awake!",
                "Seriously? A A A mode?",
                "Buon giorno!",
                "You should leave this page.",
                "Buttons, so many buttons!",
                "Disappointment...",
                "And where's my paycheck?",
                "I'm highly corporate, and totally willing.",
                "I'm already awake!"
            ],

            desativar: [
                "Finally...",
                "Good night...",
                "You'd better leave night mode on so can I sleep better that way...",
                "To my friends, the sleeping net, To my enemies, a brick..."
            ],

            dia: [
                "MY EYES!",
                "Good morning, sunshine!",
                "Let there be light!",
                "Where's breakfast?",
                "It's so bright!"
            ],

            noite: [
                "Much better...",
                "Good night, What rhymes with night again?",
                "And the crickets go to sleep!",
                "All this comfort is making me sleepy..."
            ],

            fonteOn: [
                "YOU IDIOT!",
                "Inspiring...",
                "Have you considered therapy?",
                "Okay Google, call a therapist!",
                "Seriously, Right in front of me?",
                "Catastrophic...",
                "i sense a great disturbance in the source code...",
                "why must you inflict such cruelties upon me?"
            ],

            fonteOff: [
                "I never doubted your mental health, Did you know that?",
                "Okay Google, cancel that therapy appointment for later!",
                "Finally, my brain can relax...",
                "why does that font exist to begin with?",
                "back to decency and self awareness"
            ],

            entrada: [
                "Home screen!",
                "Look, more buttons!",
                "Nice drawings!",
                "Funny how you need those scribbles to find your way around!",
                "Are you colorblind?"
            ],

            parado: [
                "Hello?",
                "If you take too long, I'm going to sleep!",
                "How boring. You should do something, you know?",
                "Do you know how to use a mouse?",
                "Lucky for you, I can't leave on my own!",
                "I hate my job!",
                "she sells sea shells on the seashore!",
                "how many wood chucks can a wood chuck chuck if a wood chuck could chuckwood?",
                "do you want me to move the mouse for you too?"
            ],

            projetos: [
                "Projects!",
                "The tab that shows you all that stuff.",
                "Did you know I was created out of boredom?",
                "I love projects.",
                "so many thingymajigs",
                "thingymajigs and jiggywhatsits!"

            ],

            equipe: [
                "The team!",
                "I don't want to meet anyone, but go ahead, click it!",
                "wow, there are people out there...",
                "credits",
                "let's give credit where and when it's due!"
            ],

            configuracoes: [
                "does my voice annoy you?",
                "shall we say goodbye?",
                "back to the scrap",
                "are you going to ruin the website?",
                "what are you looking at?"
            ],

            extras: [
                "Extras! What could there possibly be to show?",
                "extra stuff!",
                "what is there to show?"
            ],

                        projetoSaudacoes: [
                "Projects!",
                "Greetings!",
                "Look, It's Loyd!",
                "salutations and damnations!",
                "i could totally eat some food right now",
                "more projects!"
            ],

            projetoIlhaDragao: [
                "Dragon Island!",
                "I don't know where I am.",
                "Do it for the Shtambo!",
                "Hmm, pirates.",
                "Am I hearing bongos?",
                "Sounds intriguing.",
                "he who lives by he sword, shall die by it too!",
                "the eyes of the forest judge you",
                "what could lie deep within?",
                "it lies deep within...",
                "behave yourself, someone's watching",
                "i dont know where i am!",
                "good thing it's not me"
            ],

            volumeOff: [
                "Fine, turn the volume off.",
                "Seriously?",
                "You ruined the vibe.",
                "I was at the best part.",
                "the Silence is deafening.",
                "so that's how being deaf feels like...",
                "here is my water chicken impression, brubrubrbrbrbrbrbrbrbr"
            ],

            volumeOn: [
                "Are you trying to give me a heart attack?",
                "And the music returns.",
                "What's the name of this song again?",
                "Melodious...",
                "Who made this song, Jocardo?",
                "lets hum some tunes"
            ],

            volumeSpam: [
                "Having trouble deciding?",
                "Make up your mind!",
                "Are you kidding me?",
                "Am I laughing?",
                "Did you eat too many clown snacks?",
                "Let me guess, nervous tic?",
                "You ruined the music, you idiot!",
                "Moron...",
                "does it trouble your mind, away, you trouble mind?",
                "i villify your act against music"
            ],

            pare: [
                "STOP!",
                "stop it!",
                "no no no!"
            ]
        }
    };

    let idioma = localStorage.getItem("losdevs-language") || "pt-BR";


    // =========================
    // VERIFICA SE O AAA ESTÁ ATIVO
    // =========================

    function aaaAtivo() {
        return localStorage.getItem("losdevs-aaa") === "true";
    }


    // =========================
    // ENCONTRA A VOZ
    // =========================

    function obterVoz(lingua) {

        const vozes = speechSynthesis.getVoices();

        return vozes.find(voz =>
            voz.lang.toLowerCase() === lingua.toLowerCase()
        ) || vozes.find(voz =>
            voz.lang.toLowerCase().startsWith(
                lingua.split("-")[0].toLowerCase()
            )
        ) || null;

    }


    // =========================
    // SISTEMA DE FALAS
    // =========================

    
function falarCategoria(categoria, forcar = false) {

    if (!("speechSynthesis" in window)) {
        return;
    }

    if (!forcar && !aaaAtivo()) {
        return;
    }

    const frases = traducoes[idioma]?.[categoria];

    if (!frases || frases.length === 0) {
        return;
    }

    // Interrompe a fala anterior
    speechSynthesis.cancel();

    // Sorteia uma fala cadastrada
    const frase = frases[
        Math.floor(Math.random() * frases.length)
    ];

    // Separa as sentenças
    const partes = frase.match(/[^.!?]+[.!?]+|[^.!?]+$/gu);

    if (!partes || partes.length === 0) {
        return;
    }

    // Sorteia somente UMA sentença
    const texto = partes[
        Math.floor(Math.random() * partes.length)
    ].trim();

    const fala = new SpeechSynthesisUtterance(texto);

    fala.lang = idioma;
    fala.rate = 1;
    fala.pitch = 1;

    const voz = obterVoz(idioma);

    if (voz) {
        fala.voice = voz;
    }

    speechSynthesis.speak(fala);
}



    // =========================
    // ALTERAR IDIOMA
    // =========================

    function alterarIdioma(novoIdioma) {

        if (!traducoes[novoIdioma]) {
            return;
        }

        idioma = novoIdioma;

        localStorage.setItem("losdevs-language", idioma);

    }


    // =========================
    // DISPONIBILIZA AS FUNÇÕES
    // =========================

    window.LosDevsTTS = {
        falar: falarCategoria,
        alterarIdioma: alterarIdioma,
        idioma: () => idioma
    };


    // =========================
    // EVENTOS AUTOMÁTICOS
    // =========================

    document.addEventListener("DOMContentLoaded", function () {

        const seletor = document.getElementById("languageSelect");

        if (seletor) {

            seletor.value = idioma;

            seletor.addEventListener("change", function () {
                alterarIdioma(seletor.value);
            });

        }


        // ENTRADA NA PÁGINA INICIAL

        if (document.getElementById("descricao")) {

            if (aaaAtivo()) {
                falarCategoria("entrada");
            }


            // DETECTOR DE INATIVIDADE

            let temporizador;
            const intervalo = 5 * 60 * 1000;

            function reiniciarTemporizador() {

                clearTimeout(temporizador);

                temporizador = setTimeout(function () {

                    if (aaaAtivo()) {
                        falarCategoria("parado");
                    }

                    reiniciarTemporizador();

                }, intervalo);

            }

            [
                "mousemove",
                "mousedown",
                "keydown",
                "scroll",
                "touchstart"
            ].forEach(evento => {

                document.addEventListener(
                    evento,
                    reiniciarTemporizador
                );

            });

            reiniciarTemporizador();

        }

    });

})();

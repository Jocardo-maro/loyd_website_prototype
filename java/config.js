
(function() {

    // =========================
    // MODO DIA / NOITE
    // =========================

    let tema = localStorage.getItem("losdevs-theme") || "night";

    document.documentElement.dataset.theme = tema;


    // =========================
    // ARRUINE O SITE
    // =========================

    let arruinar = localStorage.getItem("losdevs-arruinar") === "true";

    function atualizarFonte() {
        document.documentElement.classList.toggle("arruinar", arruinar);
        localStorage.setItem("losdevs-arruinar", String(arruinar));
    }

    atualizarFonte();


    // =========================
    // MODO AAA
    // =========================

    let modoAAA = localStorage.getItem("losdevs-aaa") === "true";

    function atualizarAAA() {
        document.documentElement.classList.toggle("modo-aaa", modoAAA);
        localStorage.setItem("losdevs-aaa", String(modoAAA));
    }

    atualizarAAA();


    // =========================
    // TAMANHO DAS LETRAS
    // =========================

    let tamanhoLetras =
        Number(localStorage.getItem("losdevs-tamanho-letras")) || 12;

    function atualizarTamanhoLetras() {

        tamanhoLetras = Math.max(8, Math.min(20, tamanhoLetras));

        document.documentElement.style.setProperty(
            "--menu-font-size",
            tamanhoLetras + "px"
        );

        localStorage.setItem(
            "losdevs-tamanho-letras",
            String(tamanhoLetras)
        );
    }

    atualizarTamanhoLetras();


    // =========================
    // TIRAR EFEITO
    // =========================

    let tirarEfeito =
        localStorage.getItem("losdevs-tirar-efeito") === "true";

    function atualizarEfeito() {

        localStorage.setItem(
            "losdevs-tirar-efeito",
            String(tirarEfeito)
        );

    }


    // =========================
    // CONFIGURAÇÕES DA PÁGINA
    // =========================

    document.addEventListener("DOMContentLoaded", function() {

        // -------------------------
        // MODO DIA / NOITE
        // -------------------------

        const botaoTema = document.getElementById("themeButton");
        const statusTema = document.getElementById("themeStatus");

        function atualizarTema() {

            document.documentElement.dataset.theme = tema;
            localStorage.setItem("losdevs-theme", tema);

            if (statusTema) {
                statusTema.textContent =
                    tema === "day" ? "Modo dia" : "Modo noite";
            }

        }

        atualizarTema();

        if (botaoTema) {

            botaoTema.addEventListener("click", function() {

                tema = tema === "night" ? "day" : "night";
                atualizarTema();

                if (modoAAA && window.LosDevsTTS) {
                    window.LosDevsTTS.falar(
                        tema === "day" ? "dia" : "noite"
                    );
                }

            });

        }


        // -------------------------
        // ARRUINE O SITE
        // -------------------------

        const botaoFonte = document.getElementById("fontButton");
        const statusFonte = document.getElementById("fontStatus");

        function atualizarStatusFonte() {

            if (statusFonte) {
                statusFonte.textContent = arruinar
                    ? "ARRUINADO"
                    : "Integridade visual restaurada";
            }

            if (botaoFonte) {
                botaoFonte.textContent = arruinar
                    ? "RESTAURE A DIGNIDADE"
                    : "ARRUINE O SITE";
            }

        }

        atualizarStatusFonte();

        if (botaoFonte) {

            botaoFonte.addEventListener("click", function() {

                arruinar = !arruinar;
                atualizarFonte();
                atualizarStatusFonte();

                if (modoAAA && window.LosDevsTTS) {
                    window.LosDevsTTS.falar(
                        arruinar ? "fonteOn" : "fonteOff"
                    );
                }

            });

        }


        // -------------------------
        // MODO AAA
        // -------------------------

        const botaoAAA = document.getElementById("aaaButton");
        const statusAAA = document.getElementById("aaaStatus");

        function atualizarStatusAAA() {

            if (statusAAA) {
                statusAAA.textContent = modoAAA
                    ? "MODO AAA ATIVADO"
                    : "Modo AAA desativado";
            }

            if (botaoAAA) {
                botaoAAA.textContent = modoAAA
                    ? "DESATIVAR MODO AAA"
                    : "ATIVAR MODO AAA";
            }

        }

        atualizarStatusAAA();

        if (botaoAAA) {

            botaoAAA.addEventListener("click", function() {

                if (!modoAAA) {

                    modoAAA = true;
                    atualizarAAA();
                    atualizarStatusAAA();

                    if (window.LosDevsTTS) {
                        window.LosDevsTTS.falar("ativar", true);
                    }

                } else {

                    if (window.LosDevsTTS) {
                        window.LosDevsTTS.falar("desativar", true);
                    }

                    modoAAA = false;
                    atualizarAAA();
                    atualizarStatusAAA();

                }

            });

        }


        // -------------------------
        // TAMANHO DAS LETRAS
        // -------------------------

        const controleTamanho =
            document.getElementById("fontSizeControl");

        const statusTamanho =
            document.getElementById("fontSizeStatus");

        function atualizarControleTamanho() {

            if (controleTamanho) {
                controleTamanho.value = tamanhoLetras;
            }

            if (statusTamanho) {
                statusTamanho.textContent =
                    tamanhoLetras + " px";
            }

        }

        atualizarControleTamanho();

        if (controleTamanho) {

            controleTamanho.addEventListener("input", function() {

                tamanhoLetras = Number(controleTamanho.value);

                atualizarTamanhoLetras();
                atualizarControleTamanho();

            });

        }


        // -------------------------
        // TIRAR EFEITO
        // -------------------------

        const botaoEfeito =
            document.getElementById("effectButton");

        const statusEfeito =
            document.getElementById("effectStatus");

        function atualizarStatusEfeito() {

            if (statusEfeito) {
                statusEfeito.textContent = tirarEfeito
                    ? "Fundo giratório desativado"
                    : "Fundo giratório ativado";
            }

            if (botaoEfeito) {
                botaoEfeito.textContent = tirarEfeito
                    ? "ATIVAR EFEITO"
                    : "TIRAR EFEITO";
            }

        }

        atualizarStatusEfeito();

        if (botaoEfeito) {

            botaoEfeito.addEventListener("click", function() {

                tirarEfeito = !tirarEfeito;

                atualizarEfeito();
                atualizarStatusEfeito();

            });

        }


        // -------------------------
        // IDIOMA DO NARRADOR
        // -------------------------

        const seletorIdioma =
            document.getElementById("languageSelect");

        if (seletorIdioma) {

            const idiomaSalvo =
                localStorage.getItem("losdevs-language") || "pt-BR";

            seletorIdioma.value = idiomaSalvo;

            seletorIdioma.addEventListener("change", function() {

                localStorage.setItem(
                    "losdevs-language",
                    seletorIdioma.value
                );

            });

        }

    });

})();

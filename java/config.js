
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
    // CONFIGURAÇÕES DA PÁGINA
    // =========================

    document.addEventListener("DOMContentLoaded", function() {

        // MODO DIA / NOITE

        const botaoTema = document.getElementById("themeButton");
        const statusTema = document.getElementById("themeStatus");

        function atualizarTema() {
            document.documentElement.dataset.theme = tema;
            localStorage.setItem("losdevs-theme", tema);

            if (statusTema) {
                statusTema.textContent = tema === "day" ? "Modo dia" : "Modo noite";
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


        // ARRUINE O SITE

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


        // MODO AAA

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

                    // A despedida é disparada antes de desligar o modo.
                    if (window.LosDevsTTS) {
                        window.LosDevsTTS.falar("desativar", true);
                    }

                    modoAAA = false;
                    atualizarAAA();
                    atualizarStatusAAA();

                }

            });
        }

    });

})();

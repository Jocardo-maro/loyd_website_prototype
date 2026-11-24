
document.addEventListener("DOMContentLoaded", function() {

    // Verifica se o modo AAA está ativado
    if (localStorage.getItem("losdevs-aaa") !== "true") {
        return;
    }

    const tema = localStorage.getItem("losdevs-theme") || "night";

    const circulos = tema === "night"
        ? ["/circle1n.png", "/circle2n.png", "/circle3n.png"]
        : ["/circle1d.png", "/circle2d.png", "/circle3d.png"];

    // Seleciona os botões da página
    const botoes = document.querySelectorAll("button");

    botoes.forEach(botao => {

        // Evita duplicação
        if (botao.parentElement.classList.contains("aaa-botao")) {
            return;
        }

        const moldura = document.createElement("span");
        moldura.className = "aaa-botao";

        botao.parentNode.insertBefore(moldura, botao);
        moldura.appendChild(botao);

        const imagem = document.createElement("img");

        imagem.className = "aaa-circulo";
        imagem.src = new URL(
            "/triplea/" + circulos[Math.floor(Math.random() * circulos.length)],
            document.baseURI
        ).href;

        imagem.alt = "";
        imagem.draggable = false;

        moldura.appendChild(imagem);

    });

});

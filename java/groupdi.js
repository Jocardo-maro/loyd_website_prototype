
const creditos = document.querySelector(".creditos-texto");
const tela = document.querySelector(".tela-creditos");

// Aguarda a página carregar
window.addEventListener("load", () => {

    // Calcula o tamanho necessário para a rolagem
    const altura = creditos.offsetHeight + window.innerHeight;

    // Anima os créditos
    const animacao = creditos.animate(
        [
            { transform: "translateY(0)" },
            { transform: `translateY(-${altura}px)` }
        ],
        {
            duration: 35000,
            easing: "linear",
            fill: "forwards"
        }
    );

    // Quando todos os créditos terminarem
    animacao.finished.then(() => {

        // Desaparece gradualmente
        tela.classList.add("encerrando");

        // Retorna à página principal do jogo
        setTimeout(() => {
            window.location.href = "/page/mainsc.html";
        }, 2000);

    });

});

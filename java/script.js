
const button = document.getElementById("startButton");
const video = document.getElementById("introVideo");
const intro = document.getElementById("intro");
const startScreen = document.getElementById("startScreen");

video.loop = false;

button.addEventListener("click", async function() {
    try {
        video.currentTime = 0;
        await video.play();
        startScreen.remove();
    } catch (error) {
        console.error("Erro ao iniciar vídeo:", error);
    }
});

video.addEventListener("ended", function() {
    intro.classList.add("fade-out");

    setTimeout(function() {
        window.location.replace("./page/mainsc.html");
    }, 1500);
});

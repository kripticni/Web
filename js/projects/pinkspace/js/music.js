const music = new Audio("assets/music/omori.mp3");
var musicStarted = false;
music.loop = true;
music.volume = 0.5;

function startMusic() {
	music.play().catch(err => {
		console.log("Music play blocked:", err);
	});
	musicStarted = true;
}

window.addEventListener("keydown", startMusic, { once: true });
window.addEventListener("click", startMusic, { once: true });

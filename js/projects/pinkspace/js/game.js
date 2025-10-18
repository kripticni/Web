const gamePort = document.getElementById("game-port");
const ctx = gamePort.getContext("2d");
ctx.imageSmoothingEnabled = false;

gamePort.width = GAME_WIDTH;
gamePort.height = GAME_HEIGHT;
function resizeGamePort() {
	let scale = Math.min(
		window.innerWidth / GAME_WIDTH,
		window.innerHeight / GAME_HEIGHT
	);

	gamePort.style.width = GAME_WIDTH * scale + "px"
	gamePort.style.height = GAME_HEIGHT * scale + "px"
}


const keys = {};
window.addEventListener("keydown", e => keys[e.key.toLowerCase()] = true);
window.addEventListener("keyup", e => keys[e.key.toLowerCase()] = false);

function drawGameObject(obj) {
	ctx.drawImage(obj.texture, Math.round(obj.x), Math.round(obj.y), obj.texture.width, obj.texture.height);
	//ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
}

function draw() {
	ctx.clearRect(0, 0, gamePort.width, gamePort.height);

	const backgroundX = (gamePort.width - background.width) / 2;
	const backgroundY = (gamePort.height - background.height) / 2;
	ctx.drawImage(background, backgroundX, backgroundY);

	gameObjects.sort((a, b) => a.y - b.y);
	gameObjects.forEach((obj) => drawGameObject(obj));
}


const img = document.querySelectorAll('.side-content img');
function resizeImage() {
	const container = img.parentElement;
	const scaleX = container.offsetWidth / img.naturalWidth;
	const scaleY = container.offsetHeight / img.naturalHeight;
	const scale = Math.max(scaleX, scaleY);
	img.style.width = img.naturalWidth * scale + 'px';
	img.style.height = img.naturalHeight * scale + 'px';
	img.style.left = (container.offsetWidth - img.offsetWidth) / 2 + 'px';
	img.style.top = (container.offsetHeight - img.offsetHeight) / 2 + 'px';
}


window.addEventListener("resize", resizeGamePort);
resizeGamePort();


function isColliding(a, b) {
	return (
		a.x < b.x + b.width &&
		a.x + a.width > b.x &&
		a.y < b.y + b.height  &&
		a.y + a.height > b.y
	);
}

const dir = {
	none: 0,
	up: 1,
	down: 2,
	left: 3,
	right: 4,
}

const movement = [
	[0, 0],
	[0, -player.speed],
	[0, player.speed],
	[-player.speed, 0],
	[player.speed, 0],
]

var direction = dir.none;
var frameCounter = 0;

function setPlayerSprite(direction) {
	switch (direction) {
		case (dir.down): {
			if (frameCounter < 12)
				player.texture.src = playerForward1.src;
			else if (frameCounter < 18)
				player.texture.src = playerForwardIdle.src;
			else
				player.texture.src = playerForward2.src;
			break;
		}
		case (dir.up): {
			if (frameCounter < 12)
				player.texture.src = playerBackward1.src;
			else if (frameCounter < 18)
				player.texture.src = playerBackwardIdle.src;
			else
				player.texture.src = playerBackward2.src;
			break;
		}
		case (dir.right): {
			if (frameCounter < 10)
				player.texture.src = playerRight1.src;
			else if (frameCounter < 20)
				player.texture.src = playerRightIdle.src;
			else
				player.texture.src = playerRight2.src;
			break;
		}
		case (dir.left): {
			if (frameCounter < 10)
				player.texture.src = playerLeft1.src;
			else if (frameCounter < 20)
				player.texture.src = playerLeftIdle.src;
			else
				player.texture.src = playerLeft2.src;
			break;
		}
	}
}

function tryMovePlayer(direction) {
	moved = true;
	setPlayerSprite(direction);
	player.x += movement[direction][0];
	player.y += movement[direction][1];
	++frameCounter;
	frameCounter = frameCounter % 30;
}

function movePlayerHandler() {
	if (!keys["w"] && !keys["s"] && !keys["a"] && !keys["d"]) {
		// hack to make sure the animation is
		// idle when there is no input
		// and to also alter the left
		// and right foot
		frameCounter = 14;
		setPlayerSprite(direction);
		if (Math.random() < 0.5)
			frameCounter = 0;
		direction = dir.none;
		return;
	}

	const oldX = player.x;
	const oldY = player.y;


	if (keys["w"])
		direction = dir.up;
	if (keys["s"])
		direction = dir.down;
	if (keys["a"])
		direction = dir.left;
	if (keys["d"])
		direction = dir.right;
	tryMovePlayer(direction);

	if (player.x < 0) player.x = 0;
	if (player.y < 100) player.y = 100;
	if (player.x + player.width > GAME_WIDTH) player.x = oldX;
	if (player.y + player.height > GAME_HEIGHT) player.y = oldY;

	for (let gameObject of gameObjects) {
		if ( gameObject === player )
			continue;
		if (isColliding(player, gameObject)) {
			player.x = oldX;
			player.y = oldY;
			break;
		}
	}
}

function loop() {
	movePlayerHandler();
	draw();
	requestAnimationFrame(loop);
}

function wait(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function startGameLoop() {
	while (imageCounter != allImages.length || musicStarted != true) {
		const welcomeX = Math.round((gamePort.width - welcome.width) / 2);
		const welcomeY = Math.round((gamePort.height - welcome.height) / 2);
		ctx.drawImage(welcome, welcomeX, welcomeY);
		await wait(100);
	}
	window.addEventListener('resize', resizeImage);
	loop();
}

startGameLoop();

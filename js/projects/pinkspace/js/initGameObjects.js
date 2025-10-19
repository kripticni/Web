const GAME_WIDTH = 215;
const GAME_HEIGHT = 367;

const player = {
	width: 24, ///29,
	height: 36,
	x: GAME_WIDTH / 2,
	y: GAME_HEIGHT / 2,
	speed: 2,
  texture: new Image(),
};

const playerForwardIdle = new Image();
playerForwardIdle.src = "assets/sprites/kacoluki/idle-forward.png";
const playerBackwardIdle = new Image();
playerBackwardIdle.src = "assets/sprites/kacoluki/idle-backward.png";
const playerLeftIdle = new Image();
playerLeftIdle.src = "assets/sprites/kacoluki/idle-left.png";
const playerRightIdle = new Image();
playerRightIdle.src = "assets/sprites/kacoluki/idle-right.png";

const playerForward1 = new Image();
playerForward1.src = "assets/sprites/kacoluki/forward1.png";
const playerForward2 = new Image();
playerForward2.src = "assets/sprites/kacoluki/forward2.png";
const playerBackward1 = new Image();
playerBackward1.src = "assets/sprites/kacoluki/backward1.png";
const playerBackward2 = new Image();
playerBackward2.src = "assets/sprites/kacoluki/backward2.png";
const playerLeft1 = new Image();
playerLeft1.src = "assets/sprites/kacoluki/left1.png";
const playerLeft2 = new Image();
playerLeft2.src = "assets/sprites/kacoluki/left2.png";
const playerRight1 = new Image();
playerRight1.src = "assets/sprites/kacoluki/right1.png";
const playerRight2 = new Image();
playerRight2.src = "assets/sprites/kacoluki/right2.png";

player.texture.src = playerForwardIdle.src;


const headphones = {
	width: 15,
	height: 10, 
	x: 40,
	y: 190,
	texture: new Image(),
}
headphones.texture.src = "assets/props/headphones.png";

const headset = {
	width: 27,
	height: 35, 
	x: 40 + headphones.width,
	y: 190 + headphones.height,
	texture: new Image(),
}
headset.texture.src = "assets/props/headset.png";

const phone = {
	width: 16,
	height: 25, 
	x: 25,
	y: 210,
	texture: new Image(),
}
phone.texture.src = "assets/props/phone.png";

const laptop = {
	width: 36,
	height: 30, 
	x: 155,
	y: 150,
	texture: new Image(),
}
laptop.texture.src = "assets/props/laptop.png";

const lukicat = {
	width: 43,
	height: 36, 
	x: 35,
	y: 255,
	texture: new Image(),
}
lukicat.texture.src = "assets/props/lukicat.png";

const background = new Image();
background.src = "assets/backgrounds/pinkspace.png";

const welcome = new Image();
welcome.src = "assets/backgrounds/welcome-to-pinkspace.png";

const gameObjects = [player, headphones, headset, laptop, phone, lukicat];
const allImages = [
	background,
	welcome,
	player.texture,
	playerForwardIdle,
	playerForward1,
	playerForward2,
	playerBackwardIdle,
	playerBackward1,
	playerBackward2,
	playerLeftIdle,
	playerLeft1,
	playerLeft2,
	playerRightIdle,
	playerRight1,
	playerRight2,
	headphones.texture,
	headset.texture,
	laptop.texture,
	phone.texture,
	lukicat.texture
];

let imageCounter = 0;
let imageLoaded = false;
allImages.forEach(img => {
	img.onload = () => {
		++imageCounter;
		img.onload = null;
	};
});

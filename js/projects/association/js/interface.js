let game = {
	_redScore: 0,
	_blueScore: 0,
	set redScore(val) {
		this._redScore = val;
		document.getElementById("redScore").value = val;
	},
	get redScore(){
		return this._redScore;
	},
	set blueScore(val) {
		this._blueScore = val;
		document.getElementById("blueScore").value = val;
	},
	get blueScore(){
		return this._blueScore;
	},
}

const hiddenTexts = [
	["ТЕМПЕРАТУРА", "ВОДА", "СВЕТЛОСТ", "ЗЕМЉИШТЕ"],
	["ПРЕДАТОРИ", "ТАКМИЧЕЊЕ", "СИМБИОЗА", "ПАРАЗИТИЗАМ"],
	["КАМУФЛАЖА", "АГИЛНОСТ", "ОТПОРНОСТ", "ПРОМЕНЕ У ПОНАШАЊУ"],
	["ОПСТАНАК", "НЕСТАЈАЊЕ ВРСТА", "РАЗНОВРСНОСТ", "ЕВОЛУЦИЈА"]
];

const fieldTexts = [
	["А1", "А2", "А3", "А4"],
	["Б1", "Б2", "Б3", "Б4"],
	["В4", "В3", "В2", "В1"],
	["Г4", "Г3", "Г2", "Г1"]
];

// 1. Abioticki selekcioni agensi
// 2. Bioticki selekcioni agensi
// 3. Efekti ekoloskih faktora na organizme
// 4. Posledice selekcije i adaptacije
// 5. Prirodna selekcija i evolucija

let team = false;

document.querySelectorAll(".quadrant").forEach((quad, i) => {
	let precentage;
	let offset;
	switch(i){
		case 0:
			precentage = 4;
			offset = 10;
			break
		case 1: 
			precentage = 4;
			offset = -10;
			break;
		case 2:
			precentage = 34;
			offset = -10;
			break;
		case 3:
			precentage = -26;
			offset = 10;
			break;
		default:
			break;
	}
	for(let j = 0; j < 4; ++j) {
		const btnOffset = precentage;
		const btn = document.createElement("button");
		btn.textContent = fieldTexts[i][j];
		btn.className = "hiddenText";
		btn.style.transform = `translateX(${btnOffset}%)`;

		btn.addEventListener("click", () => {
			const revealed = document.createElement("div");
			revealed.className = "revealedText";
			revealed.style.transform = `translateX(${btnOffset}%)`;

			if(team === false)
				revealed.classList.add('blueTeam');
			else
				revealed.classList.add('redTeam');
			team = !team;

			revealed.textContent = hiddenTexts[i][j];
			btn.replaceWith(revealed);
		});

		quad.appendChild(btn);
		precentage += offset;
	}
});

const colAnswers = ["АБИОТИЧКИ", "БИОТИЧКИ", "ЕФЕКТИ ЕКО. ФАКТОРА", "ПОСЛ. АДАПТАЦИЈЕ"];
const colNames = ["А", "Б", "В", "Г"];
const finalAnswer = "СЕЛЕКЦИЈА И ЕВОЛУЦИЈА";

document.querySelectorAll(".quadrant").forEach((quad, i) => {
	const textBox = document.createElement("input");

	textBox.placeholder = colNames[i];
	textBox.type = "text"; 
	textBox.className = "hiddenText";

	let precentage = 44;
	if(i % 2 == 0)
		precentage == 44;
	else
		precentage = -36;
	textBox.style.transform = `translateX(${precentage}%)`;

	textBox.addEventListener('keydown', (event) => {
		if(event.key !== 'Enter')
			return;
		if(textBox.value === colAnswers[i]){
			if(team === true){
				game.blueScore += 50;
				textBox.className = "blueTeam";
			} else {
				game.redScore += 50;
				textBox.className = "redTeam";
			}
			textBox.classList.add("revealedText");
		}
	});
	if(i < 2)
		quad.appendChild(textBox);
	else
		quad.prepend(textBox);
});

const center = document.getElementById("finalContainer");
const textBox = document.createElement("input");

textBox.placeholder = "???";
textBox.type = "text"; 
textBox.className = "hiddenText";
textBox.id = "final";

textBox.addEventListener('keydown', (event) => {
	if(event.key !== 'Enter')
		return;
	if(textBox.value === finalAnswer){
		if(team === true){
			game.blueScore += 100;
			textBox.className = "blueTeam";
		} else {
			game.redScore += 100;
			textBox.className = "redTeam";
		}
		textBox.classList.add("revealedText");
	}
});

center.appendChild(textBox);

const status = document.getElementById("statusContainer");

const blueStatusBox = document.createElement("input");
blueStatusBox.type = "text";
blueStatusBox.readOnly = true;
blueStatusBox.id = "blueScore";
blueStatusBox.value = "0";
status.appendChild(blueStatusBox);

const redStatusBox = document.createElement("input");
redStatusBox.type = "text";
redStatusBox.readOnly = true;
redStatusBox.id = "redScore";
redStatusBox.value = "0";
status.appendChild(redStatusBox);


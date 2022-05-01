let secretNumber = getRandomInt(1,10);
let trys = 3;

function getRandomInt(min,max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

document.querySelector(".check").onclick = function() {
	let userNumber = document.querySelector("input").value;

	if (secretNumber == userNumber) {
		document.querySelector("div").innerHTML = "YOU WON!! HERE IS A PRIZE 🥇💐"
	}

	if (secretNumber > userNumber) {
		document.querySelector("div").innerHTML = "🚫wrong🚫 hint: the secret number is GREATER"
		trys = trys - 1
		document.querySelector("span").innerHTML = trys
	}

	if (secretNumber < userNumber) {
		document.querySelector("div").innerHTML = "🚫wrong🚫 hint: the secret number is LESS"
		trys = trys - 1 
		document.querySelector("span").innerHTML = trys
	}

	if (trys == 0) {
		document.querySelector("div").innerHTML = ">:( HOW DARE YOU LOOSE ALL YOUR TRYS YOU BETRAYED US...the secret number was " + secretNumber
		document.querySelector(".check").disabled = true 
	}
	document.querySelector("input").value = ""
}	

document.querySelector(".newgame").onclick = function() {
	document.querySelector(".info").innerHTML = "❓"
	document.querySelector(".check").disabled = false
	trys = 3;
	document.querySelector("span").innerHTML = trys
	document.querySelector("input").value = ""
	secretNumber = getRandomInt(1,10)
}
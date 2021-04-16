var dice = document.createElement('div');

dice.classList.add('dice');

var player = document.getElementById('player');

player.appendChild(dice);

function diceRoll(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);
    return randomNumber;
}

function dice6() {
    var diceResult = diceRoll(1, 6);
    if (diceResult === 6) {
        dice.style.backgroundPosition = "100%";
    } else if (diceResult === 5) {
        dice.style.backgroundPosition = "80%";
    } else if (diceResult === 4) {
        dice.style.backgroundPosition = "60%";
    } else if (diceResult === 3) {
        dice.style.backgroundPosition = "40%";
    } else if (diceResult === 2) {
        dice.style.backgroundPosition = "20%";
    }
}


var question = parseInt(prompt('Combien de dés souhaitez-vous lancer?'), 10);
for(var compteur = 0; compteur<question; compteur++) {
    dice6();
}


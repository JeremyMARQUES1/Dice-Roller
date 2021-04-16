var diceDiv = document.createElement('div');

diceDiv.classList.add('dice');

var player = document.getElementById('player');

player.appendChild(diceDiv);

dice = {
    min: 1,
    max: 6,
    getRandomNumber: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(randomNumber);
        return randomNumber;
    },
    diceRoll: function() {
        var diceResult = dice.getRandomNumber(dice.min, dice.max);
        if (diceResult === dice.min) {
            diceDiv.style.backgroundPosition = "0%";
        } else if (diceResult === dice.min+1) {
            diceDiv.style.backgroundPosition = "20%";
        } else if (diceResult === dice.min+2) {
            diceDiv.style.backgroundPosition = "40%";
        } else if (diceResult === dice.min+3) {
            diceDiv.style.backgroundPosition = "60%";
        } else if (diceResult === dice.min+4) {
            diceDiv.style.backgroundPosition = "80%";
        } else {
            diceDiv.style.backgroundPosition = "100%";
        }
    }
}

var diceNumber = parseInt(prompt('Combien de dés souhaitez-vous lancer?'), 10);
for (var count = 0; count < diceNumber; count++) {
    dice.diceRoll();
}
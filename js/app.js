var diceNumber = parseInt(prompt('Combien de dés souhaitez-vous lancer?'), 10);

// Création de l'objet dice.
dice = {
    min: 1,
    max: 6,
    // Fonction générant un entier aléatoire.
    getRandomNumber: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(randomNumber);
        return randomNumber;
    },
    diceRoll: function () {
        // Boucle permettant de générer autant de dés que demandé.
        for (var count = 0; count < diceNumber; count++) {
            // Création du dé player.
            var diceDiv = document.createElement('div');
            diceDiv.classList.add('dice');
            var player = document.getElementById('player');
            player.appendChild(diceDiv);
            // Résultat du dé player.
            var diceResult = dice.getRandomNumber(dice.min, dice.max);
            // Décalage du sprite de 20% à chaque fois que le résultat du dé player prend 1.
            diceDiv.style.backgroundPosition = ((diceResult - 1) * 20).toString() + '%';
            
            // Création du dé dealer.
            var diceDiv2 = document.createElement('div');
            diceDiv2.classList.add('dice');
            player = document.getElementById('dealer');
            dealer.appendChild(diceDiv2);
            // Résultat du dé dealer.
            var diceResult = dice.getRandomNumber(dice.min, dice.max);
            // Décalage du sprite de 20% à chaque fois que le résultat du dé dealer prend 1.
            diceDiv2.style.backgroundPosition = ((diceResult - 1) * 20).toString() + '%';
        }
    },
}
dice.diceRoll();
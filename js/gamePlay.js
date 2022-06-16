const gamePlay = {
    
    init: function () {
        const buttonsElmt = document.querySelectorAll('.free');
        for (const buttonElmt of buttonsElmt) {
            buttonElmt.addEventListener('click', gamePlay.handleClickPlayer);
        }
    },

    /**
     * Quand l'utilisateur clique sur une case, 
     * on fait apparaitre une croix
     */
    handleClickPlayer: function (evt) {
        evt.target.classList.add('invisible')
        evt.target.classList.remove('free')
        let caseElmt = evt.target.closest('div');
        crossUser = caseElmt.querySelector('p');
        crossUser.textContent = "X";
        crossUser.classList.remove('invisible');
        crossUser.classList.add('x');
        caseElmt.classList.add('checkX');

        // On regarde si le joueur à gagné ou non
        checkResult.checkPlayer(caseElmt);

        setTimeout(gamePlay.computerPlay, 80); 
    },

    /**
     * Simule le jeu du PC
     * on fait apparaitre un cercle
     */
    computerPlay: function () {
        // On sélectionne toute les cases vides
        const buttonsForPC = document.querySelectorAll('.free');

        // SI toutes les cases sont rempli et que le joueur n'a pas gagné, on considère qu'il a perdu
        if(buttonsForPC.length=== 0 && document.querySelector('.result').classList.contains('invisible')) {
            setTimeout(checkResult.results('GAME OVER'), 100);
        }

        if(buttonsForPC.length>0) {
            // On choisit une case au hasard
            let number = Math.floor(Math.random() * buttonsForPC.length );
            let buttonElmt = buttonsForPC[number]

            buttonElmt.classList.add('invisible')
            buttonElmt.classList.remove('free')
            let caseElmt = buttonElmt.closest('div');
            roundPC = caseElmt.querySelector('p');
            roundPC.textContent="O";
            roundPC.classList.remove('invisible');
            roundPC.classList.add('o');
            caseElmt.classList.add('checkO');

            // On regarde si le joueur à perdu ou non
            checkResult.checkPlayer(caseElmt);
        }
    },
}
const gamePlay = {
    
    init: function () {
        // on place des eventlistener sur les boutons
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

        checkResult.checkPlayer(caseElmt);
        
    },

    /**
     * Simule le jeu du PC
     * on fait apparaitre un cercle
     */
    computerPlay: function () {
        const buttonsForPC = document.querySelectorAll('.free');
        if(buttonsForPC.length=== 0 && document.querySelector('aside').classList.contains('invisible')) {
            setTimeout(checkResult.result('LOOOSER'), 100);
        }
        
        if(buttonsForPC.length>0) {
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

            checkResult.checkPC(caseElmt);
        }
        
    },
   
}
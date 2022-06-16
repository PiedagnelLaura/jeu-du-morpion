const checkResult = {
    
    /**
     * Permet de vérifier si l'utilisateur à gagné ou perdu
     * à chaque tour de jeu
     */
    checkPlayer: function (caseElmt) {
        const listClass=caseElmt.className;
        let winCompteur = localStorage.getItem('win');
        let classArray = listClass.split(" ");
        for (let nb =0; nb < classArray.length-1; nb++ ) {
            divSameClassElmt = document.querySelectorAll("."+classArray[nb]);

            let compteurX = 0;
            let compteurO = 0;
            for (const divElmt of divSameClassElmt) {
                let listClass =divElmt.className.split(" ");
                
                if(listClass[listClass.length-1] === "checkX") {
                    compteurX ++;
                }
                if(listClass[listClass.length-1] === "checkO") {
                    compteurO ++;
                }
            }

            if (compteurX===3) {
                // on enregistre le nb de partie gagnée grâce à local storage
                winCompteur++;
                localStorage.setItem("win", winCompteur);

                setTimeout(checkResult.results('BRAVO'), 100);
            } 
            
            if (compteurO===3) {
                setTimeout(checkResult.results('GAME OVER !'), 100);
            }  
        }  
    },

    /**
     * Affichage du résultat final
     * 
     */
    results: function (final) {
        // on enregistre le nb de partie joué grâce à local storage
        let playCompteur = localStorage.getItem('play');
        playCompteur++;
        localStorage.setItem("play", playCompteur);

        buttonsElmt = document.querySelectorAll('.free');
        for (const buttonElmt of buttonsElmt) {
            buttonElmt.classList.add('invisible');
            buttonElmt.classList.remove('free');
        }
  
        document.querySelector('.result').classList.remove('invisible');
        document.querySelector('.result h2').textContent = final;

        // On met a jour le tableau des stats
        document.querySelector('.nbplay').textContent =  localStorage.getItem("play");
        document.querySelector('.nbwin').textContent =  localStorage.getItem("win");
        let pourcent = Math.round(localStorage.getItem("win")/localStorage.getItem("play")*100);
        document.querySelector('.pourcentage').textContent =  pourcent;
        
    },   
}
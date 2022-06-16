const checkResult = {
    
    /**
     * Permet de vérifier si l'utilisateur à gagné ou perdu
     * à chaque tour de jeu
     */
    checkPlayer: function (caseElmt) {
        const listClass=caseElmt.className;
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
        buttonsElmt = document.querySelectorAll('.free');
        for (const buttonElmt of buttonsElmt) {
            buttonElmt.classList.add('invisible');
            buttonElmt.classList.remove('free');
        }

        document.querySelector('.result').classList.remove('invisible');
        document.querySelector('.result h2').textContent = final;
    },   
}
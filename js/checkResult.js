const checkResult = {
    
    /**
     * Permet de vérifier si l'utilisateur à gagné 
     * quand il clique sur une case
     */
    checkPlayer: function (caseElmt) {
        const listClass=caseElmt.className;
        let classArray = listClass.split(" ");
        console.log('verif');
        for (let nb =0; nb < classArray.length-1; nb++ ) {
            divSameClassElmt = document.querySelectorAll("."+classArray[nb]);

            let nbX = 0;

            for (const divElmt of divSameClassElmt) {
                let listClass =divElmt.className.split(" ");
                
                if(listClass[listClass.length-1] === "checkX") {
                    nbX ++;
                }
            }

            if (nbX===3) {
                setTimeout(checkResult.result('WIN'), 100);
            }     
            
        }
        setTimeout(gamePlay.computerPlay, 80);
    },

    /**
     * Permet de vérifier si l'utilisateur à perdu
     * quand le pc joue
     */
     checkPC: function (caseElmt) {
        const listClass=caseElmt.className;
        let classArray = listClass.split(" ");

        for (let nb =0; nb < classArray.length-1; nb++ ) {
            divSameClassElmt = document.querySelectorAll("."+classArray[nb]);

            let nbO = 0;

            for (const divElmt of divSameClassElmt) {
                let listClass =divElmt.className.split(" ");
                
                if(listClass[listClass.length-1] === "checkO") {
                    nbO ++;
                }
            }

            if (nbO===3) {
                setTimeout(checkResult.result('LOOOSER'), 100);
            }

        }
    },

    result: function (final) {
        document.querySelector('section').classList.add('invisible');
        document.querySelector('aside').classList.remove('invisible');
        document.querySelector('aside h2').textContent = final;
    },

 
   
   
}
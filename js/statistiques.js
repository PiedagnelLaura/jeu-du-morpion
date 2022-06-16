const statistiques = {
    
    /**
     * On récupère les données enregistrées grâce à local storage pour
     * mettre à jour le tableau des stats
     */
    init: function () {
        let numberPlay = localStorage.getItem("play") ?? 0 ;
        const spanPlayElmt = document.querySelector('.nbplay');
        spanPlayElmt.textContent = numberPlay;

        let numberWin = localStorage.getItem("win") ?? 0;
        const spanWinElmt = document.querySelector('.nbwin');
        spanWinElmt.textContent = numberWin;
        
        if (numberPlay>0) {
            let numberPourcent = Math.round(numberWin/numberPlay*100);
            
            const spanPourcentElmt = document.querySelector('.pourcentage');
            spanPourcentElmt.closest('p').classList.remove('invisible');
            spanPourcentElmt.textContent = numberPourcent ;
        }
        
    },
}

var billentyuoszlop = -1



window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            if (billentyuoszlop >=0 && 7>= billentyuoszlop && game == true && SINGLE == false){
                billentyuoszlop--
            };
            nyomas();
            break;
        case 'ArrowRight':
            if (billentyuoszlop >=-1 && 6>= billentyuoszlop && game == true  && SINGLE == false){
                billentyuoszlop++
            };
            nyomas();
            break;
        case 'Enter':
            if(win == false && dontetlen == false && game == true  && SINGLE == false){
                billentyudobas()
            };
            break;
    }
}); 


window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            if (billentyuoszlop >=0 && 7>= billentyuoszlop && game == true && SINGLE == true && currentPlayer == "piros"){
                billentyuoszlop--
            };
            nyomas();
            break;
        case 'ArrowRight':
            if (billentyuoszlop >=-1 && 6>= billentyuoszlop && game == true && SINGLE == true && currentPlayer == "piros"){
                billentyuoszlop++
            };
            nyomas();
            break;
        case 'Enter':
            if(win == false && dontetlen == false && game == true && SINGLE == true && currentPlayer == "piros"){
                billentyudobas()
            };
            break;
    }
}); 

function nyomas(){
    if (billentyuoszlop == -1){
        lebeg0Out()
    }
    if (billentyuoszlop == 0){
        lebeg1Out()
        lebeg0In()
    }
    if (billentyuoszlop == 1){
        lebeg0Out()
        lebeg2Out()
        lebeg1In()
    }
    if (billentyuoszlop == 2){
        lebeg1Out()
        lebeg3Out()
        lebeg2In()
    }
    if (billentyuoszlop == 3){
        lebeg2Out()
        lebeg4Out()
        lebeg3In()
    }
    if (billentyuoszlop == 4){
        lebeg3Out()
        lebeg5Out()
        lebeg4In()
    }
    if (billentyuoszlop == 5){
        lebeg4Out()
        lebeg6Out()
        lebeg5In()
    }
    if (billentyuoszlop == 6){
        lebeg5Out()
        lebeg6In()
    }
    if (billentyuoszlop == 7){
        lebeg6Out()
    }
}


function billentyudobas(){

    if (billentyuoszlop == 0){
        berak_oszlop0()
    }
    if (billentyuoszlop == 1){
        berak_oszlop1()
    }
    if (billentyuoszlop == 2){
        berak_oszlop2()
    }
    if (billentyuoszlop == 3){
        berak_oszlop3()
    }
    if (billentyuoszlop == 4){
        berak_oszlop4()
    }
    if (billentyuoszlop == 5){
        berak_oszlop5()
    }
    if (billentyuoszlop == 6){
        berak_oszlop6()
    }
}
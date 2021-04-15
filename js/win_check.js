
function winHorizontal(sor, oszlop) {
    if (tablazat_matrix[sor][oszlop] == tablazat_matrix[sor][oszlop+1] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor][oszlop+2] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor][oszlop+3] && tablazat_matrix[sor][oszlop] !== null && win == false){
        console.log(`${currentPlayer} nyert`)
        win = true
        game = false
        winner_alert()
    }
    if (tablazat_matrix[sor][oszlop] == tablazat_matrix[sor][oszlop-1] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor][oszlop+1] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor][oszlop+2] && tablazat_matrix[sor][oszlop] !== null && win == false){
        console.log(`${currentPlayer} nyert`)
        win = true
        game = false
        winner_alert()
    }   
    if (tablazat_matrix[sor][oszlop] == tablazat_matrix[sor][oszlop-2] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor][oszlop-1] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor][oszlop+1] && tablazat_matrix[sor][oszlop] !== null && win == false){
        console.log(`${currentPlayer} nyert`)
        win = true
        game = false
        winner_alert()
    }
    if (tablazat_matrix[sor][oszlop] == tablazat_matrix[sor][oszlop-3] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor][oszlop-2] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor][oszlop-1] && tablazat_matrix[sor][oszlop] !== null && win == false){
        console.log(`${currentPlayer} nyert`)
        win = true
        game = false
        winner_alert()
    }
}


function winVertical(sor, oszlop){
    if(sor<=2 && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor+1][oszlop] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor+2][oszlop] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor+3][oszlop] && tablazat_matrix[sor][oszlop] !== null && win == false){
        console.log(`${currentPlayer} nyert`)
        win = true
        game = false
        winner_alert()
    }
}


function winDiagonal1(sor,oszlop) {
    if(sor>=3 && oszlop<=3 && tablazat_matrix[sor][oszlop] == tablazat_matrix [sor-1][oszlop+1] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor-2][oszlop+2] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor-3][oszlop+3] && tablazat_matrix[sor][oszlop] !== null && win == false){
        console.log(`${currentPlayer} nyert`)
        win = true
        game = false
        winner_alert()
    }
    if(sor>=2 && sor<=4 && oszlop<=4 && oszlop>=1 && tablazat_matrix[sor][oszlop] == tablazat_matrix [sor+1][oszlop-1] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor-1][oszlop+1] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor-2][oszlop+2] && tablazat_matrix[sor][oszlop] !== null && win == false){
        console.log(`${currentPlayer} nyert`)
        win = true
        game = false
        winner_alert()
    }
    if(sor>=1 && sor<=3 && oszlop<=5 && oszlop>=2 && tablazat_matrix[sor][oszlop] == tablazat_matrix [sor+2][oszlop-2] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor+1][oszlop-1] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor-1][oszlop+1] && tablazat_matrix[sor][oszlop] !== null && win == false){
        console.log(`${currentPlayer} nyert`)
        win = true
        game = false
        winner_alert()
    }
    if(sor<=2 && oszlop>=3 && tablazat_matrix[sor][oszlop] == tablazat_matrix [sor+3][oszlop-3] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor+2][oszlop-2] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor+1][oszlop-1] && tablazat_matrix[sor][oszlop] !== null && win == false){
        console.log(`${currentPlayer} nyert`)
        win = true
        game = false
        winner_alert()
    }


}

function winDiagonal2(sor,oszlop){
    if (sor<=2 && oszlop<=3 && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor+1][oszlop+1] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor+2][oszlop+2] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor+3][oszlop+3] && tablazat_matrix[sor][oszlop] !== null && win == false){
        console.log(`${currentPlayer} nyert`)
        win = true
        game = false
        winner_alert()
    }
    if (sor<=3 && sor>=1 && oszlop<=4 && oszlop>=1 && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor-1][oszlop-1] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor+1][oszlop+1] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor+2][oszlop+2] && tablazat_matrix[sor][oszlop] !== null && win == false){
        console.log(`${currentPlayer} nyert`)
        win = true
        game = false
        winner_alert()
    }
    if (sor<=4 && sor>=2 && oszlop<=5 && oszlop>=2 && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor-2][oszlop-2] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor-1][oszlop-1] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor+1][oszlop+1] && tablazat_matrix[sor][oszlop] !== null && win == false){
        console.log(`${currentPlayer} nyert`)
        win = true
        game = false
        winner_alert()
    }
    if (sor>=3 && oszlop>=3 && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor-1][oszlop-1] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor-2][oszlop-2] && tablazat_matrix[sor][oszlop] == tablazat_matrix[sor-3][oszlop-3] && tablazat_matrix[sor][oszlop] !== null && win == false){
        console.log(`${currentPlayer} nyert`)
        win = true
        game = false
        winner_alert()
    }
}

function dontetlen_check(){
    var uresMezok = 0
    for (let i = 0; i< tablazat_matrix.length; i++){
        for (let j = 0; j<tablazat_matrix[i].length; j++){
            if (tablazat_matrix[i][j] == null){
                uresMezok = uresMezok + 1
            }
        }
    }
    if(uresMezok == 0 && win == false){
        dontetlen = true
        game = false 
    }
    console.log(uresMezok,dontetlen)

}



function winChecking(sor, oszlop){
    winVertical(sor,oszlop)
    winDiagonal1(sor,oszlop)
    winHorizontal(sor,oszlop)
    winDiagonal2(sor,oszlop)
    dontetlen_check()

}
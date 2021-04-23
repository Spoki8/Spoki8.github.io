function AI(){
    numberAI =  Math.floor(Math.random() * 6) + 0
   
    if( numberAI == 0){
        berak_oszlop0()
    }
    if( numberAI == 1){
        berak_oszlop1()
    }
    if( numberAI == 2){
        berak_oszlop2()
    }
    if( numberAI == 3){
        berak_oszlop3()
    }
    if( numberAI == 4){
        berak_oszlop4()
    }
    if( numberAI == 5){
        berak_oszlop5()
    }
    if( numberAI == 6){
        berak_oszlop6()
    }
    console.log(numberAI)
}


function AIdrop(){
    while (currentPlayer == "sárga" && game == true){
        AI()
        console.log("fut")
    }
    dobasHelye.className = "dobas_helye"
}
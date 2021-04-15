

const startGomb = document.querySelector("#start")
const menu = document.querySelector("#menu")
const tabla = document.querySelector("#tabla")
const tablazat = document.querySelector("#tablazat")


const oszlop0 = document.querySelector(".oszlop0")
const oszlop1 = document.querySelector(".oszlop1")
const oszlop2 = document.querySelector(".oszlop2")
const oszlop3 = document.querySelector(".oszlop3")
const oszlop4 = document.querySelector(".oszlop4")
const oszlop5 = document.querySelector(".oszlop5")
const oszlop6 = document.querySelector(".oszlop6")

const kovetkezo =  document.querySelector(".kovetkezo_korong")
const selectedKorong = document.querySelector(".selected_korong")
const tablamenu = document.querySelector("#tablamenu")
const dobasHelye = document.querySelector("#dobas_helye")

const player1Name = document.querySelector("#jatekos_1")
const player2Name = document.querySelector("#jatekos_2")

const eredmeny = document.querySelector("#eredmeny")
// start 
startGomb.addEventListener("click", inditas)


function inditas() {
   menu.style.visibility = "hidden"
   tabla.style.visibility = "visible"
   selectedKorong.style.visibility = "visible"
   tablamenu.style.visibility = "visible"
    game = true

   dobasHelye.className = "dobas_helye"
   getPlayersName()
}

function visszaMenube(){
   location.reload()

}


function getPlayersName(){
    document.querySelector("#player1_name").innerHTML = player1Name.value
    document.querySelector("#player2_name").innerHTML = player2Name.value
}



// tabla


const tablazat_matrix = [ 
 [null, null, null, null, null, null, null],
 [null, null, null, null, null, null, null],
 [null, null, null, null, null, null, null],
 [null, null, null, null, null, null, null],
 [null, null, null, null, null, null, null],
 [null, null, null, null, null, null, null]
]

var currentPlayer = "piros"
var win = false
var dontetlen = false
var game = false 

// jelenlegi játékos jelzése
function currentPlyerColor(){
    if (currentPlayer == "piros"){
        kovetkezo.style.backgroundColor = "red"
    }
    if (currentPlayer == "sárga"){
        kovetkezo.style.backgroundColor = "yellow"
    }
}

// lebeg a bedobando korong a tábla felett

oszlop0.addEventListener("mouseover", lebeg0In)
oszlop0.addEventListener("mouseout", lebeg0Out)
oszlop1.addEventListener("mouseover", lebeg1In)
oszlop1.addEventListener("mouseout", lebeg1Out)
oszlop2.addEventListener("mouseover", lebeg2In)
oszlop2.addEventListener("mouseout", lebeg2Out)
oszlop3.addEventListener("mouseover", lebeg3In)
oszlop3.addEventListener("mouseout", lebeg3Out)
oszlop4.addEventListener("mouseover", lebeg4In)
oszlop4.addEventListener("mouseout", lebeg4Out)
oszlop5.addEventListener("mouseover", lebeg5In)
oszlop5.addEventListener("mouseout", lebeg5Out)
oszlop6.addEventListener("mouseover", lebeg6In)
oszlop6.addEventListener("mouseout", lebeg6Out)


// bepakolasok

oszlop0.addEventListener("click", berak_oszlop0)
oszlop1.addEventListener("click", berak_oszlop1)
oszlop2.addEventListener("click", berak_oszlop2)
oszlop3.addEventListener("click", berak_oszlop3)
oszlop4.addEventListener("click", berak_oszlop4)
oszlop5.addEventListener("click", berak_oszlop5)
oszlop6.addEventListener("click", berak_oszlop6)

// jelenlegi játékos jelzése



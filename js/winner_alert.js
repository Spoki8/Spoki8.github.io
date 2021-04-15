
const winnertextDiv = document.querySelector("#winner")


function winner_alert(){
    if(win == true){
        if (currentPlayer == "piros"){
            player = player1Name.value
        }
        else{
            player = player2Name.value
        }
        const winnerText = document.createElement('p')
        winnerText.innerHTML = `${player} nyert`
        winnertextDiv.appendChild(winnerText)
    
        const ujJatek = document.createElement('button')
        ujJatek.innerHTML = "Vissza a menübe"
        ujJatek.className = "returnmenu"
        winnertextDiv.appendChild(ujJatek)
        winnertextDiv.style.visibility = "visible"
        if (currentPlayer == "piros"){
            winnertextDiv.style.backgroundColor = "red"
        }
        else{
            winnertextDiv.style.backgroundColor = "yellow"
        }   

        const Menugomb = document.querySelector(".returnmenu")
        Menugomb.addEventListener("click", visszaMenube)
    }
    if(dontetlen == true){
        const winnerText = document.createElement('p')
        winnerText.innerHTML = "Döntetlen"
        winnertextDiv.appendChild(winnerText)
    
        const ujJatek = document.createElement('button')
        ujJatek.innerHTML = "Vissza a menübe"
        winnertextDiv.appendChild(ujJatek)
        winnertextDiv.style.visibility = "visible"
    }
   
    
}





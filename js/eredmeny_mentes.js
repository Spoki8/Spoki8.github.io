function save(){
    const teszt = [["mark",1,"-","csilla",2],["pista",2,"géza",0]]
    const eredmeny = document.querySelector("#eredemeny")
    const ujsor = document.createElement('p')

    ujsor.innerHTML = teszt[0].join(" ")
    eredmeny.appendChild(ujsor)
}


function write_data_of_winners(lista){
    localStorage.setItem(lista)
}

function read_data_of_winners(lista){
    localStorage.lista
}



function pair_check(player1Name,player2Name){

}



function eredmenyTablaKiiras(){
    const eredmeny = document.querySelector("#eredemeny")
    const currentEredmeny = localStorage.eltartolteredmeny

    for (i in currentEredmeny){
        const ujsor = document.createElement('p')
        ujsor.innerHTML = currentEredmeny[i].join(" ")

        eredmeny.appendChild(ujsor)
    }

    
}

function berak_oszlop0() {
    if (win == false && dontetlen == false){
      let i = 6
      if (tablazat_matrix[5][0] == null && i == 6) {
   
         if (currentPlayer == "piros") {
            tablazat_matrix[5][0] = "R"
            animacio5(0, "red")
            setTimeout(function(){tablazat.rows[5].cells[0].style.backgroundColor = "red"}, 600) 
            winChecking(5,0)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[5][0] = "Y"
            animacio5(0,"yellow")
            setTimeout(function(){tablazat.rows[5].cells[0].style.backgroundColor = "yellow"}, 600) 
            winChecking(5,0)
            currentPlayer = "piros"
         }
      }
      else {
         i--
      }
   
      if (tablazat_matrix[4][0] == null && i == 5) {
         if (currentPlayer == "piros") {
            tablazat_matrix[4][0] = "R"
            animacio4(0, "red")
            setTimeout(function(){tablazat.rows[4].cells[0].style.backgroundColor = "red"}, 500) 
            winChecking(4,0)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[4][0] = "Y"
            animacio4(0,"yellow")
            setTimeout(function(){tablazat.rows[4].cells[0].style.backgroundColor = "yellow"}, 500) 
            winChecking(4,0)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[3][0] == null && i == 4) {
         if (currentPlayer == "piros"){
            tablazat_matrix[3][0] = "R"
            animacio3(0, "red")
            setTimeout(function(){tablazat.rows[3].cells[0].style.backgroundColor = "red"}, 400) 
            winChecking(3,0)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[3][0] = "Y"
            animacio3(0, "yellow")
            setTimeout(function(){tablazat.rows[3].cells[0].style.backgroundColor = "yellow"}, 400) 
            winChecking(3,0)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[2][0] == null && i == 3) {
         if (currentPlayer == "piros") {
            tablazat_matrix[2][0] = "R"
            animacio2(0, "red")
            setTimeout(function(){tablazat.rows[2].cells[0].style.backgroundColor = "red"}, 300) 
            winChecking(2,0)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[2][0] = "Y"
            animacio2(0, "yellow")
            setTimeout(function(){tablazat.rows[2].cells[0].style.backgroundColor = "yellow"}, 300) 
            winChecking(2,0)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[1][0] == null && i == 2) {
         if (currentPlayer == "piros") {
            tablazat_matrix[1][0] = "R"
            animacio1(0, "red")
            setTimeout(function(){tablazat.rows[1].cells[0].style.backgroundColor = "red"}, 200) 
            winChecking(1,0)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[1][0] = "Y"
            animacio1(0, "yellow")
            setTimeout(function(){tablazat.rows[1].cells[0].style.backgroundColor = "yellow"}, 200) 
            winChecking(1,0)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[0][0] == null && i == 1) {
         if (currentPlayer == "piros") {
            tablazat_matrix[0][0] = "R"
            tablazat.rows[0].cells[0].style.backgroundColor = "red"
            winChecking(0,0)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[0][0] = "Y"
            tablazat.rows[0].cells[0].style.backgroundColor = "yellow"
            winChecking(0,0)
            currentPlayer = "piros"
         }
   
      }
      else {
         i--
      }
   
     currentPlyerColor()
    }
 }

 function berak_oszlop1() {
    if(win == false && dontetlen == false){
      let i = 6
      if (tablazat_matrix[5][1] == null && i == 6) {
   
         if (currentPlayer == "piros") {
            tablazat_matrix[5][1] = "R"
            animacio5(1, "red")
            setTimeout(function(){tablazat.rows[5].cells[1].style.backgroundColor = "red"}, 600) 
            winChecking(5,1)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[5][1] = "Y"
            animacio5(1,"yellow")
            setTimeout(function(){tablazat.rows[5].cells[1].style.backgroundColor = "yellow"}, 600) 
            winChecking(5,1)
            currentPlayer = "piros"
         }
      }
      else {
         i--
      }
   
      if (tablazat_matrix[4][1] == null && i == 5) {
         if (currentPlayer == "piros") {
            tablazat_matrix[4][1] = "R"
            animacio4(1, "red")
            setTimeout(function(){tablazat.rows[4].cells[1].style.backgroundColor = "red"}, 500) 
            winChecking(4,1)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[4][1] = "Y"
            animacio4(1, "yellow")
            setTimeout(function(){tablazat.rows[4].cells[1].style.backgroundColor = "yellow"}, 500) 
            winChecking(4,1)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[3][1] == null && i == 4) {
         if (currentPlayer == "piros"){
            tablazat_matrix[3][1] = "R"
            animacio3(1,"red")
            setTimeout(function(){tablazat.rows[3].cells[1].style.backgroundColor = "red"}, 400) 
            winChecking(3,1)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[3][1] = "Y"
            animacio3(1,"yellow")
            setTimeout(function(){tablazat.rows[3].cells[1].style.backgroundColor = "yellow"}, 400) 
            winChecking(3,1)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[2][1] == null && i == 3) {
         if (currentPlayer == "piros") {
            tablazat_matrix[2][1] = "R"
            animacio2(1,"red")
            setTimeout(function(){tablazat.rows[2].cells[1].style.backgroundColor = "red"}, 300) 
            winChecking(2,1)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[2][1] = "Y"
            animacio2(1,"yellow")
            setTimeout(function(){tablazat.rows[2].cells[1].style.backgroundColor = "yellow"}, 300) 
            winChecking(2,1)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[1][1] == null && i == 2) {
         if (currentPlayer == "piros") {
            tablazat_matrix[1][1] = "R"
            animacio1(1,"red")
            setTimeout(function(){tablazat.rows[1].cells[1].style.backgroundColor = "red"}, 200) 
            winChecking(1,1)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[1][1] = "Y"
            animacio1(1,"yellow")
            setTimeout(function(){tablazat.rows[1].cells[1].style.backgroundColor = "yellow"}, 200) 
            winChecking(1,1)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[0][1] == null && i == 1) {
         if (currentPlayer == "piros") {
            tablazat_matrix[0][1] = "R"
            tablazat.rows[0].cells[1].style.backgroundColor = "red"
            winChecking(0,1)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[0][1] = "Y"
            tablazat.rows[0].cells[1].style.backgroundColor = "yellow"
            winChecking(0,1)
            currentPlayer = "piros"
         }
   
      }
      else {
         i--
      }
   
     currentPlyerColor()
    }
 
 }

 function berak_oszlop2() {
    if(win == false && dontetlen == false){
      let i = 6
      if (tablazat_matrix[5][2] == null && i == 6) {
   
         if (currentPlayer == "piros") {
            tablazat_matrix[5][2] = "R"
            animacio5(2,"red")
            setTimeout(function(){tablazat.rows[5].cells[2].style.backgroundColor = "red"}, 600) 
            winChecking(5,2)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[5][2] = "Y"
            animacio5(2,"yellow")
            setTimeout(function(){tablazat.rows[5].cells[2].style.backgroundColor = "yellow"}, 600) 
            winChecking(5,2)
            currentPlayer = "piros"
         }
      }
      else {
         i--
      }
   
      if (tablazat_matrix[4][2] == null && i == 5) {
         if (currentPlayer == "piros") {
            tablazat_matrix[4][2] = "R"
            animacio4(2,"red")
            setTimeout(function(){tablazat.rows[4].cells[2].style.backgroundColor = "red"}, 500) 
            winChecking(4,2)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[4][2] = "Y"
            animacio4(2,"yellow")
            setTimeout(function(){tablazat.rows[4].cells[2].style.backgroundColor = "yellow"}, 500) 
            winChecking(4,2)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[3][2] == null && i == 4) {
         if (currentPlayer == "piros"){
            tablazat_matrix[3][2] = "R"
            animacio3(2,"red")
            setTimeout(function(){tablazat.rows[3].cells[2].style.backgroundColor = "red"}, 400) 
            winChecking(3,2)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[3][2] = "Y"
            animacio3(2,"yellow")
            setTimeout(function(){tablazat.rows[3].cells[2].style.backgroundColor = "yellow"}, 400) 
            winChecking(3,2)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[2][2] == null && i == 3) {
         if (currentPlayer == "piros") {
            tablazat_matrix[2][2] = "R"
            animacio2(2,"red")
            setTimeout(function(){tablazat.rows[2].cells[2].style.backgroundColor = "red"}, 300) 
            winChecking(2,2)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[2][2] = "Y"
            animacio2(2,"yellow")
            setTimeout(function(){tablazat.rows[2].cells[2].style.backgroundColor = "yellow"}, 300) 
            winChecking(2,2)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[1][2] == null && i == 2) {
         if (currentPlayer == "piros") {
            tablazat_matrix[1][2] = "R"
            animacio1(2,"red")
            setTimeout(function(){tablazat.rows[1].cells[2].style.backgroundColor = "red"}, 200)
            winChecking(1,2)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[1][2] = "Y"
            animacio1(2,"yellow")
            setTimeout(function(){tablazat.rows[1].cells[2].style.backgroundColor = "yellow"}, 200)
            winChecking(1,2)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[0][2] == null && i == 1) {
         if (currentPlayer == "piros") {
            tablazat_matrix[0][2] = "R"
            tablazat.rows[0].cells[2].style.backgroundColor = "red"
            winChecking(0,2)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[0][2] = "Y"
            tablazat.rows[0].cells[2].style.backgroundColor = "yellow"
            winChecking(0,2)
            currentPlayer = "piros"
         }
   
      }
      else {
         i--
      }
   
      currentPlyerColor()
    }
 }

 function berak_oszlop3() {
    if(win == false && dontetlen == false){
      let i = 6
      if (tablazat_matrix[5][3] == null && i == 6) {
   
         if (currentPlayer == "piros") {
            tablazat_matrix[5][3] = "R"
            animacio5(3,"red")
            setTimeout(function(){tablazat.rows[5].cells[3].style.backgroundColor = "red"}, 600) 
            winChecking(5,3)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[5][3] = "Y"
            animacio5(3,"yellow")
            setTimeout(function(){tablazat.rows[5].cells[3].style.backgroundColor = "yellow"}, 600) 
            winChecking(5,3)
            currentPlayer = "piros"
         }
      }
      else {
         i--
      }
   
      if (tablazat_matrix[4][3] == null && i == 5) {
         if (currentPlayer == "piros") {
            tablazat_matrix[4][3] = "R"
            animacio4(3,"red")
            setTimeout(function(){tablazat.rows[4].cells[3].style.backgroundColor = "red"}, 500)
            winChecking(4,3)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[4][3] = "Y"
            animacio4(3,"yellow")
            setTimeout(function(){tablazat.rows[4].cells[3].style.backgroundColor = "yellow"}, 500)
            winChecking(4,3)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[3][3] == null && i == 4) {
         if (currentPlayer == "piros"){
            tablazat_matrix[3][3] = "R"
            animacio3(3,"red")
            setTimeout(function(){tablazat.rows[3].cells[3].style.backgroundColor = "red"}, 400)
            winChecking(3,3)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[3][3] = "Y"
            animacio3(3,"yellow")
            setTimeout(function(){tablazat.rows[3].cells[3].style.backgroundColor = "yellow"}, 400)
            winChecking(3,3)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[2][3] == null && i == 3) {
         if (currentPlayer == "piros") {
            tablazat_matrix[2][3] = "R"
            animacio2(3,"red")
            setTimeout(function(){tablazat.rows[2].cells[3].style.backgroundColor = "red"}, 300)
            winChecking(2,3)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[2][3] = "Y"
            animacio2(3,"yellow")
            setTimeout(function(){tablazat.rows[2].cells[3].style.backgroundColor = "yellow"}, 300)
            winChecking(2,3)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[1][3] == null && i == 2) {
         if (currentPlayer == "piros") {
            tablazat_matrix[1][3] = "R"
            animacio1(3,"red")
            setTimeout(function(){tablazat.rows[1].cells[3].style.backgroundColor = "red"}, 200)
            winChecking(1,3)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[1][3] = "Y"
            animacio1(3,"yellow")
            setTimeout(function(){tablazat.rows[1].cells[3].style.backgroundColor = "yellow"}, 200)
            winChecking(1,3)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[0][3] == null && i == 1) {
         if (currentPlayer == "piros") {
            tablazat_matrix[0][3] = "R"
            tablazat.rows[0].cells[3].style.backgroundColor = "red"
            winChecking(0,3)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[0][3] = "Y"
            tablazat.rows[0].cells[3].style.backgroundColor = "yellow"
            winChecking(0,3)
            currentPlayer = "piros"
         }
   
      }
      else {
         i--
      }
   
      currentPlyerColor()
    }
 }

 function berak_oszlop4() {
    if(win == false &&dontetlen == false){
      let i = 6
      if (tablazat_matrix[5][4] == null && i == 6) {
   
         if (currentPlayer == "piros") {
            tablazat_matrix[5][4] = "R"
            animacio5(4,"red")
            setTimeout(function(){tablazat.rows[5].cells[4].style.backgroundColor = "red"}, 600) 
            winChecking(5,4)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[5][4] = "Y"
            animacio5(4,"yellow")
            setTimeout(function(){tablazat.rows[5].cells[4].style.backgroundColor = "yellow"}, 600) 
            winChecking(5,4)
            currentPlayer = "piros"
         }
      }
      else {
         i--
      }
   
      if (tablazat_matrix[4][4] == null && i == 5) {
         if (currentPlayer == "piros") {
            tablazat_matrix[4][4] = "R"
            animacio4(4,"red")
            setTimeout(function(){tablazat.rows[4].cells[4].style.backgroundColor = "red"}, 500) 
            winChecking(4,4)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[4][4] = "Y"
            animacio4(4,"yellow")
            setTimeout(function(){tablazat.rows[4].cells[4].style.backgroundColor = "yellow"}, 500) 
            winChecking(4,4)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[3][4] == null && i == 4) {
         if (currentPlayer == "piros"){
            tablazat_matrix[3][4] = "R"
            animacio3(4,"red")
            setTimeout(function(){tablazat.rows[3].cells[4].style.backgroundColor = "red"}, 400) 
            winChecking(3,4)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[3][4] = "Y"
            animacio3(4,"yellow")
            setTimeout(function(){tablazat.rows[3].cells[4].style.backgroundColor = "yellow"}, 400) 
            winChecking(3,4)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[2][4] == null && i == 3) {
         if (currentPlayer == "piros") {
            tablazat_matrix[2][4] = "R"
            animacio2(4,"red")
            setTimeout(function(){tablazat.rows[2].cells[4].style.backgroundColor = "red"}, 300) 
            winChecking(2,4)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[2][4] = "Y"
            animacio2(4,"yellow")
            setTimeout(function(){tablazat.rows[2].cells[4].style.backgroundColor = "yellow"}, 300)
            winChecking(2,4)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[1][4] == null && i == 2) {
         if (currentPlayer == "piros") {
            tablazat_matrix[1][4] = "R"
            animacio1(4,"red")
            setTimeout(function(){tablazat.rows[1].cells[4].style.backgroundColor = "red"}, 200) 
            winChecking(1,4)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[1][4] = "Y"
            animacio1(4,"yellow")
            setTimeout(function(){tablazat.rows[1].cells[4].style.backgroundColor = "yellow"}, 200) 
            winChecking(1,4)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[0][4] == null && i == 1) {
         if (currentPlayer == "piros") {
            tablazat_matrix[0][4] = "R"
            tablazat.rows[0].cells[4].style.backgroundColor = "red"
            winChecking(0,4)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[0][4] = "Y"
            tablazat.rows[0].cells[4].style.backgroundColor = "yellow"
            winChecking(0,4)
            currentPlayer = "piros"
         }
   
      }
      else {
         i--
      }
   
      currentPlyerColor()
    }
 }

 function berak_oszlop5() {
    if(win == false && dontetlen == false){
      let i = 6
      if (tablazat_matrix[5][5] == null && i == 6) {
   
         if (currentPlayer == "piros") {
            tablazat_matrix[5][5] = "R"
            animacio5(5,"red")
            setTimeout(function(){tablazat.rows[5].cells[5].style.backgroundColor = "red"}, 600)
            winChecking(5,5)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[5][5] = "Y"
            animacio5(5,"yellow")
            setTimeout(function(){tablazat.rows[5].cells[5].style.backgroundColor = "yellow"}, 600)
            winChecking(5,5)
            currentPlayer = "piros"
         }
      }
      else {
         i--
      }
   
      if (tablazat_matrix[4][5] == null && i == 5) {
         if (currentPlayer == "piros") {
            tablazat_matrix[4][5] = "R"
            animacio4(5,"red")
            setTimeout(function(){tablazat.rows[4].cells[5].style.backgroundColor = "red"}, 500)
            winChecking(4,5)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[4][5] = "Y"
            animacio4(5,"yellow")
            setTimeout(function(){tablazat.rows[4].cells[5].style.backgroundColor = "yellow"}, 500)
            winChecking(4,5)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[3][5] == null && i == 4) {
         if (currentPlayer == "piros"){
            tablazat_matrix[3][5] = "R"
            animacio3(5,"red")
            setTimeout(function(){tablazat.rows[3].cells[5].style.backgroundColor = "red"}, 400)
            winChecking(3,5)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[3][5] = "Y"
            animacio3(5,"yellow")
            setTimeout(function(){tablazat.rows[3].cells[5].style.backgroundColor = "yellow"}, 400)
            winChecking(3,5)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[2][5] == null && i == 3) {
         if (currentPlayer == "piros") {
            tablazat_matrix[2][5] = "R"
            animacio2(5,"red")
            setTimeout(function(){tablazat.rows[2].cells[5].style.backgroundColor = "red"}, 300)
            winChecking(2,5)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[2][5] = "Y"
            animacio2(5,"yellow")
            setTimeout(function(){tablazat.rows[2].cells[5].style.backgroundColor = "yellow"}, 300)
            winChecking(2,5)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[1][5] == null && i == 2) {
         if (currentPlayer == "piros") {
            tablazat_matrix[1][5] = "R"
            animacio1(5,"red")
            setTimeout(function(){tablazat.rows[1].cells[5].style.backgroundColor = "red"}, 200)
            winChecking(1,5)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[1][5] = "Y"
            animacio1(5,"yellow")
            setTimeout(function(){tablazat.rows[1].cells[5].style.backgroundColor = "yellow"}, 200)
            winChecking(1,5)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[0][5] == null && i == 1) {
         if (currentPlayer == "piros") {
            tablazat_matrix[0][5] = "R"
            tablazat.rows[0].cells[5].style.backgroundColor = "red"
            winChecking(0,5)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[0][5] = "Y"
            tablazat.rows[0].cells[5].style.backgroundColor = "yellow"
            winChecking(0,5)
            currentPlayer = "piros"
         }
   
      }
      else {
         i--
      }
   
      currentPlyerColor() 
    }
 }

 function berak_oszlop6() {
    if(win == false && dontetlen == false){
      let i = 6
      if (tablazat_matrix[5][6] == null && i == 6) {
   
         if (currentPlayer == "piros") {
            tablazat_matrix[5][6] = "R"
            animacio5(6,"red")
            setTimeout(function(){tablazat.rows[5].cells[6].style.backgroundColor = "red"}, 600)
            winChecking(5,6)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[5][6] = "Y"
            animacio5(6,"yellow")
            setTimeout(function(){tablazat.rows[5].cells[6].style.backgroundColor = "yellow"}, 600)
            winChecking(5,6)
            currentPlayer = "piros"
         }
      }
      else {
         i--
      }
   
      if (tablazat_matrix[4][6] == null && i == 5) {
         if (currentPlayer == "piros") {
            tablazat_matrix[4][6] = "R"
            animacio4(6,"red")
            setTimeout(function(){tablazat.rows[4].cells[6].style.backgroundColor = "red"}, 500)
            winChecking(4,6)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[4][6] = "Y"
            animacio4(6,"yellow")
            setTimeout(function(){tablazat.rows[4].cells[6].style.backgroundColor = "yellow"}, 500)
            winChecking(4,6)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[3][6] == null && i == 4) {
         if (currentPlayer == "piros"){
            tablazat_matrix[3][6] = "R"
            animacio3(6,"red")
            setTimeout(function(){tablazat.rows[3].cells[6].style.backgroundColor = "red"}, 400)
            winChecking(3,6)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[3][6] = "Y"
            animacio3(6,"yellow")
            setTimeout(function(){tablazat.rows[3].cells[6].style.backgroundColor = "yellow"}, 400)
            winChecking(3,6)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[2][6] == null && i == 3) {
         if (currentPlayer == "piros") {
            tablazat_matrix[2][6] = "R"
            animacio2(6,"red")
            setTimeout(function(){tablazat.rows[2].cells[6].style.backgroundColor = "red"}, 300)
            winChecking(2,6)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[2][6] = "Y"
            animacio2(6,"yellow")
            setTimeout(function(){tablazat.rows[2].cells[6].style.backgroundColor = "yellow"}, 300)
            winChecking(2,6)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[1][6] == null && i == 2) {
         if (currentPlayer == "piros") {
            tablazat_matrix[1][6] = "R"
            animacio1(6,"red")
            setTimeout(function(){tablazat.rows[1].cells[6].style.backgroundColor = "red"}, 200)
            winChecking(1,6)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[1][6] = "Y"
            animacio1(6,"yellow")
            setTimeout(function(){tablazat.rows[1].cells[6].style.backgroundColor = "yellow"}, 200)
            winChecking(1,6)
            currentPlayer = "piros"
         }
         
      }
      else {
         i--
      }
   
      if (tablazat_matrix[0][6] == null && i == 1) {
         if (currentPlayer == "piros") {
            tablazat_matrix[0][6] = "R"
            tablazat.rows[0].cells[6].style.backgroundColor = "red"
            winChecking(0,6)
            currentPlayer = "sárga"
            if (SINGLE == true){
               dobasHelye.className = "visually-hidden"
               setTimeout(AIdrop, 3000)
            }
         }
         else {
            tablazat_matrix[0][6] = "Y"
            tablazat.rows[0].cells[6].style.backgroundColor = "yellow"
            winChecking(0,6)
            currentPlayer = "piros"
         }
   
      }
      else {
         i--
      }
   
      currentPlyerColor()
    }
 }
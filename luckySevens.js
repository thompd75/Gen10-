function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["numberFun"].elements.length; 
        loopCounter++) {
        if (document.forms["numberFun"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["numberFun"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 


function validateItems() {
    clearErrors();
    console.clear();
    var startBet = document.forms["numberFun"]["startBet"].value;
    
   if (startBet <= 0 || isNaN(startBet)) {
       alert("Starting bet must be a number larger than zero");
       document.forms["numberFun"]["startBet"]
          .parentElement.className = "form-group has-error"
       document.forms["numberFun"]["startBet"].focus();
       return false;
   }
   
   var gameMoney = startBet;
   var totalRolls = 0;
   var highestWon = 0;
   var rollsAtHighest = 0;
   
   
   while (gameMoney > 0) {
	   totalRolls++;
	   
	   var dieRoll =  Math.floor(Math.random() * 6) + 1;
	   var dieRoll2 =  Math.floor(Math.random() * 6) + 1;
   
			if (dieRoll+dieRoll2==7){
				gameMoney = gameMoney*1 + 4;
				
				if (gameMoney > highestWon){
				highestWon = highestWon + (gameMoney - highestWon);
				rollsAtHighest = totalRolls;
				}
			console.log(gameMoney);
			
			
			}
			else {
				gameMoney--;
				
				console.log("lost");
			}
			
			
			
			
				
				
				
   }
  
   

   
   
   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Recalculate";
   document.getElementById("start").innerText = Number(startBet);
   document.getElementById("tRolls").innerText = Number(totalRolls);
   document.getElementById("hWon").innerText = Number(highestWon);
   document.getElementById("rollsAH").innerText = Number(rollsAtHighest);

   
   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
   return false;
}











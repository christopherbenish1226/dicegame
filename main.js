 function rollDice() {




     var imgDice1 = document.getElementById("dice1Img");
     var imgDice2 = document.getElementById("dice2Img");

     var d1 = getRandomNumber();
     var d2 = getRandomNumber();


     imgDice1.src = "images/dice" + d1 + ".png";
     imgDice2.src = "images/dice" + d2 + ".png";

     var message = "";
     var sum = d1 + d2;


     if (d1 === 1 && d2 === 1) {
         message = "Snake Eyes";


     } else if (d1 === 2 && d2 === 2) {
         message = "duce";

     } else if (sum === 7) {
         message = "Lucky 7";
     } else {

         message = sum;
     }



     document.getElementById("status").innerHTML = message;
 }





 function getRandomNumber() {
     return Math.floor(Math.random() * 6) + 1;
 }
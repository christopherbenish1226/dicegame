 function rollDice() {




     var imgDice1 = document.getElementById("dice1Img");
     var imgDice2 = document.getElementById("dice2Img");

     var d1 = getRandomNumber();
     var d2 = getRandomNumber();


     imgDice1.src = "images/dice" + d1 + ".png";
     imgDice2.src = "images/dice" + d2 + ".png";


 }





 function getRandomNumber() {
     return Math.floor(Math.random() * 6) + 1;
 }
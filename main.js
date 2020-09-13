 function rollDice() {

     var die1 = document.getElementById("die1");
     var die2 = document.getElementById("die2");
     var status = document.getElementById("status");
     var imgDice1 = document.getElementById("dice1Img");
     var imgDice2 = document.getElementById("dice2Img");

     var d1 = getRandomNumber;
     var d2 = getRandomNumber;

     var diceTotal = d1 + d2;
     die1.innerHTML = d1;
     die2.innerHTML = d2;
     imgDice1.src = "images/dice" + d1 + ".png";
     imgDice2.src = "images/dice" + d2 + ".png";
     status.innerHTML = "You rolled " + diceTotal + ".";
     if (d1 == d2) {
         status.innerHTML += "Doubles! You get a free turn!";
     }
 }
 //0                    // 1             //2
 var statements = ["Jokes are funny", "Jokes are silly", "jokes are just stupid"];

 statements[2];

 function getRandomNumber() {
     return Math.floor(Math.random() * 6) + 1;
 }
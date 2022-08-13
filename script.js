'use strict'

//DICE 1 RANDOM CHANGES
var randomNumber1=Math.floor(Math.random()*7);
console.log(randomNumber1);

// var randomDice=`/dice${randomNumber1}.png`;
var randomSourceDiceImg1=`/images/dice${randomNumber1}.png`;

var dice1=document.querySelectorAll('.img')[0];
dice1.setAttribute("src",randomSourceDiceImg1);



//DICE 2 RANDOM CHANGES
var randomNumber2=Math.floor(Math.random()*7);
console.log(randomNumber2);

var randomSourceDiceImg2=`/images/dice${randomNumber2}.png`;
var dice2=document.querySelector('.img2');
dice2.setAttribute("src",randomSourceDiceImg2);



//CODE WHERE WINNER LOGIC,DRAW.
var player1=randomNumber1;
var player2=randomNumber2;

if(player1===player2){
    document.querySelector('h1').innerHTML="DRAW";
}else if(player1>player2){
    document.querySelector('h1').innerHTML="Player 1  WINNN.";
}else if(player1<player2){
    document.querySelector('h1').innerHTML="Player 2  WINNN.";
}
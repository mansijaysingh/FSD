'use strict';

//selecting elements
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');
const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll'); 
const btnHold=document.querySelector('.btn--hold');

let  scores;
let currentScore;
let activePlayer;
let playing;


function init(){
   score0El.textContent=0;
score1El.textContent=0;
current0El.textContent=0;
current1El.textContent=0;
player0El.classList.remove('player--winner');
player1El.classList.remove('player--winner');
player0El.classList.add('player--active');
player1El.classList.remove('player--active');
diceEl.classList.add('hidden');

  scores=[0,0];
  currentScore=0;
  activePlayer=0;
  playing=true;


document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');

document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
}
init();
// score0El.textContent=0;
// score1El.textContent=0;
// diceEl.classList.add('hidden');



const switchPlayer=function(){
  document.getElementById(`current--${activePlayer}`).textContent=0;
currentScore=0;
activePlayer=activePlayer===0?1:0;
player0El.classList.toggle('player--active');
player1El.classList.toggle('player--active');
}

//Rolling dice functinality
btnRoll.addEventListener('click',function(){
  if(playing){

      //1.generating a random dice roll
  const dice=Math.trunc(Math.random()*6)+1;
  // console.log(dice);

  //2.display dice
  diceEl.classList.remove('hidden');
  diceEl.src=`dice-${dice}.png`;

  //3.check for rolled 1: if true, switch to next player

  if(dice!==1){
   currentScore+=dice;
   document.getElementById(`current--${activePlayer}`).textContent=currentScore
  }else{
//switch to next player
switchPlayer();
  }
  }

})

//holding score
btnHold.addEventListener('click',function(){
if(playing){
  //Add current score to active player's score
  scores[activePlayer]+=currentScore;
document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];

//check if player's score is >=100
if(scores[activePlayer]>=100){
//finish the game
playing=false;
 diceEl.classList.add('hidden');
document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
}else{
switchPlayer();
}
}

});


//resetting the game
btnNew.addEventListener('click',init);
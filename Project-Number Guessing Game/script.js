let random=parseInt(Math.random()*100+1)
// console.log(random)

const button=document.querySelector('#button')
const userIn=document.querySelector('#guessIn')
const pre=document.querySelector('.preGuess')
const rem=document.querySelector('.remGuess')
const lowHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultPara')

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1;

let playGame=true;

if(playGame){
  button.addEventListener('click',(e)=>{
    e.preventDefault();
    const guess=parseInt(userIn.value);
    console.log(guess)
    validateGuess(guess);
  })
}

function validateGuess(guess){
if(isNaN(guess)){
  alert('Please enter a valid number');
}else if(guess<1 || guess>100){
  alert('Please enter a number between 1 and 100');
  userIn.value="";
}else{
  prevGuess.push(guess)
  if(numGuess>10){
    displayGuess(guess)
    displayMessage(`Game Over. Random number was ${random}`)
    endGame()
  }else{
    displayGuess(guess)
    checkGuess(guess)
  }
}
}

function checkGuess(guess){
  if(guess===random){
    displayMessage(`Well done, You guessed it right`)
    endGame()
  }else if(guess<random){
    displayMessage(`You guessed a lower value`)
  }else if(guess>random){
    displayMessage(`You guessed a higher value`)
  }
}

function displayGuess(guess){
  userIn.value=''
  pre.innerHTML += `${guess} `
  numGuess++;
  rem.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
lowHi.innerHTML=`<h3>${message}</h3>`
}

function endGame(){
  userIn.value='';
  userIn.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML=`<p id="newGame" class="pstyle">Play Again</p>`;
  startOver.appendChild(p);
  playGame=false;
  button.setAttribute("disabled", "disabled");
  newGame()
}

function newGame(){
const newGameButton=document.querySelector('#newGame');
newGameButton.addEventListener('click',(e)=>{
random=parseInt(Math.random()*100+1);
prevGuess=[];
numGuess=1;
pre.innerHTML="";
rem.innerHTML=`${11-numGuess}`;
userIn.removeAttribute('disabled');
startOver.removeChild(p);
displayMessage('');
playGame=true;
button.removeAttribute("disabled")
})
}
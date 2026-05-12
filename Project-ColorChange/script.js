const start=document.querySelector('.start')
const stop=document.querySelector('.stop')
const body=document.querySelector('body')
body.style.backgroundColor='yellow';
const randomColor=()=>{
  
  const hex='0123456789ABCDEF'
  let color='#'
  for(let i=0;i<6;i++){
    color +=hex[Math.floor(Math.random()*16)]
  }
  return color;
}
let intervalId;
const startChangingColor=()=>{
  if(!intervalId)
  {
    intervalId=setInterval(changeColor,1000)
  }
}

function changeColor(){
  body.style.backgroundColor=randomColor();
  body.style.color=randomColor();
}
const stopChangingColor=()=>{
  clearInterval(intervalId)
  intervalId=null;
}
start.addEventListener('click',startChangingColor);
  stop.addEventListener('click',stopChangingColor);
    
  


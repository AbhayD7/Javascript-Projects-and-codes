const boy=document.querySelector('#boy')
const girl=document.querySelector('#girl')
const result=document.querySelector('#result')
const h2=document.querySelector('h2')
const form=document.querySelector('form')


let lovePercent=(e)=>{
  e.preventDefault();
  let b=boy.value;
  let boyLength=parseInt(b.trim().length);
let g=girl.value;
let girlLength=parseInt(g.trim().length);

  const percent=Math.pow(boyLength*(parseInt(Math.random()*100+1))+girlLength*(parseInt(Math.random()*100+1)),3)%101;
  h2.textContent=`Your Love Percentage = ${percent}`
}
form.addEventListener('submit',lovePercent)

const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')
const app=document.querySelector('.app')

app.addEventListener("click",(e)=>{
  const child=e.target;
    body.style.backgroundColor=child.id;
 
})

// buttons.forEach((button)=>{
// console.log(button)
// button.addEventListener("click",(e)=>{
//   if(e.target.id==="grey"){
//     body.style.backgroundColor="grey"
//   };
//   if(e.target.id==="blue"){
//     body.style.backgroundColor="blue"
//   };
//   if(e.target.id==="yellow"){
//     body.style.backgroundColor="yellow"
//   };
//   if(e.target.id==="green"){
//     body.style.backgroundColor="green"
//   };
// })

// })


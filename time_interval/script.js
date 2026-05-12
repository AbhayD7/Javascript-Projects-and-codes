const start=document.querySelector('.start')
const stop=document.querySelector('.stop')
const h1=document.querySelector('h1')

const test=()=>{
  console.log("Abhay",Date.now())
  h1.innerHTML=`Code Reset`
}

start.addEventListener('click',()=>{
  const setInt=setInterval(test,2000)
  stop.addEventListener('click',()=>{
   clearInterval(setInt)
   h1.innerHTML=`Javascript Code`
  })
})


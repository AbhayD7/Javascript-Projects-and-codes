
const body=document.querySelector('body')

body.addEventListener('click', (e)=>{
  const circleElement=document.createElement('div')
  circleElement.classList.add('circle')
  const greet=['HI','Hello','whatsup','hey']
  const color=['blue','green','red','yellow','orange','purple','pink','brown','grey']
  circleElement.style.backgroundColor=color[Math.floor(Math.random()*color.length)]
  circleElement.textContent=`${greet[Math.floor(Math.random()*greet.length)]}`

  circleElement.style.top=`${e.clientY-25}px`
  circleElement.style.left=`${e.clientX-25}px`

  body.append(circleElement)

  setTimeout(()=>{
    circleElement.remove();
  }
    ,5000
  )
})
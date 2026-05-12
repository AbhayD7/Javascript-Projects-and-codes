 const result=document.querySelector('#result')

const countdown=()=>{
 const currDate=Date.now();
//  console.log(currDate)
 const iccDate=new Date(2027,9,1)
//  console.log(iccDate)
  let timer=iccDate-currDate;
 const day=Math.floor(timer/(1000*60*60*24));
 timer %= 1000*60*60*24;
 console.log(timer)
 const hour=Math.floor(timer/(1000*60*60));
 timer %= 1000*60*60;
 const minute=Math.floor(timer/(1000*60));
 timer %= 1000*60;
 const second=Math.floor(timer/(1000));
 timer %= 1000;
 result.textContent=`${day}days ${hour}hours ${minute}minutes ${second}seconds`
 }

 setInterval(countdown,1000)
 

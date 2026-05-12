const form=document.querySelector('form')
const income=document.querySelector('#income')
const h2=document.querySelector('h2')

const calculate=(e)=>{
  e.preventDefault();
  const amount=parseInt(income.value);


  let incomeTax=0;
  if(amount<1200000){
    incomeTax=0;
  }else if(amount>1200000  && amount<1600000){
     incomeTax=(amount-1200000)*15/100;
      }else if(amount>1600000 && amount<2000000){
    incomeTax=((1600000-1200000)*15/100)+((amount-1600000)*20/100)
    }else{
    incomeTax=((1600000-1200000)*15/100)+((2000000-1600000)*20/100)+((amount-2000000)*30/100)
    
  }
  h2.textContent=`Tax Amount: ${incomeTax}`
}

form.addEventListener('submit',calculate)
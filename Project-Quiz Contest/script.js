const form=document.querySelector('form')
const score=document.querySelector("#score")
const answerKey=document.querySelector(".answerKey")

const answer = {
  q1: "Delhi",
  q2: "Isaac Newton",
  q3: "Mars",
  q4: "Pacific Ocean",
  q5: "William Shakespeare",
  q6: "Water",
  q7: "France",
  q8: "7",
  q9: "2",
  q10: "Carbon Dioxide",
  q11: "Leonardo da Vinci",
  q12: "Cheetah",
  q13: "100°C",
  q14: "JavaScript",
  q15: "Tiger",
  q16: "Nile",
  q17: "Charles Babbage",
  q18: "Vitamin D",
  q19: "Yen",
  q20: "Heart"
};

form.addEventListener('submit',(e)=>{
  e.preventDefault();

  const data=new FormData(form);
  let finalScore=0;
  for(let [name,value] of data.entries()){
    // answerKey.textContent=`${name}`
    if(answer[name]===value)
    {
      finalScore++
    }
  }
  score.textContent=`Score = ${finalScore}`

  const ansKey = Object.entries(answer)
    .map(([key, value]) => `${key}: ${value}`)
    .join(`, `);

  // ✅ Show below score
  answerKey.textContent = ansKey

  
})
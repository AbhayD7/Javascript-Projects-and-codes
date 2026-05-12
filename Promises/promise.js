const promise=new Promise(function(resolve,reject){
 setTimeout(()=>{
  let error=false;
  if(!error){
    resolve({userName:"Abhay", password:"ABC"})
  }else{
    reject("Error:Something went wrong")
  }
 },2000)
})

promise.then((user)=>{
  console.log(user)
  return user.userName
}).then((username)=>{
  console.log(username)
}).catch((error)=>{
  console.log(error)
}).finally(()=>console.log("The promise is either resolved or rejected"))

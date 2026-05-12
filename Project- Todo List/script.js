const form=document.querySelector('form')
const todoItem=document.querySelector('#todo')
const todoDate=document.querySelector('#date') 
const table=document.querySelector('#todoTable')
const add=document.querySelector('#addTodo')

add.addEventListener('click',(e)=>{
  e.preventDefault();
let todo=todoItem.value.trim();
let date=todoDate.value;

if(todo==="" || date===""){
  alert("Please enter task and date" );
}else{
 const list=document.createElement('tr')
 const task=document.createElement('td')
 task.textContent=todo;

 const taskDate=document.createElement('td')
 taskDate.textContent=date;
  
 const taskDone=document.createElement('td')
 const taskButton=document.createElement('button')
 taskButton.textContent="Done";
 taskDone.append(taskButton);

const taskDelete=document.createElement('td')
 const deleteButton=document.createElement('button')
 deleteButton.textContent="Delete";
 deleteButton.setAttribute('id','deleteButton')
 taskDelete.style.fontSize="20px"
 taskDelete.append(deleteButton);

list.append(task,taskDate,taskDone,taskDelete)

table.append(list)

deleteButton.addEventListener('click',()=>{
  list.remove();
})

taskButton.addEventListener('click', ()=>{
  task.style.textDecoration="line-through"
  task.style.color="grey"
  taskDate.style.color="grey"
})
todoItem.value=""
todoDate.value=""

  // const todoData=todo.value;
  // todoItem.textContent=todoData;
  // const todoTime=date.value;
  // todoDate.textContent=todoTime;
}
})

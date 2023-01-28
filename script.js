//Selected all the target elements, input,button,output box
const taskInput=document.getElementById("task");
const addBtn=document.getElementById("add-btn");
const taskList=document.getElementById("task-list");

//on button,we are adding event listeners 
addBtn.addEventListener("click",(e)=>{
   e.preventDefault();
//if there is no data then dont take anything
   if(taskInput.value===''){
    return;
   }

   //Take a input from the user and add input the List 
   const task=taskInput.value;
//    console.log(task);
    taskInput.value='';

    const taskElem=document.createElement('div');
    taskElem.classList.add('box');
    taskElem.innerHTML=`<p>${task}</p>`;

    taskList.appendChild(taskElem);

})
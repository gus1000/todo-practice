console.clear();

const input = document.querySelector("input");
const addTask = document.querySelector(".add-task");
const pendingTask = document.querySelector(".pending-task");

const completedStatus = document.querySelector(".completed-status");


let tasks = [];

function createType(type, attribute= "" , text ) {
  const element = document.createElement(type);
  const textNode = createTextNode(text);
  element.appendChild(textNode);
  
  
  
  return  element
  
}



input.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    const task = e.target.value;
    console.log(task);
    tasks.push(task);
    
    // console.log(tasks);
    e.target.value = ``;
    
    const list =  createType("list");
    const editButton = createType("button" , "edit");
    const deleteButton = createType("button", "delete");

    list.innerText = task;
    
    
    
    addTask.appendChild(list)
    addTask.appendChild(editButton);
        addTask.appendChild(deleteButton);

    
    
  }
});

pendingTask.addEventListener

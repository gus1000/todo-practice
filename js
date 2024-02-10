console.clear();

const inputEntry = document.querySelector("input");
const addTask = document.querySelector(".add-task");
const pendingTask = document.querySelector(".pending-task");

const taskCompleted = document.querySelector(".task-completed");

let tasks = [];
let completedTasks = [];

function createType(type, text = " ") {
  const element = document.createElement(type);
  // console.log(element);
  element.innerText = text;

  return element;
}

function createTask(task) {
  const list = createType("li");
  const input = createType("input");
  input.setAttribute("type", "checkbox");

  // const editButton = createType("button", "edit");
  const deleteButton = createType("button", "delete");

  list.innerText = task;

  list.appendChild(input);

  // list.appendChild(editButton);
  list.appendChild(deleteButton);
  return list;
}

inputEntry.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    const task = e.target.value;
    tasks.push(task);
    // localStorage.setItem("tasks", task);
    e.target.value = ``;

    const li = createTask(task);
    console.log("li element", li);
    addTask.appendChild(li);
    const checkbox = li.querySelector(`input[type="checkbox"]`);

    // console.log(tasks);

    const nodeList = addTask.querySelectorAll("li input");

    // Creating an array of children from the the node List that was queried
    const nodeArray = Array.from(nodeList);
    // console.log(nodeArray)

    // nodeArray.forEach(function (li) {
    //   li.addEventListener("click", function (e) {
    //     // console.log("click");
    //   });
    // });

    //  deleteButton.addEventListener("click", function (e) {
    //   // console.log(e);
    //   addTask.removeChild(e.target);
    // });
    let isChecked = false;

    const deleteButton = li.querySelector("button");
    
    deleteButton.addEventListener("click", function (e) {
      if (li.closest(".task-completed")) {
        taskCompleted.removeChild(li);
      } else {
        addTask.removeChild(li);
      }
    });

  

    if (isChecked === false) {
      checkbox.addEventListener("click", function (e) {
        //       const listItem = checkbox.closest("li");
        //       const secondDeleteButton = document.querySelector(listItem);
        //       secondDeleteButton.addEventListener("click", function(e) {

        //         taskCompleted.removeChild(listItem)

        //       })

        if (isChecked === false) {
          isChecked = true;

          const index = nodeArray.indexOf(e.target);

          // console.log("hi", index);

          const splicedTask = tasks.splice(index, 1);

          const listItem = checkbox.closest("li");
          const listText = listItem.childNodes[0].textContent;
          completedTasks.push(listText);

          // console.log("listItem here", listItem.textContent);
          listItem.remove();
          //I use this logic to empty the array. Otherwise, the array does not empty.
          if (splicedTask.length === 0) {
            tasks.length = 0;
          }
          // console.log("spliced element",splicedTask);
          //             const index = nodeArray.indexOf(e.target);

          //             console.log("hi",index);

          // console.log(e.target.value , "kd");

          // console.log("checked", checkedTask);
          // console.log("completed", completedTasks);

          // console.log("checking tasks", tasks);

          taskCompleted.appendChild(listItem);
        } else {
          isChecked = false;

          //         const nodeList = addTask.querySelectorAll("li input");

          //         const nodeArray = Array.from(nodeList);

          const index = nodeArray.indexOf(e.target);

          // console.log("hi", index);

          const listItem = checkbox.closest("li");

          // // creating a delete button for the taks completed container
          // const secondDeleteButton = listItem.querySelector("button");
          // //Need to Fix this.

          // secondDeleteButton.addEventListener("click", function (e) {
          //   taskCompleted.removeChild(listItem);
          // });

          const listText = listItem.childNodes[0].textContent;
          // console.log(listText);

          listItem.remove();

          const splicedCompletedTasks = completedTasks.splice(index, 1);

          tasks.push(listText);

          // console.log("repopulating a task",tasks);
          // tasks.push(e.target.value);
          // console.log(e.target.value);
          // console.log("tasks array again", tasks);

          if (splicedCompletedTasks.length === 0) {
            completedTasks.length = 0;
          }

          //      deleteButton.addEventListener("click", function (e) {
          //   // console.log(e);
          //   addTask.removeChild(list);
          // });
          //  console.log("completed Tasks Array", completedTasks);
          // console.log("checking the  tasks array", tasks);
          addTask.appendChild(listItem);

          const deleteButton = li.querySelector("button");

          //         const deleteButton = listItem.querySelector("button");

          //         deleteButton.addEventListener("click", function (e) {
          //           console.log(taskCompleted);
          //           console.log(listItem);
          //           // taskCompleted.removeChild(listItem);
          //         });
        }
      });
    }
  }
    
});

// console.log(checkbox);
// console.log(addTask);

// console.log("hi",completedTasks);

// input.addEventListener("click", function () {
//   completedTasks.addEventListeners("click", function () {
//     const completedTask = e.target.value;
//   });
// });

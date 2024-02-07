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
  return { list, input, deleteButton };
}

inputEntry.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    const task = e.target.value;
    tasks.push(task);
    // localStorage.setItem("tasks", task);
    e.target.value = ``;

    const { list, input, deleteButton } = createTask(task);
    addTask.appendChild(list);
    const checkbox = list.querySelector(`input[type="checkbox"]`);

    console.log(tasks);

    const nodeList = addTask.querySelectorAll("li input");

     // Creating an array of children from the the node List that was queried
    const nodeArray = Array.from(nodeList);
    // console.log(nodeArray)

    // nodeArray.forEach(function (li) {
    //   li.addEventListener("click", function (e) {
    //     // console.log("click");
    //   });
    // });

    let isChecked = false;

    checkbox.addEventListener("click", function (e) {
      if (isChecked === false) {
        isChecked = true;

        const index = nodeArray.indexOf(e.target);

        // console.log("hi", index);

        tasks.splice(index, 1);
        //             const index = nodeArray.indexOf(e.target);

        //             console.log("hi",index);

        // console.log(e.target.value , "kd");

        // console.log("checked", checkedTask);
        // console.log("completed", completedTasks);

        const listItem = checkbox.closest("li");
        // console.log("listItem here", listItem.textContent);
        listItem.remove();
        
        console.log("checking tasks", tasks);

        taskCompleted.appendChild(listItem);
      } else {
        isChecked = false;

        //         const nodeList = addTask.querySelectorAll("li input");

        //         const nodeArray = Array.from(nodeList);

        const index = nodeArray.indexOf(e.target);

        // console.log("hi", index);

        const listItem = checkbox.closest("li");
        const listText =  listItem.childNodes[0].textContent;
        console.log(listText);

        listItem.remove();

        completedTasks.splice(index, 1);

        addTask.appendChild(listItem);
        
        tasks.push(listText);
        // console.log("repopulating a task",tasks);
        // tasks.push(e.target.value);
        // console.log(e.target.value);
        // console.log("tasks array again", tasks);
      }
    });

    //     deleteButton.addEventListener("click", function (e) {
    //       // console.log(e);
    //       addTask.removeChild(list);
    //     });
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

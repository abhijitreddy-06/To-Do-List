const done_button = document.querySelectorAll(".done_button");
const wrong_button = document.querySelectorAll(".wrong_button");
const task_list = document.querySelector(".task-list");
const task_box = document.querySelectorAll(".task-box");
const searchbar = document.querySelector(".searchbar");
const enterbutton = document.querySelector(".enter_button");

enterbutton.addEventListener("click", () => {
  addtaskname();
});

function addtaskname() {
  //get task from input bar
  const task_name = searchbar.value.trim();
  if (task_name == "") {
    alert("Add tasks");
  } else {
    //create name and task box
    const taskname = document.createElement("p");
    const taskbox = document.createElement("article");
    const wrongbutton = document.createElement("button");
    const donebutton = document.createElement("button");
    //add task into taskbox
    taskname.textContent = task_name;
    //add styling
    taskname.classList.add("task-name");
    //add buttons
    wrongbutton.textContent = `🗑️`;
    wrongbutton.classList.add("wrong_button");
    donebutton.textContent = `✔️`;
    donebutton.classList.add("done_button");
    //add task name to taskbox
    taskbox.appendChild(taskname);
    taskbox.appendChild(donebutton);
    taskbox.appendChild(wrongbutton);
    //add styling
    taskbox.classList.add("task-box");
    //add task box to task list
    task_list.appendChild(taskbox);
    searchbar.value = "";
    // Event listener to mark task as done
    donebutton.addEventListener("click", () => {
      taskname.style.textDecoration = "line-through";
    });
    // Event listener to remove task
    wrongbutton.addEventListener("click", () => {
      task_list.removeChild(taskbox);
    //   removeTask(task_name);
    });
  }
}

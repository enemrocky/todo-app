const outputMessage = document.querySelector("#message");
const deleteBtn = document.querySelector("#delete");
const editBtn = document.querySelector("#edit");
const inputGroup = document.querySelector("#input-group");
const input = document.querySelector("#input");
const addBtn = document.querySelector("#add-btn");
const addTaskBtn = document.querySelector("#add-task-btn");
const todoApp = document.querySelector("#todo-app");
const newTask = document.querySelector("#task");

addTaskBtn.addEventListener("click", function () {
  if ((inputGroup.style.display = "none")) {
    inputGroup.style.display = "flex";
  }
});

addBtn.addEventListener("click", function () {
    todoApp.append(newTask);
    outputMessage.innerText = input.value;
});

deleteBtn.addEventListener("click", function(){
    // deleteBtn.preventDefault();
    task.remove();
})
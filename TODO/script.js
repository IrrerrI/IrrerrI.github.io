const taskList = document.querySelector('#tasks')
const taskItems = document.querySelectorAll('.task')
const taskAdder = document.querySelector('.task-adder')
const taskInput = document.querySelector('#task-input')


deleteTask =(e) => {
    const parentDiv = e.target.closest('.task-container')
    parentDiv.innerHTML = null
}

const addTask = () => {
    taskInput.clear
    taskContainer = document.createElement('li')
    taskContainer.classList.add('task-container')
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add('checkbox')
    newTask = document.createElement('div')
    newTask.innerText = taskInput.value
    newTask.classList.add('task')
    deleteButton = document.createElement('button')
    deleteButton.innerText = 'delete'
    deleteButton.classList.add('delete')
    deleteButton.addEventListener('click', deleteTask)
    taskList.appendChild(taskContainer)
    taskContainer.appendChild(checkBox)
    taskContainer.appendChild(newTask)
    taskContainer.appendChild(deleteButton)
    taskInput.value = null
}

const addButton = document.createElement('button')
taskAdder.appendChild(addButton)
addButton.innerText = 'Add Task'

addButton.addEventListener('click', addTask)
taskInput.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
      addTask();
    }
  });



 let taskInput = document.getElementById('taskInput');
 let addTaskButton = document.getElementById('addTaskButton');
 let itemsList = document.getElementById('itemsList');

// add event listener to the button

addTaskButton.addEventListener('click', ()=>{
    let getInputValue = taskInput.value;
    if (getInputValue === ''){
        alert('Please enter a task!');
        return;
    }
// Add newToDo 

let newToDo = document.createElement('li');
newToDo.classList.add('item'); 
newToDo.innerHTML = `<div class="task-content">
              <input type="checkbox" class="checkbox" id="task1">
              <span>${getInputValue}</span>
            </div>
            <button class="deleteButton">
              <i class="fa-solid fa-trash"></i>
            </button>
`
itemsList.appendChild(newToDo);
// Clear input field after adding todo
taskInput.value = '';

// For delete button event listener
newToDo.querySelector('.deleteButton').addEventListener('click',()=>{
    newToDo.remove();
    alert('Task deleted!');
})


});

// If you want to toggle multiple classes at the same time, using .classList.toggle() won’t work efficiently because it only applies one class at a time. Instead, you should use .classList.add() and .classList.remove() to manage multiple classes.


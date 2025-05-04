 let taskInput = document.getElementById('taskInput');
 let addTaskButton = document.getElementById('addTaskButton');
 let itemsList = document.getElementById('itemsList');

// add event listener to the button

addTaskButton.addEventListener('click', ()=>{
    let getInputValue = taskInput.value;
    if (getInputValue === ''){
        alert('Please enter a task!');
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
})




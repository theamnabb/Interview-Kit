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
// Select the checkbox and span inside the newToDo
const checkbox = newToDo.querySelector('.checkbox');
const taskText = newToDo.querySelector('span');

// Toggle line-through and gray text when checkbox is clicked
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        taskText.style.textDecoration = 'line-through';
        taskText.style.color = 'gray';
    } else {
        taskText.style.textDecoration = 'none';
        taskText.style.color = '';
    }

});


});

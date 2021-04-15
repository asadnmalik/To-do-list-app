// To Do App

// Task 1: Implement the Add Function. 

const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const listCompleted = document.querySelector('.todos-completed')

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    //call the generateTemplate function to add the Todo to the list. 
    if (todo.length) {
        generateTemplate(todo);
        // remove the todo from the input field.
        addForm.reset();
    }
})

//Implement a function that creates an HTML template that we can add to the DOM. 


//adding new task to uncompleted task list
const generateTemplate = (todo) => {

    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <div class="icons">
            <i class="far fa-trash-alt delete px-1"></i>
            <i class="fas fa-check check px-1"></i>
        </div>
    </li>
    `;
    list.innerHTML += html;

}

//adding completed task to completed list
const generateTemplateCompleted = (todo) => {

    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    listCompleted.innerHTML += html;

}









// Task 2: Implement the Delete Function. 

//deleting uncompleted tasks
list.addEventListener('click', (e) => {

    if (e.target.classList.contains('delete')) {
        
        e.target.parentElement.parentElement.remove();
    }
})
//deleting completed tasks
listCompleted.addEventListener('click', (e) => {

    if (e.target.classList.contains('delete')) {
        
        e.target.parentElement.remove();
    }
})
















// Task 3: Implement the Searching & Filtering Function. 

const search = document.querySelector('.search input');

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filteredTodos(term);
})






// Implement a function that takes the term and matches with the todo item list. 

const filteredTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'))

    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered')) 
}

// Task 4: Add another "complete" icon right next to the delete icon. 
// Task 5: Implement a function that takes the "complete icon" and adds a click event listener


list.addEventListener('click', (e) => {

    if (e.target.classList.contains('check')) {

        
        const completedTask = e.target.parentElement.parentElement.firstElementChild.textContent
        e.target.parentElement.parentElement.remove();
        generateTemplateCompleted(completedTask)
    }
})
// Task 6: background color (dull), strikethrough, add to the completed task

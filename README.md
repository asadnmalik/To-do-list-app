# To-Do list Web Application
## Overview

An application to track your tasks or make a todo list. 


## Demo
![Demo Gif](https://s4.gifyu.com/images/ezgifcom-gif-maker-2.gif)

---

## Libraries
* [Bootstrap 4.6](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
* [Font Awesome](https://fontawesome.com/)

Just add this block of code inside your HTML file's \<head> tag to get started with bootstrap.

```HTML
<!-- Bootstrap -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<!-- Font Awesome -->
<script src="https://kit.fontawesome.com/02b5c565be.js" crossorigin="anonymous"></script>

```


---

## How it works?

### Layout
We will be using two empty lists,
* Uncompleted tasks list
* Completed tasks list

Other than that we're using two inputsm
* Search Bar
* Add a new task bar
```HTML
<div class="container">

    <header class="text-center text-light my-4">
        <h1 class="mb-4">ToDo List App</h1>

        <!-- Search Bar -->
        <form class="search">
            <input type="text" name="search" placeholder="Search tasks" class="form-control m-auto">
        </form>
    </header>


    <!-- Uncompleted Tasks -->
    <ul class="list-group todos mx-auto text-light">

        <!-- UNCOMPLETED TASKS LIST HERE -->

    </ul>


    <!-- Adding new tasks -->
    <form action="" class="add text-center my-4">
        <label class="text-light">Add a new todo...</label>
        <input type="text" name="add" placeholder="New task.." class="form-control m-auto">
    </form>



    <!-- COMPLETED TASK -->
    <h4 class="text-light text-center my-3">Completed Tasks</h4>
    <ul class="list-group todos-completed mx-auto text-light">

        <!-- COMPLETED TASKS LISTS HERE -->

    </ul>
</div>
```

### Styling

```CSS
body {
    background: #352f5b;
}

.container {
    max-width: 400px;
}

input[type=text],
input[type=text]:focus {
    color: #fff;
    border: none;
    background: rgba(0,0,0,0.2);
    max-width: 400px;
}

.todos li {
    background: #423a6f;
}
.todos-completed li{
    background: #289900;
}
.delete, .check {
    cursor: pointer;
}

/* Filtered */
.filtered {
    display: none !important;
}

```
### Implementation
First things first, query selecting all the elements required.

```Javascript
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const listCompleted = document.querySelector('.todos-completed')
```

In javascript we're using two functions,
* Generating new tasks
* Generating completed tasks
* Search function

```Javascript
// adding new task to uncompleted task list
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

// adding completed task to completed list
const generateTemplateCompleted = (todo) => {

    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    listCompleted.innerHTML += html;

}

const filteredTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'))

    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered')) 
}

```
### Adding new tasks.
Whenever enter is pressed on the new task input element, we will execute this code by calling the generateTemplate function which will add a list to the uncompleted tasks.

``` Javascript
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

```
### Deleting or Moving 

Now in order to delete tasks, we will check whether the mouse click has clicked on the 'delete' class which is the trashbin icon. If its true it will remove its parent element which is the \<li> tag.

``` Javascript
// deleting uncompleted tasks
list.addEventListener('click', (e) => {

    if (e.target.classList.contains('delete')) {
        
        e.target.parentElement.parentElement.remove();
    }
})
// deleting completed tasks
listCompleted.addEventListener('click', (e) => {

    if (e.target.classList.contains('delete')) {
        
        e.target.parentElement.remove();
    }
})

```
Similarly we will check if the mouse button is clicked on the 'check' class then it will add the task to the completed task list.

```Javascript
list.addEventListener('click', (e) => {

    if (e.target.classList.contains('check')) {

        
        const completedTask = e.target.parentElement.parentElement.firstElementChild.textContent
        e.target.parentElement.parentElement.remove();
        generateTemplateCompleted(completedTask)
    }
})


```


### Searching
We will take content inside the search bar, convert it all into lower case and filter it with our tasks list using filterToDos function shown before.

```Javascript
const search = document.querySelector('.search input');

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filteredTodos(term);
})

```


---
## Source Code
You can download the source code from [here.](https://codeload.github.com/asadnmalik/calculator/zip/refs/heads/main)

---
## Built With

* HTML
* CSS
* Bootstrap
* Javascript

---

## Copyright, Author
*Copyright 2021*, Asad Naveed Malik, *All rights reserved.*


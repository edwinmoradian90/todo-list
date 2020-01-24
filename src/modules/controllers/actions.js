import { create, index, destroy, show, update } from './todo';
import { setStorage, getStorage } from './storage';
import popup from '../views/popup';

    const showInput = function() {
        const addTodoButton = document.querySelector('.add_todo_button');
        const addTodoInputWrapper = document.querySelector('.add_todo_input_wrapper');
        document.querySelector('.add_todo_input').focus();
        addTodoButton.classList.add('display_none');
        addTodoInputWrapper.classList.remove('display_none');
        console.log('clicked');
    };

    const hideInput = function() {
        const addTodoButton = document.querySelector('.add_todo_button');
        const addTodoInputWrapper = document.querySelector('.add_todo_input_wrapper');
        addTodoInputWrapper.classList.add('display_none');
        addTodoButton.classList.remove('display_none');
    }

    const resetInput = function() {
        const addTodoInput = document.querySelector('.add_todo_input');
        addTodoInput.value = '';
    }

    const createTodo = function() {
        const addTodoInput = document.querySelector('.add_todo_input');
        const title = addTodoInput.value
        create(title, 'Add more details');
    }

    const deleteTodo = function(todo) {
        getStorage();
        destroy(todo);
        setStorage();
    }

    const updateTodo = function(todo_id) {
        getStorage();
        const newInputs = document.querySelectorAll('.task_info'); 
        update(todo_id, newInputs);
        console.log(newInputs[3].options)
        setStorage();

    }

    const displayIndex = function() {
        let todoList = document.querySelector('.todo_list');
        const todos = index();
        if(todos !== null) {
            todos.forEach((todo, i) => {
                const todo_item = `
                    <li id=${i} class="todo_item">
                        <h3>
                            ${todo.title}
                        </h3>
                        <span id=${i} class="delete_todo_item">
                            delete
                        </span>
                        <hr />
                    </li>
                `
                todoList.innerHTML += todo_item;
            });
        };
    };

    const displayTodo = function(todo_id) {
        const projectsList = document.querySelector('.projects_list'),
            selected = show(todo_id),
            showTodo = popup(selected, todo_id);
        projectsList.innerHTML = showTodo;
        console.log(selected)
        document.querySelector('.task_priority').value = selected.priority;
    };

    const closeDisplay = function() {
      clearProjects();
    }

    const clearIndex = function() {
        let todoList = document.querySelector('.todo_list');
        while(todoList.firstChild) {
            todoList.removeChild(todoList.firstChild);
        };
    };

    const clearProjects = function() {
        let projectsList = document.querySelector('.projects_list');
        while(projectsList.firstChild) {
            projectsList.removeChild(projectsList.firstChild);
        };
    };

export { 
    showInput, 
    hideInput, 
    createTodo, 
    displayIndex, 
    clearIndex,
    deleteTodo,
    resetInput,
    displayTodo,
    clearProjects,
    closeDisplay,
    updateTodo,
};
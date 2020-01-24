import { create, index, destroy } from './todo';
import { setStorage, getStorage } from './storage';

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

    const displayIndex = function() {
        let todoList = document.querySelector('.todo_list');
        const todos = index();
        console.log(todos)
        if(todos !== null) {
            todos.forEach((todo, i) => {
                const todo_item = `
                    <li id=${i} class=todo_item>
                        <h3>
                            ${todo.title}
                        </h3>
                        <span id=${i} class=delete_todo_item>
                            delete
                        </span>
                        <hr />
                    </li>
                `
                todoList.innerHTML += todo_item;
            });
        };
    };

    const clearIndex = function() {
        let todoList = document.querySelector('.todo_list');
        while(todoList.firstChild) {
            todoList.removeChild(todoList.firstChild);
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
};
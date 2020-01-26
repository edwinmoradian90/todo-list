import { create, index, destroy, show, update } from './todoController';
import { setStorage, getStorage, setProjectStorage } from './storageController';
import popup from '../views/popupView';
import displayTasks from '../views/todosView';
import { getProjectTasks, destroyProjectTask } from './projectActions';
import { getProjectState, showTask } from './projectController';

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
    };

    const resetInput = function() {
        const addTodoInput = document.querySelector('.add_todo_input');
        addTodoInput.value = '';
    };

    const createTodo = function() {
        const addTodoInput = document.querySelector('.add_todo_input');
        const title = addTodoInput.value
        create(title, 'Add more details');
    };

    const deleteTodo = function(todo_id) {
        const projectState = getProjectState();
        getStorage();
        if(projectState.projectOpened) {
            destroyProjectTask(todo_id);
            setProjectStorage();
        } else {
            destroy(todo_id);
            setStorage();
        }
    };

    const updateTodo = function(todo_id) {
        getStorage();
        const newInputs = document.querySelectorAll('.task_info');
        update(todo_id, newInputs);
        console.log(newInputs[3].options)
        setStorage();
    };

    const displayIndex = function() {
        const projectState = getProjectState();
        const todos = projectState.projectOpened 
            ? getProjectTasks()
            : index(); 

        displayTasks(todos);
    };

    const displayTodo = function(todo_id) {
        const projectState = getProjectState();
        const projectsList = document.querySelector('.projects_list'),
            selected = projectState.projectOpened 
                ? showTask(todo_id)
                : show(todo_id),
            showTodo = popup(selected, todo_id);
        projectsList.innerHTML = showTodo;
        console.log(selected , 'selected')
        document.querySelector('.task_priority').value = selected.priority;
    };

    const closeDisplay = function() {
      clearProjects();
    };

    const clearIndex = function() {
        let todoList = document.querySelector('.todo_list');
        while(todoList.firstChild) {
            todoList.removeChild(todoList.firstChild);
        };
    };

    const createProject = function() {

    }

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
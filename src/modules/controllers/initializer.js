import loadMain from '../views/loadMain';
import { 
    showInput, 
    hideInput, 
    createTodo, 
    displayIndex, 
    deleteTodo, 
    displayTodo, 
    closeDisplay,
    clearProjects,
    updateTodo 
} from './todoActions';
import render from './render';
import { createProject, displayProjects } from './projectActions';

const initialize = function() {
    loadMain();
    displayIndex();
    displayProjects();
    console.log('listening')
    document.addEventListener('click', (e) => {
        let click = e.target;
        if(click.matches('.add_todo_button')) {
            console.log('showing input');
            showInput();
        } else
        if(click.matches('.cancel_todo_button')) {
            console.log('hiding input');
            hideInput();
        } else 
        if(click.matches('.create_todo_button')) {
            createTodo();
            render();
            hideInput();
            console.log('todo created');
        } else 
        if(click.matches('.delete_todo_item')) {
            console.log('deleted todo', click.id);
            deleteTodo(click.id);
            render();
        } else
        if(click.matches('.todo_item')) {
            console.log('showing todo', click.id);
            clearProjects();
            displayTodo(click.id);
        } else
        if(click.matches('.close_popup')) {
            closeDisplay();
        } else
        if(click.matches('.popup_delete_button')) {
            deleteTodo(click.id);
            closeDisplay();
            render();
        } else
        if(click.matches('.popup_update_button')) {
            updateTodo(click.id);
            closeDisplay();
            render();
        } else
        if(click.matches('.create_project_button')) {
            createProject();
            render();
            hideInput();
            console.log('project created');
        }
    });
};


export { initialize };

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
    updateTodo, 
    clearIndex
} from './todoActions';
import render from './render';
import { createProject, displayProjects, selectProject, setProjectMode, highlightSelected, deleteSelectedProject } from './projectActions';
import { setProjectState } from './projectController';

const initialize = function() {
    loadMain();
    render();
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
            displayProjects();
        } else
        if(click.matches('.close_popup')) {
            closeDisplay();
            render();
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
        } else 
        if(click.matches('.project_item_container')) {
            clearIndex();
            setProjectMode(click.id);
            selectProject(click.id);
            highlightSelected(click.id);
            render();
            console.log(click.id)
        } else
        if(click.matches('.project_card_delete')) {
            setProjectState(false);
            deleteSelectedProject();
            selectProject(click.id);
            render();
        }
    });
};


export { initialize };

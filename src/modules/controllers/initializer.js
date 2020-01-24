import loadMain from '../views/loadMain';
import { showInput, hideInput, createTodo, displayIndex, deleteTodo } from './actions';
import render from './render';

const initialize = function() {
    loadMain();
    displayIndex();
    console.log('listening')
    document.addEventListener('click', (e) => {
        if(e.target.matches('.add_todo_button')) {
            showInput();
        } else
        if(e.target.matches('.cancel_todo_button')) {
            hideInput();
        } else 
        if(e.target.matches('.create_todo_button')) {
            createTodo();
            render();
            hideInput();
            console.log('todo created');
        } else 
        if(e.target.matches('.delete_todo_item')) {
            console.log('deleted todo', e.target.id);
            deleteTodo(e.target.id);
            render();
        }
    });
};


export { initialize };

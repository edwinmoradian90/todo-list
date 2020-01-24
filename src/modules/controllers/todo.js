import { getStorage, setStorage } from './storage';

let todos = getStorage();

const todoFactory = (title, description, due_date, priority) => {
    return {
        title,
        description,
        due_date,
        priority,
    };
};

const create = function(title, description) {
    const todo = todoFactory(title, description, 'anytime', 'low');
    todos.push(todo);
    setStorage();
};

const destroy = function(todo_id) {
    todos.splice(todo_id, 1);
}

const index = function() {
    return todos;
}

const show = function(todo_id) {
    const selected = todos[todo_id];
    return selected;
}

const update = function(todo_id, newTodo) {
    const selected = todos[todo_id];
    selected.title = newTodo[0].value;
    selected.description = newTodo[1].value;
    selected.due_date = newTodo[2].value;
    selected.priority = newTodo[3].value;
    console.log(todos[todo_id], selected.title, todo_id, 'selected');
}

export { create, destroy, index, show, update };


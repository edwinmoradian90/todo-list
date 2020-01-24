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
    console.log(todos)
    setStorage();
};

const destroy = function(todo) {
    todos.splice(todo, 1);
}

const index = function() {
    return todos;
}

export { create, destroy, index };


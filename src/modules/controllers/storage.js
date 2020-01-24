import { index } from './todo';

const setStorage = function() {
    const todos = index();
    localStorage.setItem('todos', JSON.stringify(todos));
};

const getStorage = function() {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export { setStorage, getStorage };
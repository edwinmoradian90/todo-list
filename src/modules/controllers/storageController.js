import { index } from './todoController';
import { projectsIndex } from './projectController';

const setStorage = function() {
    const todos = index();
    localStorage.setItem('todos', JSON.stringify(todos));
};

var setProjectStorage = function() {
    const projects = projectsIndex();
    console.log(projects);
    localStorage.setItem('projects', JSON.stringify(projects));
}

const getStorage = function() {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

var getProjectStorage = function() {
    return JSON.parse(localStorage.getItem('projects')) || [];
};

export { 
    setStorage, 
    getStorage, 
    setProjectStorage, 
    getProjectStorage, 
};
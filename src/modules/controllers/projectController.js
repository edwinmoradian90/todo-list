import { getProjectStorage, setProjectStorage } from "./storageController";

let projects = JSON.parse(localStorage.getItem('projects')) || [];

let state = {
    projectOpened: false,
    projectId: ''
};

const projectFactory = function(title, tasks=[]) {
    return { title, tasks };
};

const create = function(title) {
    const newProject = projectFactory(title)
    projects.push(newProject);
    setProjectStorage();
    console.log(projects)
};

const deleteProject = function() {
    projects.splice(state.projectId, 1);
}

const projectsIndex = function() {
    console.log(projects)
    return projects;
};

const getProjectState = function() {
    return state;
};

const setProjectState = function(bool, id='') {
    state = {
        projectOpened: bool,
        projectId: id,
    };
};

const deleteTask = function(task_id) {
    projects[state.projectId].tasks.splice(task_id, 1);
};

const showTask = function(task_id) {
    return projects[state.projectId].tasks[task_id];
};

console.log(state.projectOpened)
export {
    create,
    deleteProject, 
    projectsIndex, 
    getProjectState, 
    setProjectState, 
    deleteTask,
    showTask,
};
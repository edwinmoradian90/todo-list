import { create, projectsIndex } from "./projectController";
import { getStorage, setStorage } from "./storageController";
import { displayProjectsIndex } from "../views/projectsView";

const createProject = function() {
    const projectInput = document.querySelector('.add_todo_input');
    const title = projectInput.value;
    create(title);
};

const clearProjects = function() {
    let projectsList = document.querySelector('.projects_list');
    while(projectsList.firstChild) {
        projectsList.removeChild(projectsList.firstChild);
    };
};

const displayProjects = function() {
    const projects = projectsIndex();
    console.log(projects)
    displayProjectsIndex(projects);
};

const addTask = function() {
};

export { createProject, clearProjects, displayProjects };

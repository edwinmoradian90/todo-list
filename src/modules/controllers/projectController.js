import { getProjectStorage, setProjectStorage } from "./storageController";

let projects = JSON.parse(localStorage.getItem('projects')) || [];

const projectFactory = function(title, tasks=[]) {
    return { title, tasks };
};

const create = function(title) {
    const newProject = projectFactory(title)
    projects.push(newProject);
    setProjectStorage();
    console.log(projects)
};

const projectsIndex = function() {
    console.log(projects)
    return projects;
};

export { create, projectsIndex };
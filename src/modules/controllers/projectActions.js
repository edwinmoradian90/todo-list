import {
  create,
  projectsIndex,
  setProjectState,
  getProjectState,
  deleteTask,
  deleteProject
} from "./projectController";
import { getStorage, setStorage, setProjectStorage } from "./storageController";
import { displayProjectsIndex } from "../views/projectsView";

const createProject = function() {
  const projectInput = document.querySelector(".add_todo_input");
  const title = projectInput.value;
  create(title);
};

const deleteSelectedProject = function() {
  deleteProject();
  setProjectStorage();
};

const clearProjects = function() {
  let projectsList = document.querySelector(".projects_list");
  while (projectsList.firstChild) {
    projectsList.removeChild(projectsList.firstChild);
  }
};

const displayProjects = function() {
  const projects = projectsIndex();
  displayProjectsIndex(projects);
};

const selectProject = function(project_id) {
  const listTitle = document.querySelector(".list_title");
  const project = getProjectState();
  const projects = projectsIndex();
  let projectTitle = "";
  if (project.projectOpened) {
    projectTitle = "Project: " + projects[project_id].title;
  } else {
    projectTitle = "All";
  }
  listTitle.innerText = projectTitle;
};

// Highlists selected project
const highlightSelected = function(project_id) {
  const projectState = getProjectState();
  const projects = document.getElementById(`${project_id}`);
  projects.style.border = "2px solid black";
};

// Allows for created tasks to be saved in project
const setProjectMode = function(project_id) {
  const state = getProjectState();
  if (state.projectId === project_id) {
    setProjectState(!state.projectOpened, project_id);
  } else {
    setProjectState(true, project_id);
  }
};

const getProjectTasks = function() {
  const projectState = getProjectState();
  const projects = projectsIndex();
  return projects[projectState.projectId].tasks;
};

const destroyProjectTask = function(task_id) {
  deleteTask(task_id);
};

export {
  createProject,
  deleteSelectedProject,
  clearProjects,
  displayProjects,
  selectProject,
  setProjectMode,
  getProjectTasks,
  destroyProjectTask,
  highlightSelected
};

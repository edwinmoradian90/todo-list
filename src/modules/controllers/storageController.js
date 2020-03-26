import { index } from './todoController';
import { projectsIndex } from './projectController';

const setStorage = function () {
  const todos = index();
  localStorage.setItem('todos', JSON.stringify(todos));
};

const setProjectStorage = function () {
  const projects = projectsIndex();
  localStorage.setItem('projects', JSON.stringify(projects));
};

const getStorage = function () {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

const getProjectStorage = function () {
  return JSON.parse(localStorage.getItem('projects')) || [];
};

export {
  setStorage, getStorage, setProjectStorage, getProjectStorage,
};

import { getStorage, setStorage, setProjectStorage } from "./storageController";
import { projectsIndex, getProjectState } from "./projectController";
import { getProjectTasks } from "./projectActions";

let todos = getStorage();

const todoFactory = (title, description, due_date, priority) => {
  return {
    title,
    description,
    due_date,
    priority
  };
};

const create = function(title, description) {
  const todo = todoFactory(title, description, "anytime", "low");
  const projects = projectsIndex();
  const state = getProjectState();

  // Checks if task should be pushed to
  // project or general.
  if (state.projectOpened) {
    projects[state.projectId].tasks.push(todo);
    setProjectStorage();
  } else {
    todos.push(todo);
    setStorage();
  }
};

const destroy = function(todo_id) {
  todos.splice(todo_id, 1);
};

const index = function() {
  return todos;
};

const show = function(todo_id) {
  const selected = todos[todo_id];
  return selected;
};

const update = function(todo_id, newTodo) {
  const projectState = getProjectState();
  let selected = "";
  if (projectState.projectOpened) {
    const projects = getProjectTasks();
    selected = projects[todo_id];
  } else {
    selected = todos[todo_id];
  }

  selected.title = newTodo[0].value;
  selected.description = newTodo[1].value;
  selected.due_date = newTodo[2].value;
  selected.priority = newTodo[3].value;
};

export { create, destroy, index, show, update };

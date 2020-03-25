/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_controllers_initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/controllers/initializer */ \"./src/modules/controllers/initializer.js\");\n\n\nconsole.log('initializing');\nObject(_modules_controllers_initializer__WEBPACK_IMPORTED_MODULE_0__[\"initialize\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/controllers/initializer.js":
/*!************************************************!*\
  !*** ./src/modules/controllers/initializer.js ***!
  \************************************************/
/*! exports provided: initialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialize\", function() { return initialize; });\n/* harmony import */ var _views_loadMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/loadMain */ \"./src/modules/views/loadMain.js\");\n/* harmony import */ var _todoActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoActions */ \"./src/modules/controllers/todoActions.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/modules/controllers/render.js\");\n/* harmony import */ var _projectActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectActions */ \"./src/modules/controllers/projectActions.js\");\n/* harmony import */ var _projectController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectController */ \"./src/modules/controllers/projectController.js\");\n\n\n\n\n\n\nconst initialize = function() {\n  Object(_views_loadMain__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  document.addEventListener(\"click\", e => {\n    let click = e.target;\n    if (click.matches(\".add_todo_button\")) {\n      Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"showInput\"])();\n    } else if (click.matches(\".cancel_todo_button\")) {\n      Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"hideInput\"])();\n    } else if (click.matches(\".create_todo_button\")) {\n      Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"createTodo\"])();\n      Object(_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n      Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"hideInput\"])();\n    } else if (click.matches(\".delete_todo_item\")) {\n      Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"deleteTodo\"])(click.id);\n      Object(_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    } else if (click.matches(\".todo_item\")) {\n      Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"clearProjects\"])();\n      Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"displayTodo\"])(click.id);\n      Object(_projectActions__WEBPACK_IMPORTED_MODULE_3__[\"displayProjects\"])();\n    } else if (click.matches(\".close_popup\")) {\n      Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"closeDisplay\"])();\n      Object(_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    } else if (click.matches(\".popup_delete_button\")) {\n      Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"deleteTodo\"])(click.id);\n      Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"closeDisplay\"])();\n      Object(_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    } else if (click.matches(\".popup_update_button\")) {\n      Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"updateTodo\"])(click.id);\n      Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"closeDisplay\"])();\n      Object(_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    } else if (click.matches(\".create_project_button\")) {\n      Object(_projectActions__WEBPACK_IMPORTED_MODULE_3__[\"createProject\"])();\n      Object(_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n      Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"hideInput\"])();\n    } else if (click.matches(\".project_item_container\")) {\n      Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"clearIndex\"])();\n      Object(_projectActions__WEBPACK_IMPORTED_MODULE_3__[\"setProjectMode\"])(click.id);\n      Object(_projectActions__WEBPACK_IMPORTED_MODULE_3__[\"selectProject\"])(click.id);\n      Object(_projectActions__WEBPACK_IMPORTED_MODULE_3__[\"highlightSelected\"])(click.id);\n      Object(_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    } else if (click.matches(\".project_card_delete\")) {\n      Object(_projectController__WEBPACK_IMPORTED_MODULE_4__[\"setProjectState\"])(false);\n      Object(_projectActions__WEBPACK_IMPORTED_MODULE_3__[\"deleteSelectedProject\"])();\n      Object(_projectActions__WEBPACK_IMPORTED_MODULE_3__[\"selectProject\"])(click.id);\n      Object(_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    }\n  });\n};\n\n\n\n\n//# sourceURL=webpack:///./src/modules/controllers/initializer.js?");

/***/ }),

/***/ "./src/modules/controllers/projectActions.js":
/*!***************************************************!*\
  !*** ./src/modules/controllers/projectActions.js ***!
  \***************************************************/
/*! exports provided: createProject, deleteSelectedProject, clearProjects, displayProjects, selectProject, setProjectMode, getProjectTasks, destroyProjectTask, highlightSelected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProject\", function() { return createProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteSelectedProject\", function() { return deleteSelectedProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearProjects\", function() { return clearProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayProjects\", function() { return displayProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectProject\", function() { return selectProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setProjectMode\", function() { return setProjectMode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProjectTasks\", function() { return getProjectTasks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"destroyProjectTask\", function() { return destroyProjectTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"highlightSelected\", function() { return highlightSelected; });\n/* harmony import */ var _projectController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectController */ \"./src/modules/controllers/projectController.js\");\n/* harmony import */ var _storageController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageController */ \"./src/modules/controllers/storageController.js\");\n/* harmony import */ var _views_projectsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/projectsView */ \"./src/modules/views/projectsView.js\");\n\n\n\n\nconst createProject = function() {\n  const projectInput = document.querySelector(\".add_todo_input\");\n  const title = projectInput.value;\n  Object(_projectController__WEBPACK_IMPORTED_MODULE_0__[\"create\"])(title);\n};\n\nconst deleteSelectedProject = function() {\n  Object(_projectController__WEBPACK_IMPORTED_MODULE_0__[\"deleteProject\"])();\n  Object(_storageController__WEBPACK_IMPORTED_MODULE_1__[\"setProjectStorage\"])();\n};\n\nconst clearProjects = function() {\n  let projectsList = document.querySelector(\".projects_list\");\n  while (projectsList.firstChild) {\n    projectsList.removeChild(projectsList.firstChild);\n  }\n};\n\nconst displayProjects = function() {\n  const projects = Object(_projectController__WEBPACK_IMPORTED_MODULE_0__[\"projectsIndex\"])();\n  Object(_views_projectsView__WEBPACK_IMPORTED_MODULE_2__[\"displayProjectsIndex\"])(projects);\n};\n\nconst selectProject = function(project_id) {\n  const listTitle = document.querySelector(\".list_title\");\n  const project = Object(_projectController__WEBPACK_IMPORTED_MODULE_0__[\"getProjectState\"])();\n  const projects = Object(_projectController__WEBPACK_IMPORTED_MODULE_0__[\"projectsIndex\"])();\n  let projectTitle = \"\";\n  if (project.projectOpened) {\n    projectTitle = \"Project: \" + projects[project_id].title;\n  } else {\n    projectTitle = \"All\";\n  }\n  listTitle.innerText = projectTitle;\n};\n\n// Highlists selected project\nconst highlightSelected = function(project_id) {\n  const projectState = Object(_projectController__WEBPACK_IMPORTED_MODULE_0__[\"getProjectState\"])();\n  const projects = document.getElementById(`${project_id}`);\n  projects.style.border = \"2px solid black\";\n};\n\n// Allows for created tasks to be saved in project\nconst setProjectMode = function(project_id) {\n  const state = Object(_projectController__WEBPACK_IMPORTED_MODULE_0__[\"getProjectState\"])();\n  if (state.projectId === project_id) {\n    Object(_projectController__WEBPACK_IMPORTED_MODULE_0__[\"setProjectState\"])(!state.projectOpened, project_id);\n  } else {\n    Object(_projectController__WEBPACK_IMPORTED_MODULE_0__[\"setProjectState\"])(true, project_id);\n  }\n};\n\nconst getProjectTasks = function() {\n  const projectState = Object(_projectController__WEBPACK_IMPORTED_MODULE_0__[\"getProjectState\"])();\n  const projects = Object(_projectController__WEBPACK_IMPORTED_MODULE_0__[\"projectsIndex\"])();\n  return projects[projectState.projectId].tasks;\n};\n\nconst destroyProjectTask = function(task_id) {\n  Object(_projectController__WEBPACK_IMPORTED_MODULE_0__[\"deleteTask\"])(task_id);\n};\n\n\n\n\n//# sourceURL=webpack:///./src/modules/controllers/projectActions.js?");

/***/ }),

/***/ "./src/modules/controllers/projectController.js":
/*!******************************************************!*\
  !*** ./src/modules/controllers/projectController.js ***!
  \******************************************************/
/*! exports provided: create, deleteProject, projectsIndex, getProjectState, setProjectState, deleteTask, showTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteProject\", function() { return deleteProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectsIndex\", function() { return projectsIndex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProjectState\", function() { return getProjectState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setProjectState\", function() { return setProjectState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteTask\", function() { return deleteTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showTask\", function() { return showTask; });\n/* harmony import */ var _storageController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storageController */ \"./src/modules/controllers/storageController.js\");\n\n\nlet projects = JSON.parse(localStorage.getItem(\"projects\")) || [];\n\nlet state = {\n  projectOpened: false,\n  projectId: \"\"\n};\n\nconst projectFactory = function(title, tasks = []) {\n  return { title, tasks };\n};\n\nconst create = function(title) {\n  const newProject = projectFactory(title);\n  projects.push(newProject);\n  Object(_storageController__WEBPACK_IMPORTED_MODULE_0__[\"setProjectStorage\"])();\n};\n\nconst deleteProject = function() {\n  projects.splice(state.projectId, 1);\n};\n\nconst projectsIndex = function() {\n  return projects;\n};\n\nconst getProjectState = function() {\n  return state;\n};\n\nconst setProjectState = function(bool, id = \"\") {\n  state = {\n    projectOpened: bool,\n    projectId: id\n  };\n};\n\nconst deleteTask = function(task_id) {\n  projects[state.projectId].tasks.splice(task_id, 1);\n};\n\nconst showTask = function(task_id) {\n  return projects[state.projectId].tasks[task_id];\n};\n\n\n\n\n//# sourceURL=webpack:///./src/modules/controllers/projectController.js?");

/***/ }),

/***/ "./src/modules/controllers/render.js":
/*!*******************************************!*\
  !*** ./src/modules/controllers/render.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoActions */ \"./src/modules/controllers/todoActions.js\");\n/* harmony import */ var _projectActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectActions */ \"./src/modules/controllers/projectActions.js\");\n\n\n\nfunction render() {\n    Object(_todoActions__WEBPACK_IMPORTED_MODULE_0__[\"clearIndex\"])();\n    Object(_projectActions__WEBPACK_IMPORTED_MODULE_1__[\"clearProjects\"])();\n    Object(_todoActions__WEBPACK_IMPORTED_MODULE_0__[\"displayIndex\"])();\n    Object(_projectActions__WEBPACK_IMPORTED_MODULE_1__[\"displayProjects\"])();\n    Object(_todoActions__WEBPACK_IMPORTED_MODULE_0__[\"resetInput\"])();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (render);\n\n//# sourceURL=webpack:///./src/modules/controllers/render.js?");

/***/ }),

/***/ "./src/modules/controllers/storageController.js":
/*!******************************************************!*\
  !*** ./src/modules/controllers/storageController.js ***!
  \******************************************************/
/*! exports provided: setStorage, getStorage, setProjectStorage, getProjectStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setStorage\", function() { return setStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStorage\", function() { return getStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setProjectStorage\", function() { return setProjectStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProjectStorage\", function() { return getProjectStorage; });\n/* harmony import */ var _todoController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoController */ \"./src/modules/controllers/todoController.js\");\n/* harmony import */ var _projectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectController */ \"./src/modules/controllers/projectController.js\");\n\n\n\nconst setStorage = function() {\n  const todos = Object(_todoController__WEBPACK_IMPORTED_MODULE_0__[\"index\"])();\n  localStorage.setItem(\"todos\", JSON.stringify(todos));\n};\n\nvar setProjectStorage = function() {\n  const projects = Object(_projectController__WEBPACK_IMPORTED_MODULE_1__[\"projectsIndex\"])();\n  localStorage.setItem(\"projects\", JSON.stringify(projects));\n};\n\nconst getStorage = function() {\n  return JSON.parse(localStorage.getItem(\"todos\")) || [];\n};\n\nvar getProjectStorage = function() {\n  return JSON.parse(localStorage.getItem(\"projects\")) || [];\n};\n\n\n\n\n//# sourceURL=webpack:///./src/modules/controllers/storageController.js?");

/***/ }),

/***/ "./src/modules/controllers/todoActions.js":
/*!************************************************!*\
  !*** ./src/modules/controllers/todoActions.js ***!
  \************************************************/
/*! exports provided: showInput, hideInput, createTodo, displayIndex, clearIndex, deleteTodo, resetInput, displayTodo, clearProjects, closeDisplay, updateTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showInput\", function() { return showInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideInput\", function() { return hideInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTodo\", function() { return createTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayIndex\", function() { return displayIndex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearIndex\", function() { return clearIndex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteTodo\", function() { return deleteTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetInput\", function() { return resetInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayTodo\", function() { return displayTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearProjects\", function() { return clearProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeDisplay\", function() { return closeDisplay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTodo\", function() { return updateTodo; });\n/* harmony import */ var _todoController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoController */ \"./src/modules/controllers/todoController.js\");\n/* harmony import */ var _storageController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageController */ \"./src/modules/controllers/storageController.js\");\n/* harmony import */ var _views_popupView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/popupView */ \"./src/modules/views/popupView.js\");\n/* harmony import */ var _views_todosView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/todosView */ \"./src/modules/views/todosView.js\");\n/* harmony import */ var _projectActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectActions */ \"./src/modules/controllers/projectActions.js\");\n/* harmony import */ var _projectController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectController */ \"./src/modules/controllers/projectController.js\");\n\n\n\n\n\n\n\nconst showInput = function() {\n  const addTodoButton = document.querySelector(\".add_todo_button\");\n  const addTodoInputWrapper = document.querySelector(\".add_todo_input_wrapper\");\n  document.querySelector(\".add_todo_input\").focus();\n  addTodoButton.classList.add(\"display_none\");\n  addTodoInputWrapper.classList.remove(\"display_none\");\n};\n\nconst hideInput = function() {\n  const addTodoButton = document.querySelector(\".add_todo_button\");\n  const addTodoInputWrapper = document.querySelector(\".add_todo_input_wrapper\");\n  addTodoInputWrapper.classList.add(\"display_none\");\n  addTodoButton.classList.remove(\"display_none\");\n};\n\nconst resetInput = function() {\n  const addTodoInput = document.querySelector(\".add_todo_input\");\n  addTodoInput.value = \"\";\n};\n\nconst createTodo = function() {\n  const addTodoInput = document.querySelector(\".add_todo_input\");\n  const title = addTodoInput.value;\n  Object(_todoController__WEBPACK_IMPORTED_MODULE_0__[\"create\"])(title, \"Add more details\");\n};\n\nconst deleteTodo = function(todo_id) {\n  const projectState = Object(_projectController__WEBPACK_IMPORTED_MODULE_5__[\"getProjectState\"])();\n  Object(_storageController__WEBPACK_IMPORTED_MODULE_1__[\"getStorage\"])();\n  if (projectState.projectOpened) {\n    Object(_projectActions__WEBPACK_IMPORTED_MODULE_4__[\"destroyProjectTask\"])(todo_id);\n    Object(_storageController__WEBPACK_IMPORTED_MODULE_1__[\"setProjectStorage\"])();\n  } else {\n    Object(_todoController__WEBPACK_IMPORTED_MODULE_0__[\"destroy\"])(todo_id);\n    Object(_storageController__WEBPACK_IMPORTED_MODULE_1__[\"setStorage\"])();\n  }\n};\n\nconst updateTodo = function(todo_id) {\n  Object(_storageController__WEBPACK_IMPORTED_MODULE_1__[\"getStorage\"])();\n  const newInputs = document.querySelectorAll(\".task_info\");\n  Object(_todoController__WEBPACK_IMPORTED_MODULE_0__[\"update\"])(todo_id, newInputs);\n  Object(_storageController__WEBPACK_IMPORTED_MODULE_1__[\"setStorage\"])();\n};\n\nconst displayIndex = function() {\n  const projectState = Object(_projectController__WEBPACK_IMPORTED_MODULE_5__[\"getProjectState\"])();\n  const todos = projectState.projectOpened ? Object(_projectActions__WEBPACK_IMPORTED_MODULE_4__[\"getProjectTasks\"])() : Object(_todoController__WEBPACK_IMPORTED_MODULE_0__[\"index\"])();\n\n  Object(_views_todosView__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(todos);\n};\n\nconst displayTodo = function(todo_id) {\n  const projectState = Object(_projectController__WEBPACK_IMPORTED_MODULE_5__[\"getProjectState\"])();\n  const projectsList = document.querySelector(\".projects_list\"),\n    selected = projectState.projectOpened ? Object(_projectController__WEBPACK_IMPORTED_MODULE_5__[\"showTask\"])(todo_id) : Object(_todoController__WEBPACK_IMPORTED_MODULE_0__[\"show\"])(todo_id),\n    showTodo = Object(_views_popupView__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(selected, todo_id);\n  projectsList.innerHTML = showTodo;\n  document.querySelector(\".task_priority\").value = selected.priority;\n};\n\nconst closeDisplay = function() {\n  clearProjects();\n};\n\nconst clearIndex = function() {\n  let todoList = document.querySelector(\".todo_list\");\n  while (todoList.firstChild) {\n    todoList.removeChild(todoList.firstChild);\n  }\n};\n\nconst createProject = function() {};\n\nconst clearProjects = function() {\n  let projectsList = document.querySelector(\".projects_list\");\n  while (projectsList.firstChild) {\n    projectsList.removeChild(projectsList.firstChild);\n  }\n};\n\n\n\n\n//# sourceURL=webpack:///./src/modules/controllers/todoActions.js?");

/***/ }),

/***/ "./src/modules/controllers/todoController.js":
/*!***************************************************!*\
  !*** ./src/modules/controllers/todoController.js ***!
  \***************************************************/
/*! exports provided: create, destroy, index, show, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"destroy\", function() { return destroy; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"index\", function() { return index; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"show\", function() { return show; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony import */ var _storageController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storageController */ \"./src/modules/controllers/storageController.js\");\n/* harmony import */ var _projectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectController */ \"./src/modules/controllers/projectController.js\");\n/* harmony import */ var _projectActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectActions */ \"./src/modules/controllers/projectActions.js\");\n\n\n\n\nlet todos = Object(_storageController__WEBPACK_IMPORTED_MODULE_0__[\"getStorage\"])();\n\nconst todoFactory = (title, description, due_date, priority) => {\n  return {\n    title,\n    description,\n    due_date,\n    priority\n  };\n};\n\nconst create = function(title, description) {\n  const todo = todoFactory(title, description, \"anytime\", \"low\");\n  const projects = Object(_projectController__WEBPACK_IMPORTED_MODULE_1__[\"projectsIndex\"])();\n  const state = Object(_projectController__WEBPACK_IMPORTED_MODULE_1__[\"getProjectState\"])();\n\n  // Checks if task should be pushed to\n  // project or general.\n  if (state.projectOpened) {\n    projects[state.projectId].tasks.push(todo);\n    Object(_storageController__WEBPACK_IMPORTED_MODULE_0__[\"setProjectStorage\"])();\n  } else {\n    todos.push(todo);\n    Object(_storageController__WEBPACK_IMPORTED_MODULE_0__[\"setStorage\"])();\n  }\n};\n\nconst destroy = function(todo_id) {\n  todos.splice(todo_id, 1);\n};\n\nconst index = function() {\n  return todos;\n};\n\nconst show = function(todo_id) {\n  const selected = todos[todo_id];\n  return selected;\n};\n\nconst update = function(todo_id, newTodo) {\n  const projectState = Object(_projectController__WEBPACK_IMPORTED_MODULE_1__[\"getProjectState\"])();\n  let selected = \"\";\n  if (projectState.projectOpened) {\n    const projects = Object(_projectActions__WEBPACK_IMPORTED_MODULE_2__[\"getProjectTasks\"])();\n    selected = projects[todo_id];\n  } else {\n    selected = todos[todo_id];\n  }\n\n  selected.title = newTodo[0].value;\n  selected.description = newTodo[1].value;\n  selected.due_date = newTodo[2].value;\n  selected.priority = newTodo[3].value;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/modules/controllers/todoController.js?");

/***/ }),

/***/ "./src/modules/views/loadMain.js":
/*!***************************************!*\
  !*** ./src/modules/views/loadMain.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction loadMain() {\n    const content = document.querySelector('#content');\n\n    const nav = document.createElement('nav');\n    nav.classList.add('nav');\n    const navTitle = document.createElement('span');\n    navTitle.classList.add('nav_title');\n    navTitle.innerText = 'TODO';\n    const navItems = document.createElement('ul');\n    navItems.classList.add('nav_items');\n\n    const mainContainer = document.createElement('div');\n    mainContainer.classList.add('main_container');\n/*\n            =====\n            Todos\n            =====\n*/  \n    const todoContainer = document.createElement('section');\n    todoContainer.classList.add('list_container');\n\n    const listTitle = document.createElement('h1');\n    listTitle.classList.add('list_title');\n    listTitle.innerText = 'All';\n\n    const todoList = document.createElement('ul');\n    todoList.classList.add('todo_list');\n\n    const addTodoButton = document.createElement('span');\n    addTodoButton.classList.add('add_todo_button');\n    addTodoButton.innerText = '+ Add';\n\n    // Input wrapper\n    const addTodoInputWrapper = document.createElement('div');\n    addTodoInputWrapper\n        .classList\n        .add('add_todo_input_wrapper', 'display_flex', 'display_none');\n\n    // Input\n    const addTodoInput = document.createElement('input');\n    addTodoInput.setAttribute('type', 'text');\n    addTodoInput.setAttribute('placeholder', 'Create a new task or project...');\n    addTodoInput.classList.add('add_todo_input');\n\n    // Button wrapper\n    const buttonWrapper = document.createElement('div');\n    buttonWrapper.classList.add('button_wrapper');\n\n    // Create task button\n    const createTodoButton = document.createElement('span');\n    createTodoButton.classList.add('create_todo_button');\n    createTodoButton.innerText = 'Create task';\n\n    //Create new project\n    const addToProjectButton = document.createElement('span');\n    addToProjectButton.classList.add('create_project_button');\n    addToProjectButton.innerText = 'New Project';\n\n\n    // Cancel task button\n    const cancelTodoButton = document.createElement('span');\n    cancelTodoButton.classList.add('cancel_todo_button');\n    cancelTodoButton.innerText = 'Cancel';\n\n/*  \n            ========\n            Projects\n            ========\n*/\n    const projectsContainer = document.createElement('section');\n    projectsContainer.classList.add('projects_container');\n    const projectsTitle = document.createElement('h1');\n    projectsTitle.classList.add('projects_title');\n    projectsTitle.innerText = 'Projects';\n    const projectsList = document.createElement('ul');\n    projectsList.classList.add('projects_list');\n/*\n            ===\n            DOM\n            ===\n*/\n    projectsContainer.appendChild(projectsTitle);\n    projectsContainer.appendChild(projectsList);\n\n    buttonWrapper.appendChild(createTodoButton);\n    buttonWrapper.appendChild(addToProjectButton);\n    buttonWrapper.appendChild(cancelTodoButton);\n\n    addTodoInputWrapper.appendChild(addTodoInput);\n    addTodoInputWrapper.appendChild(buttonWrapper);\n\n    todoContainer.appendChild(listTitle);\n    todoContainer.appendChild(todoList);\n    todoContainer.appendChild(addTodoInputWrapper);\n    todoContainer.appendChild(addTodoButton);\n\n    nav.appendChild(navTitle);\n    nav.appendChild(navItems);\n\n    mainContainer.appendChild(todoContainer);\n    mainContainer.appendChild(projectsContainer);\n\n    content.appendChild(nav);\n    content.appendChild(mainContainer);\n\n    return content;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadMain);\n\n//# sourceURL=webpack:///./src/modules/views/loadMain.js?");

/***/ }),

/***/ "./src/modules/views/popupView.js":
/*!****************************************!*\
  !*** ./src/modules/views/popupView.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction popup(todo, id) {\n    const content = `\n        <div class=\"popup_box_container\">\n            <div class=\"popup_box\">\n                <div class=\"popup_box_header\">\n                    <h1 class=\"popup_box_title\"> Task Options </h1>\n                    <span class=\"close_popup\">\n                        Close\n                    </span>\n                </div>\n                <div class=\"popup_box_content\">\n                    Title\n                    <input class=\"task_info task_title\" type=\"text\" value=\"${todo.title}\" />\n                    Description\n                    <input class=\"task_info task_description\" type=\"textarea\" value=\"${todo.description}\" />\n                    Due date\n                    <input class=\"task_info task_due_date\" type=\"date\" value=\"${todo.due_date}\" />\n                    Priority\n                    <select class=\"priority_options task_info task_priority\">\n                        <option value=\"low\">Low</option>\n                        <option value=\"high\">High</option>\n                    </select>\n                </div>\n                <div class=\"display_flex\">\n                    <div id=${id} class=\"popup_update_button main_button\"> Update </div>\n                    <div id=${id} class=\"popup_delete_button\"> Delete </div>\n                </div>\n            </div>\n        </div>\n    `\n\n    return content;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (popup);\n\n//# sourceURL=webpack:///./src/modules/views/popupView.js?");

/***/ }),

/***/ "./src/modules/views/projectsView.js":
/*!*******************************************!*\
  !*** ./src/modules/views/projectsView.js ***!
  \*******************************************/
/*! exports provided: displayProjectsIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayProjectsIndex\", function() { return displayProjectsIndex; });\n\nfunction displayProjectsIndex(projects) {\n    if(projects !== null){\n        console.log(projects)\n        projects.forEach((project, i) => {\n            const projectsList = document.querySelector('.projects_list');\n            const content = `\n                <li id=${i} class=\"project_item_container\">\n                    <span class=\"project_card_title\">\n                        ${project.title}\n                    </span>\n                    <span class=\"project_card_delete\">\n                        delete\n                    </span>\n                </li>\n            `\n            projectsList.innerHTML += content;\n        });\n    };\n};\n\n\n\n//# sourceURL=webpack:///./src/modules/views/projectsView.js?");

/***/ }),

/***/ "./src/modules/views/todosView.js":
/*!****************************************!*\
  !*** ./src/modules/views/todosView.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction displayTasks(todos) {\n    let todoList = document.querySelector('.todo_list');\n    if(todos !== null) {\n        todos.forEach((todo, i) => {\n            const todo_item = `\n                <li id=${i} class=\"todo_item\">\n                    <h3>\n                        ${todo.title}\n                    </h3>\n                    <span id=${i} class=\"delete_todo_item\">\n                        delete\n                    </span>\n                    <hr />\n                </li>\n            `\n            todoList.innerHTML += todo_item;\n        });\n    };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (displayTasks);\n\n//# sourceURL=webpack:///./src/modules/views/todosView.js?");

/***/ })

/******/ });
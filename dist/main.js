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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_controllers_initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/controllers/initializer */ \"./src/modules/controllers/initializer.js\");\n\r\n\r\nconsole.log('initializing');\r\nObject(_modules_controllers_initializer__WEBPACK_IMPORTED_MODULE_0__[\"initialize\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/controllers/initializer.js":
/*!************************************************!*\
  !*** ./src/modules/controllers/initializer.js ***!
  \************************************************/
/*! exports provided: initialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialize\", function() { return initialize; });\n/* harmony import */ var _views_loadMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/loadMain */ \"./src/modules/views/loadMain.js\");\n/* harmony import */ var _todoActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoActions */ \"./src/modules/controllers/todoActions.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/modules/controllers/render.js\");\n/* harmony import */ var _projectActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectActions */ \"./src/modules/controllers/projectActions.js\");\n\r\n\r\n\r\n\r\n\r\nconst initialize = function() {\r\n    Object(_views_loadMain__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"displayIndex\"])();\r\n    Object(_projectActions__WEBPACK_IMPORTED_MODULE_3__[\"displayProjects\"])();\r\n    console.log('listening')\r\n    document.addEventListener('click', (e) => {\r\n        let click = e.target;\r\n        if(click.matches('.add_todo_button')) {\r\n            console.log('showing input');\r\n            Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"showInput\"])();\r\n        } else\r\n        if(click.matches('.cancel_todo_button')) {\r\n            console.log('hiding input');\r\n            Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"hideInput\"])();\r\n        } else \r\n        if(click.matches('.create_todo_button')) {\r\n            Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"createTodo\"])();\r\n            Object(_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n            Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"hideInput\"])();\r\n            console.log('todo created');\r\n        } else \r\n        if(click.matches('.delete_todo_item')) {\r\n            console.log('deleted todo', click.id);\r\n            Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"deleteTodo\"])(click.id);\r\n            Object(_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n        } else\r\n        if(click.matches('.todo_item')) {\r\n            console.log('showing todo', click.id);\r\n            Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"clearProjects\"])();\r\n            Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"displayTodo\"])(click.id);\r\n        } else\r\n        if(click.matches('.close_popup')) {\r\n            Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"closeDisplay\"])();\r\n        } else\r\n        if(click.matches('.popup_delete_button')) {\r\n            Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"deleteTodo\"])(click.id);\r\n            Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"closeDisplay\"])();\r\n            Object(_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n        } else\r\n        if(click.matches('.popup_update_button')) {\r\n            Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"updateTodo\"])(click.id);\r\n            Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"closeDisplay\"])();\r\n            Object(_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n        } else\r\n        if(click.matches('.create_project_button')) {\r\n            Object(_projectActions__WEBPACK_IMPORTED_MODULE_3__[\"createProject\"])();\r\n            Object(_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n            Object(_todoActions__WEBPACK_IMPORTED_MODULE_1__[\"hideInput\"])();\r\n            console.log('project created');\r\n        }\r\n    });\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/controllers/initializer.js?");

/***/ }),

/***/ "./src/modules/controllers/projectActions.js":
/*!***************************************************!*\
  !*** ./src/modules/controllers/projectActions.js ***!
  \***************************************************/
/*! exports provided: createProject, clearProjects, displayProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProject\", function() { return createProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearProjects\", function() { return clearProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayProjects\", function() { return displayProjects; });\n/* harmony import */ var _projectController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectController */ \"./src/modules/controllers/projectController.js\");\n/* harmony import */ var _storageController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageController */ \"./src/modules/controllers/storageController.js\");\n/* harmony import */ var _views_projectsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/projectsView */ \"./src/modules/views/projectsView.js\");\n\r\n\r\n\r\n\r\nconst createProject = function() {\r\n    const projectInput = document.querySelector('.add_todo_input');\r\n    const title = projectInput.value;\r\n    Object(_projectController__WEBPACK_IMPORTED_MODULE_0__[\"create\"])(title);\r\n};\r\n\r\nconst clearProjects = function() {\r\n    let projectsList = document.querySelector('.projects_list');\r\n    while(projectsList.firstChild) {\r\n        projectsList.removeChild(projectsList.firstChild);\r\n    };\r\n};\r\n\r\nconst displayProjects = function() {\r\n    const projects = Object(_projectController__WEBPACK_IMPORTED_MODULE_0__[\"projectsIndex\"])();\r\n    console.log(projects)\r\n    Object(_views_projectsView__WEBPACK_IMPORTED_MODULE_2__[\"displayProjectsIndex\"])(projects);\r\n};\r\n\r\nconst addTask = function() {\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/controllers/projectActions.js?");

/***/ }),

/***/ "./src/modules/controllers/projectController.js":
/*!******************************************************!*\
  !*** ./src/modules/controllers/projectController.js ***!
  \******************************************************/
/*! exports provided: create, projectsIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectsIndex\", function() { return projectsIndex; });\n/* harmony import */ var _storageController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storageController */ \"./src/modules/controllers/storageController.js\");\n\r\n\r\nlet projects = JSON.parse(localStorage.getItem('projects')) || [];\r\n\r\nconst projectFactory = function(title, tasks=[]) {\r\n    return { title, tasks };\r\n};\r\n\r\nconst create = function(title) {\r\n    const newProject = projectFactory(title)\r\n    projects.push(newProject);\r\n    Object(_storageController__WEBPACK_IMPORTED_MODULE_0__[\"setProjectStorage\"])();\r\n    console.log(projects)\r\n};\r\n\r\nconst projectsIndex = function() {\r\n    console.log(projects)\r\n    return projects;\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/controllers/projectController.js?");

/***/ }),

/***/ "./src/modules/controllers/render.js":
/*!*******************************************!*\
  !*** ./src/modules/controllers/render.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoActions */ \"./src/modules/controllers/todoActions.js\");\n/* harmony import */ var _projectActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectActions */ \"./src/modules/controllers/projectActions.js\");\n\r\n\r\n\r\nfunction render() {\r\n    Object(_todoActions__WEBPACK_IMPORTED_MODULE_0__[\"clearIndex\"])();\r\n    Object(_projectActions__WEBPACK_IMPORTED_MODULE_1__[\"clearProjects\"])();\r\n    Object(_todoActions__WEBPACK_IMPORTED_MODULE_0__[\"displayIndex\"])();\r\n    Object(_projectActions__WEBPACK_IMPORTED_MODULE_1__[\"displayProjects\"])();\r\n    Object(_todoActions__WEBPACK_IMPORTED_MODULE_0__[\"resetInput\"])();\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (render);\n\n//# sourceURL=webpack:///./src/modules/controllers/render.js?");

/***/ }),

/***/ "./src/modules/controllers/storageController.js":
/*!******************************************************!*\
  !*** ./src/modules/controllers/storageController.js ***!
  \******************************************************/
/*! exports provided: setStorage, getStorage, setProjectStorage, getProjectStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setStorage\", function() { return setStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStorage\", function() { return getStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setProjectStorage\", function() { return setProjectStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProjectStorage\", function() { return getProjectStorage; });\n/* harmony import */ var _todoController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoController */ \"./src/modules/controllers/todoController.js\");\n/* harmony import */ var _projectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectController */ \"./src/modules/controllers/projectController.js\");\n\r\n\r\n\r\nconst setStorage = function() {\r\n    const todos = Object(_todoController__WEBPACK_IMPORTED_MODULE_0__[\"index\"])();\r\n    localStorage.setItem('todos', JSON.stringify(todos));\r\n};\r\n\r\nvar setProjectStorage = function() {\r\n    const projects = Object(_projectController__WEBPACK_IMPORTED_MODULE_1__[\"projectsIndex\"])();\r\n    console.log(projects);\r\n    localStorage.setItem('projects', JSON.stringify(projects));\r\n}\r\n\r\nconst getStorage = function() {\r\n    return JSON.parse(localStorage.getItem('todos')) || [];\r\n};\r\n\r\nvar getProjectStorage = function() {\r\n    return JSON.parse(localStorage.getItem('projects')) || [];\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/controllers/storageController.js?");

/***/ }),

/***/ "./src/modules/controllers/todoActions.js":
/*!************************************************!*\
  !*** ./src/modules/controllers/todoActions.js ***!
  \************************************************/
/*! exports provided: showInput, hideInput, createTodo, displayIndex, clearIndex, deleteTodo, resetInput, displayTodo, clearProjects, closeDisplay, updateTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showInput\", function() { return showInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideInput\", function() { return hideInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTodo\", function() { return createTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayIndex\", function() { return displayIndex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearIndex\", function() { return clearIndex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteTodo\", function() { return deleteTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetInput\", function() { return resetInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayTodo\", function() { return displayTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearProjects\", function() { return clearProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeDisplay\", function() { return closeDisplay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTodo\", function() { return updateTodo; });\n/* harmony import */ var _todoController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoController */ \"./src/modules/controllers/todoController.js\");\n/* harmony import */ var _storageController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageController */ \"./src/modules/controllers/storageController.js\");\n/* harmony import */ var _views_popupView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/popupView */ \"./src/modules/views/popupView.js\");\n/* harmony import */ var _views_todosView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/todosView */ \"./src/modules/views/todosView.js\");\n\r\n\r\n\r\n\r\n\r\n    const showInput = function() {\r\n        const addTodoButton = document.querySelector('.add_todo_button');\r\n        const addTodoInputWrapper = document.querySelector('.add_todo_input_wrapper');\r\n        document.querySelector('.add_todo_input').focus();\r\n        addTodoButton.classList.add('display_none');\r\n        addTodoInputWrapper.classList.remove('display_none');\r\n        console.log('clicked');\r\n    };\r\n\r\n    const hideInput = function() {\r\n        const addTodoButton = document.querySelector('.add_todo_button');\r\n        const addTodoInputWrapper = document.querySelector('.add_todo_input_wrapper');\r\n        addTodoInputWrapper.classList.add('display_none');\r\n        addTodoButton.classList.remove('display_none');\r\n    }\r\n\r\n    const resetInput = function() {\r\n        const addTodoInput = document.querySelector('.add_todo_input');\r\n        addTodoInput.value = '';\r\n    }\r\n\r\n    const createTodo = function() {\r\n        const addTodoInput = document.querySelector('.add_todo_input');\r\n        const title = addTodoInput.value\r\n        Object(_todoController__WEBPACK_IMPORTED_MODULE_0__[\"create\"])(title, 'Add more details');\r\n    }\r\n\r\n    const deleteTodo = function(todo) {\r\n        Object(_storageController__WEBPACK_IMPORTED_MODULE_1__[\"getStorage\"])();\r\n        Object(_todoController__WEBPACK_IMPORTED_MODULE_0__[\"destroy\"])(todo);\r\n        Object(_storageController__WEBPACK_IMPORTED_MODULE_1__[\"setStorage\"])();\r\n    }\r\n\r\n    const updateTodo = function(todo_id) {\r\n        Object(_storageController__WEBPACK_IMPORTED_MODULE_1__[\"getStorage\"])();\r\n        const newInputs = document.querySelectorAll('.task_info'); \r\n        Object(_todoController__WEBPACK_IMPORTED_MODULE_0__[\"update\"])(todo_id, newInputs);\r\n        console.log(newInputs[3].options)\r\n        Object(_storageController__WEBPACK_IMPORTED_MODULE_1__[\"setStorage\"])();\r\n\r\n    }\r\n\r\n    const displayIndex = function() {\r\n        const todos = Object(_todoController__WEBPACK_IMPORTED_MODULE_0__[\"index\"])();\r\n        Object(_views_todosView__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(todos);\r\n    };\r\n\r\n    const displayTodo = function(todo_id) {\r\n        const projectsList = document.querySelector('.projects_list'),\r\n            selected = Object(_todoController__WEBPACK_IMPORTED_MODULE_0__[\"show\"])(todo_id),\r\n            showTodo = Object(_views_popupView__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(selected, todo_id);\r\n        projectsList.innerHTML = showTodo;\r\n        console.log(selected)\r\n        document.querySelector('.task_priority').value = selected.priority;\r\n    };\r\n\r\n    const closeDisplay = function() {\r\n      clearProjects();\r\n    }\r\n\r\n    const clearIndex = function() {\r\n        let todoList = document.querySelector('.todo_list');\r\n        while(todoList.firstChild) {\r\n            todoList.removeChild(todoList.firstChild);\r\n        };\r\n    };\r\n\r\n    const createProject = function() {\r\n\r\n    }\r\n\r\n    const clearProjects = function() {\r\n        let projectsList = document.querySelector('.projects_list');\r\n        while(projectsList.firstChild) {\r\n            projectsList.removeChild(projectsList.firstChild);\r\n        };\r\n    };\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/controllers/todoActions.js?");

/***/ }),

/***/ "./src/modules/controllers/todoController.js":
/*!***************************************************!*\
  !*** ./src/modules/controllers/todoController.js ***!
  \***************************************************/
/*! exports provided: create, destroy, index, show, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"destroy\", function() { return destroy; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"index\", function() { return index; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"show\", function() { return show; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony import */ var _storageController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storageController */ \"./src/modules/controllers/storageController.js\");\n\r\n\r\nlet todos = Object(_storageController__WEBPACK_IMPORTED_MODULE_0__[\"getStorage\"])();\r\n\r\nconst todoFactory = (title, description, due_date, priority) => {\r\n    return {\r\n        title,\r\n        description,\r\n        due_date,\r\n        priority,\r\n    };\r\n};\r\n\r\nconst create = function(title, description) {\r\n    const todo = todoFactory(title, description, 'anytime', 'low');\r\n    todos.push(todo);\r\n    Object(_storageController__WEBPACK_IMPORTED_MODULE_0__[\"setStorage\"])();\r\n};\r\n\r\nconst destroy = function(todo_id) {\r\n    todos.splice(todo_id, 1);\r\n}\r\n\r\nconst index = function() {\r\n    return todos;\r\n}\r\n\r\nconst show = function(todo_id) {\r\n    const selected = todos[todo_id];\r\n    return selected;\r\n}\r\n\r\nconst update = function(todo_id, newTodo) {\r\n    const selected = todos[todo_id];\r\n    selected.title = newTodo[0].value;\r\n    selected.description = newTodo[1].value;\r\n    selected.due_date = newTodo[2].value;\r\n    selected.priority = newTodo[3].value;\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/controllers/todoController.js?");

/***/ }),

/***/ "./src/modules/views/loadMain.js":
/*!***************************************!*\
  !*** ./src/modules/views/loadMain.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction loadMain() {\r\n    const content = document.querySelector('#content');\r\n\r\n    const nav = document.createElement('nav');\r\n    nav.classList.add('nav');\r\n    const navTitle = document.createElement('span');\r\n    navTitle.classList.add('nav_title');\r\n    navTitle.innerText = 'TODO';\r\n    const navItems = document.createElement('ul');\r\n    navItems.classList.add('nav_items');\r\n\r\n    const mainContainer = document.createElement('div');\r\n    mainContainer.classList.add('main_container');\r\n/*\r\n            =====\r\n            Todos\r\n            =====\r\n*/  \r\n    const todoContainer = document.createElement('section');\r\n    todoContainer.classList.add('list_container');\r\n\r\n    const listTitle = document.createElement('h1');\r\n    listTitle.classList.add('list_title');\r\n    listTitle.innerText = 'All';\r\n\r\n    const todoList = document.createElement('ul');\r\n    todoList.classList.add('todo_list');\r\n\r\n    const addTodoButton = document.createElement('span');\r\n    addTodoButton.classList.add('add_todo_button');\r\n    addTodoButton.innerText = '+ Add';\r\n\r\n    // Input wrapper\r\n    const addTodoInputWrapper = document.createElement('div');\r\n    addTodoInputWrapper\r\n        .classList\r\n        .add('add_todo_input_wrapper', 'display_flex', 'display_none');\r\n\r\n    // Input\r\n    const addTodoInput = document.createElement('input');\r\n    addTodoInput.setAttribute('type', 'text');\r\n    addTodoInput.setAttribute('placeholder', 'Create a new task or project...');\r\n    addTodoInput.classList.add('add_todo_input');\r\n\r\n    // Button wrapper\r\n    const buttonWrapper = document.createElement('div');\r\n    buttonWrapper.classList.add('button_wrapper');\r\n\r\n    // Create task button\r\n    const createTodoButton = document.createElement('span');\r\n    createTodoButton.classList.add('create_todo_button');\r\n    createTodoButton.innerText = 'Create task';\r\n\r\n    //Create new project\r\n    const addToProjectButton = document.createElement('span');\r\n    addToProjectButton.classList.add('create_project_button');\r\n    addToProjectButton.innerText = 'New Project';\r\n\r\n\r\n    // Cancel task button\r\n    const cancelTodoButton = document.createElement('span');\r\n    cancelTodoButton.classList.add('cancel_todo_button');\r\n    cancelTodoButton.innerText = 'Cancel';\r\n\r\n/*  \r\n            ========\r\n            Projects\r\n            ========\r\n*/\r\n    const projectsContainer = document.createElement('section');\r\n    projectsContainer.classList.add('projects_container');\r\n    const projectsTitle = document.createElement('h1');\r\n    projectsTitle.classList.add('projects_title');\r\n    projectsTitle.innerText = 'Projects';\r\n    const projectsList = document.createElement('ul');\r\n    projectsList.classList.add('projects_list');\r\n/*\r\n            ===\r\n            DOM\r\n            ===\r\n*/\r\n    projectsContainer.appendChild(projectsTitle);\r\n    projectsContainer.appendChild(projectsList);\r\n\r\n    buttonWrapper.appendChild(createTodoButton);\r\n    buttonWrapper.appendChild(addToProjectButton);\r\n    buttonWrapper.appendChild(cancelTodoButton);\r\n\r\n    addTodoInputWrapper.appendChild(addTodoInput);\r\n    addTodoInputWrapper.appendChild(buttonWrapper);\r\n\r\n    todoContainer.appendChild(listTitle);\r\n    todoContainer.appendChild(todoList);\r\n    todoContainer.appendChild(addTodoInputWrapper);\r\n    todoContainer.appendChild(addTodoButton);\r\n\r\n    nav.appendChild(navTitle);\r\n    nav.appendChild(navItems);\r\n\r\n    mainContainer.appendChild(todoContainer);\r\n    mainContainer.appendChild(projectsContainer);\r\n\r\n    content.appendChild(nav);\r\n    content.appendChild(mainContainer);\r\n\r\n    return content;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadMain);\n\n//# sourceURL=webpack:///./src/modules/views/loadMain.js?");

/***/ }),

/***/ "./src/modules/views/popupView.js":
/*!****************************************!*\
  !*** ./src/modules/views/popupView.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction popup(todo, id) {\r\n    const content = `\r\n        <div class=\"popup_box_container\">\r\n            <div class=\"popup_box\">\r\n                <div class=\"popup_box_header\">\r\n                    <h1 class=\"popup_box_title\"> Task Options </h1>\r\n                    <span class=\"close_popup\">\r\n                        Close\r\n                    </span>\r\n                </div>\r\n                <div class=\"popup_box_content\">\r\n                    Title\r\n                    <input class=\"task_info task_title\" type=\"text\" value=\"${todo.title}\" />\r\n                    Description\r\n                    <input class=\"task_info task_description\" type=\"textarea\" value=\"${todo.description}\" />\r\n                    Due date\r\n                    <input class=\"task_info task_due_date\" type=\"date\" value=\"${todo.due_date}\" />\r\n                    Priority\r\n                    <select class=\"priority_options task_info task_priority\">\r\n                        <option value=\"low\">Low</option>\r\n                        <option value=\"high\">High</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"display_flex\">\r\n                    <div id=${id} class=\"popup_update_button main_button\"> Update </div>\r\n                    <div id=${id} class=\"popup_delete_button\"> Delete </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    `\r\n\r\n    return content;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (popup);\n\n//# sourceURL=webpack:///./src/modules/views/popupView.js?");

/***/ }),

/***/ "./src/modules/views/projectsView.js":
/*!*******************************************!*\
  !*** ./src/modules/views/projectsView.js ***!
  \*******************************************/
/*! exports provided: displayProjectsIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayProjectsIndex\", function() { return displayProjectsIndex; });\n\r\nfunction displayProjectsIndex(projects) {\r\n    if(projects !== null){\r\n        console.log(projects)\r\n        projects.forEach((project, i) => {\r\n            const projectsList = document.querySelector('.projects_list');\r\n            const content = `\r\n                <li id=${i} class=\"project_item\">\r\n                    <div class=\"project_card_container\">\r\n                        <div class=\"project_card_header\">\r\n                            ${project.title}\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            `\r\n            projectsList.innerHTML += content;\r\n        });\r\n    };\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/views/projectsView.js?");

/***/ }),

/***/ "./src/modules/views/todosView.js":
/*!****************************************!*\
  !*** ./src/modules/views/todosView.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction displayTasks(todos) {\r\n    let todoList = document.querySelector('.todo_list');\r\n    if(todos !== null) {\r\n        todos.forEach((todo, i) => {\r\n            const todo_item = `\r\n                <li id=${i} class=\"todo_item\">\r\n                    <h3>\r\n                        ${todo.title}\r\n                    </h3>\r\n                    <span id=${i} class=\"delete_todo_item\">\r\n                        delete\r\n                    </span>\r\n                    <hr />\r\n                </li>\r\n            `\r\n            todoList.innerHTML += todo_item;\r\n        });\r\n    };\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (displayTasks);\n\n//# sourceURL=webpack:///./src/modules/views/todosView.js?");

/***/ })

/******/ });
function loadMain() {
    const content = document.querySelector('#content');

    const nav = document.createElement('nav');
    nav.classList.add('nav');
    const navTitle = document.createElement('span');
    navTitle.classList.add('nav_title');
    navTitle.innerText = 'TODO';
    const navItems = document.createElement('ul');
    navItems.classList.add('nav_items');

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main_container');
/*
            =====
            Todos
            =====
*/  
    const todoContainer = document.createElement('section');
    todoContainer.classList.add('list_container');

    const listTitle = document.createElement('h1');
    listTitle.classList.add('list_title');
    listTitle.innerText = 'All';

    const todoList = document.createElement('ul');
    todoList.classList.add('todo_list');

    const addTodoButton = document.createElement('span');
    addTodoButton.classList.add('add_todo_button');
    addTodoButton.innerText = '+ Add';

    // Input wrapper
    const addTodoInputWrapper = document.createElement('div');
    addTodoInputWrapper
        .classList
        .add('add_todo_input_wrapper', 'display_flex', 'display_none');

    // Input
    const addTodoInput = document.createElement('input');
    addTodoInput.setAttribute('type', 'text');
    addTodoInput.setAttribute('placeholder', 'Add a new task...');
    addTodoInput.classList.add('add_todo_input');

    // Button wrapper
    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('button_wrapper');

    // Create task button
    const createTodoButton = document.createElement('span');
    createTodoButton.classList.add('create_todo_button');
    createTodoButton.innerText = 'Create task';

    // Cancel task button
    const cancelTodoButton = document.createElement('span');
    cancelTodoButton.classList.add('cancel_todo_button');
    cancelTodoButton.innerText = 'Cancel';

/*  
            ========
            Projects
            ========
*/
    const projectsContainer = document.createElement('section');
    projectsContainer.classList.add('projects_container');
    const projectsTitle = document.createElement('h1');
    projectsTitle.classList.add('projects_title');
    projectsTitle.innerText = 'Projects';
    const projectsList = document.createElement('ul');
    projectsList.classList.add('projects_list');
/*
            ===
            DOM
            ===
*/
    projectsContainer.appendChild(projectsTitle);
    projectsContainer.appendChild(projectsList);

    buttonWrapper.appendChild(createTodoButton);
    buttonWrapper.appendChild(cancelTodoButton);

    addTodoInputWrapper.appendChild(addTodoInput);
    addTodoInputWrapper.appendChild(buttonWrapper);

    todoContainer.appendChild(listTitle);
    todoContainer.appendChild(todoList);
    todoContainer.appendChild(addTodoInputWrapper);
    todoContainer.appendChild(addTodoButton);

    nav.appendChild(navTitle);
    nav.appendChild(navItems);

    mainContainer.appendChild(todoContainer);
    mainContainer.appendChild(projectsContainer);

    content.appendChild(nav);
    content.appendChild(mainContainer);

    return content;
}

export default loadMain;
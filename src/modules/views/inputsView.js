function inputs() {
    const addTodoInput = document.createElement('input');
    addTodoInput.setAttribute('type', 'text');
    addTodoInput.setAttribute('placeholder', 'Add a task...');
    addTodoInput.classList.add('todo_input');

    return addTodoInput;
}

export default inputs;
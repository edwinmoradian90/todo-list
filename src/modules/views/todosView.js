function displayTasks(todos) {
    let todoList = document.querySelector('.todo_list');
    if(todos !== null) {
        todos.forEach((todo, i) => {
            const todo_item = `
                <li id=${i} class="todo_item">
                    <h3>
                        ${todo.title}
                    </h3>
                    <span id=${i} class="delete_todo_item">
                        delete
                    </span>
                    <hr />
                </li>
            `
            todoList.innerHTML += todo_item;
        });
    };
};

export default displayTasks;
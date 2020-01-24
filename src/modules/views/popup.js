function popup(todo, id) {
    const content = `
        <div class="popup_box_container">
            <div class="popup_box">
                <div class="popup_box_header">
                    <h1 class="popup_box_title"> Task Options </h1>
                    <span class="close_popup">
                        Close
                    </span>
                </div>
                <div class="popup_box_content">
                    Title
                    <input class="task_info task_title" type="text" value="${todo.title}" />
                    Description
                    <input class="task_info task_description" type="textarea" value="${todo.description}" />
                    Due date
                    <input class="task_info task_due_date" type="date" value="${todo.due_date}" />
                    Priority
                    <select class="priority_options task_info task_priority">
                        <option value="low">Low</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div class="display_flex">
                    <div id=${id} class="popup_update_button main_button"> Update </div>
                    <div id=${id} class="popup_delete_button"> Delete </div>
                </div>
            </div>
        </div>
    `

    return content;
}

export default popup;
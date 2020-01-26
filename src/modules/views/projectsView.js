
function displayProjectsIndex(projects) {
    if(projects !== null){
        console.log(projects)
        projects.forEach((project, i) => {
            const projectsList = document.querySelector('.projects_list');
            const content = `
                <li id=${i} class="project_item_container">
                    <span class="project_card_title">
                        ${project.title}
                    </span>
                    <span class="project_card_delete">
                        delete
                    </span>
                </li>
            `
            projectsList.innerHTML += content;
        });
    };
};

export { displayProjectsIndex };
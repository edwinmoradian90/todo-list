
function displayProjectsIndex(projects) {
    if(projects !== null){
        console.log(projects)
        projects.forEach((project, i) => {
            const projectsList = document.querySelector('.projects_list');
            const content = `
                <li id=${i} class="project_item">
                    <div class="project_card_container">
                        <div class="project_card_header">
                            ${project.title}
                        </div>
                    </div>
                </li>
            `
            projectsList.innerHTML += content;
        });
    };
};

export { displayProjectsIndex };
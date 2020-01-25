import { displayIndex, clearIndex, resetInput} from "./todoActions";
import { displayProjects, clearProjects } from "./projectActions";

function render() {
    clearIndex();
    clearProjects();
    displayIndex();
    displayProjects();
    resetInput();
}

export default render;
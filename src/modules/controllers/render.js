import { displayIndex, clearIndex, resetInput } from "./actions";

function render() {
    clearIndex();
    displayIndex();
    resetInput();
}

export default render;
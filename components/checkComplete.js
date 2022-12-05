const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask)
    return i;

};

// Immediately invoked function expresion IIFE
const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("copleteIcon");
    element.classList.toggle("far");
};

export default checkComplete;
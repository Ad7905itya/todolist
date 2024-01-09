let button = document.querySelectorAll(".btn");
let body = document.querySelector("body");
let input = document.querySelector("input");
let listContainer = document.querySelector(".list-container");
let currMode = "Light";
let a=0;

button[0].addEventListener("click", () => {
    if (currMode === "Light") {
        currMode = "Dark";
        body.classList.add("dark");
        body.classList.remove("light");
        button[0].classList.add("dra");
        button[0].classList.remove("lie");
        button[1].classList.add("dra");
        button[1].classList.remove("lie");
    } else {
        currMode = "Light";
        body.classList.remove("dark");
        body.classList.add("light");
        button[0].classList.remove("dra");
        button[0].classList.add("lie");
        button[1].classList.remove("dra");
        button[1].classList.add("lie");
    }
    button[0].innerHTML = `${currMode} Mode`;
});

function addEvent() {
    if (input.value === "") {
        alert("you must be write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    save_Data();

}
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        save_Data();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        save_Data();
    }
}, false);

function save_Data() {
    localStorage.setItem("Data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("Data");
}
showTask();
const row1 = document.getElementById("row1");
const list = document.getElementById("list");

function addTask() {
    if(row1.value === '') {
        alert("You must add something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = row1.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    row1.value = "";
    saveData();
}

list.addEventListener("click", function(e) {
    if(e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function showTask() {
    list.innerHTML = localStorage.getItem("data");
}
showTask();
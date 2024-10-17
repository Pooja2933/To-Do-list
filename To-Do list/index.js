const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");

// Function to add a task
function addTask() {
  if (inputBox.value === '') {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";  // Unicode for '×' (delete button)
    li.appendChild(span);

    listContainer.appendChild(li);
  }
  inputBox.value = "";
  saveData();  // Save task list to localStorage
}

// Event listener to handle task actions (mark complete/delete)
listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

// Save task list to localStorage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Load task list from localStorage
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

// Load existing tasks on page load
showTask();

let userInput = document.getElementsByTagName("input")[0];
let btn = document.getElementsByTagName("button")[0];
let taskContainer = document.getElementsByTagName("ul")[0];
let deleteBtn = `<img class="delete cursor-pointer" src="del.png"/>
`;

showData();

function mainFunc() {
  if (userInput.value != "") {
    userInput.placeholder = "What's the task today?";
    // Create list
    let li = document.createElement("li");
    li.classList.add("task");

    // Create delete btn
    let img = document.createElement("img");
    img.src = "del.png";
    img.classList.add("delete");

    // Create Checkbox
    // let checkIcon = document.createElement("input");
    // checkIcon.type = "checkbox";
    // checkIcon.classList.add("checkbox");

    // Insert into DOM
    li.innerHTML = userInput.value + deleteBtn;
    userInput.value = "";

    taskContainer.appendChild(li);
    // li.appendChild(checkIcon);
  } else {
    userInput.placeholder = "Type Something first...";
  }

  saveData();
}

btn.addEventListener("click", (e) => {
  mainFunc();
});

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    mainFunc();
    console.log("Helo");
  }
});

taskContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
  } else if (e.target.tagName === "IMG") {
    e.target.parentElement.style.scale = "0";
    setTimeout(() => {
      e.target.parentElement.remove();
      saveData();
    }, 300);
  }
  saveData();
});

function showData() {
  let data = localStorage.getItem("data");
  taskContainer.innerHTML = data;
}

function saveData() {
  localStorage.setItem("data", taskContainer.innerHTML);
}

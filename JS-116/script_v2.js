let input = document.getElementById("todoInput");
let addBtn = document.getElementById("button-addon2");
let list = document.querySelector(".list-group");
// addBtn.addEventListener("click", function name(params) {

// })

let localDB = [];

function getItems() {
  let storage = localStorage.getItem("todolist");
  console.log(storage);
  if (storage) {
    //localDB = JSON.parse(storage);
    localDB = storage.split(",");
    console.log(localDB);
    list.innerHTML = "";
    for (let i = 0; i < localDB.length; i++) {
      const element = localDB[i];
      console.log(element);
      list.insertAdjacentHTML("afterbegin", element);
    }
    let deleteBtn = document.getElementsByClassName("delete");
    for (let i = 0; i < deleteBtn.length; i++) {
      const element = deleteBtn[i];
      element.addEventListener("click", deleteItem);
    }
  }
}

getItems();

addBtn.onclick = function (e) {
  let inputVal = input.value;
  if (inputVal) {
    let listItem = document.createElement("li");
    listItem.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between"
    );
    let spanInput = document.createElement("span");
    let spanBtn = document.createElement("span");
    spanInput.textContent = inputVal;
    spanInput.addEventListener("click", updateItem);
    spanBtn.classList.add("badge", "bg-danger", "delete");
    spanBtn.style.cursor = "pointer";
    spanBtn.innerHTML = "X";
    spanBtn.addEventListener("click", deleteItem);
    listItem.appendChild(spanInput);
    listItem.appendChild(spanBtn);
    //list.appendChild(listItem);   // eklemeyi burada değil de getItems içinde yapıyoruz, çünkü localstorage'den data alıyoruz.
    localDB.push(listItem.outerHTML);
    localStorage.setItem("todolist", localDB);
    //localStorage.setItem("todolist", JSON.stringify(localDB));  // stringfy yaparsak, alırken de parse yapmamız lazım.
    input.value = "";
  }
  getItems();
};

let deleteBtn = document.getElementsByClassName("delete");

// for (let i = 0; i < deleteBtn.length; i++) {
//     const element = deleteBtn[i];
//     element.addEventListener("click", deleteItem)
// }

function deleteItem(e) {
  console.log("delete button calıstı");
  let parentListItem = e.target.parentElement;
  let preSibling = e.target.previousSibling;
  console.log(preSibling)
  console.log(localDB);
  let filteredDB = localDB.filter(item=>!item.includes(preSibling.innerHTML))
  console.log(filteredDB)
  localDB = filteredDB;
  localStorage.setItem("todolist", localDB);
  getItems();
  // let grandParentList = e.target.parentElement.parentNode
  // grandParentList.removeChild(parentListItem);
  //parentListItem.remove();
}

function updateItem(e) {
  e.target.classList.add("text-muted");
}

//localStorage.setItem("user", "mustafa")
//let userName = localStorage.getItem("user")
//localStorage.removeItem("user")

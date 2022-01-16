let input = document.getElementById("todoInput");
let addBtn = document.getElementById("button-addon2");
let list = document.querySelector(".list-group");
// addBtn.addEventListener("click", function name(params) {
    
// })

let localDB = [];

function getItems() {
    if(localStorage.getItem("todolist")){
        localDB = localStorage.getItem("todolist").split(",")
        console.log(localDB)
        for (let i = 0; i < localDB.length; i++) {
                const element = localDB[i];
                //console.log(element)
                list.insertAdjacentHTML("afterbegin",element);
            }
    } else {
        localDB = [];
    }
    
}

//getItems();

addBtn.onclick = function (e) {
    let inputVal = input.value;
    if(inputVal){
        let listItem = document.createElement("li");
        listItem.classList.add("list-group-item" , "d-flex", "justify-content-between");
        let spanInput = document.createElement("span") ;
        let spanBtn = document.createElement("span") ;
        spanInput.textContent = inputVal;
        spanInput.addEventListener("click", updateItem);
        spanBtn.classList.add("badge", "bg-danger", "delete");
        spanBtn.style.cursor = "pointer";
        spanBtn.innerHTML= "X";
        spanBtn.addEventListener("click", deleteItem);
        listItem.appendChild(spanInput);
        listItem.appendChild(spanBtn);
        list.appendChild(listItem);
        let listItemJSON = JSON.stringify(listItem, undefined, 4);
        //localDB.push(listItem.outerHTML)
        localDB.push(listItemJSON)
        localStorage.setItem("todolist", listItemJSON)
        input.value = "";
    }
    let items = localStorage.getItem("todolist")
    console.log(items)
    let itemsObj = JSON.parse(items, undefined, 4)
    console.log(itemsObj)
}

let deleteBtn = document.getElementsByClassName("delete");

// for (let i = 0; i < deleteBtn.length; i++) {
//     const element = deleteBtn[i];
//     element.addEventListener("click", deleteItem)
// }

function deleteItem(e) {
    console.log("delete button calıstı")
     let parentListItem = e.target.parentElement
    // let grandParentList = e.target.parentElement.parentNode
    // grandParentList.removeChild(parentListItem);
    parentListItem.remove()
}

function updateItem(e) {
    e.target.classList.add("text-muted")

}

//localStorage.setItem("user", "mustafa")
//let userName = localStorage.getItem("user")
//localStorage.removeItem("user")

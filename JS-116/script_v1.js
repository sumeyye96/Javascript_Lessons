let input = document.getElementById("todoInput");
let addBtn = document.getElementById("button-addon2");
let list = document.querySelector(".list-group");
// addBtn.addEventListener("click", function name(params) {
    
// })

let localDB = [];

function showItems() {

    let storage = localStorage.getItem("todolist");
    if(storage){
        console.log(storage.split(","))
        localDB = storage.split(",");
        list.innerHTML = "";
        for (let i = 0; i < localDB.length; i++) {
            const element = localDB[i];
            //list.appendChild(element)
            list.insertAdjacentHTML("afterbegin", element)
        }
    }
    


    // console.log(localDB)
    // for (let i = 0; i < localDB.length; i++) {
    //     const element = localDB[i];
    //     list.appendChild(element)
        
    // }
}
showItems();

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
        localDB.push(listItem.outerHTML)
        //list.appendChild(listItem);
        localStorage.setItem("todolist",localDB)
        input.value = "";
        showItems();
    }
    //console.log(localDB)
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

// localStorage.setItem("user", "mustafa")
// let userName = localStorage.getItem("user")
// localStorage.removeItem("user")
// localStorage.clear();

//let localStore = localStorage.getItem("todolist")
//console.log(localStore)

// for (let i = 0; i < localStore.length; i++) {
//     const element = localStore[i];
//     console.log(element)
//     //list.appendChild(element);
// }



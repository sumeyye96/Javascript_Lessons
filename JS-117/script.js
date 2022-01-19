/*const user = `{
    "salutation": "Miss.",
    "firstName": "Geneva",
    "middleName": "Beth",
    "lastName": "Collins",
    "office": "High School",
    "roomNumber": 488,
    "phoneExt": 392,
    "emailPersonal": "geneva.collins@personal.net",
    "status": true
  }`
const userObj = {
    "salutation": "Miss.",
    "firstName": "Geneva",
    "middleName": "Beth",
    "lastName": "Collins",
    "office": "High School",
    "roomNumber": 488,
    "phoneExt": 392,
    "emailPersonal": "geneva.collins@personal.net",
    "status": true
  }

console.log(user.firstName) // undefined
console.log(userObj.firstName) // Geneva


console.log(JSON.parse(user)) // gelen json objectini javascript objectine çevirme
console.log(JSON.stringify(userObj))
*/
/*
let list = document.getElementById("list") // ==> ul 
//let listItem = document.createElement("li");
//listItem.innerHTML = userObj.firstName;
//list.appendChild(listItem)
let listItem = `<li>${userObj.firstName}</li>`
let listItem2 = `<li>${userObj.lastName}</li>`
//list.innerHTML = listItem;
//list.innerHTML = listItem2;
list.insertAdjacentHTML("afterbegin", listItem)
list.insertAdjacentHTML("afterbegin", listItem2)
*/

let list = document.getElementById("list") // ==> ul 

let staffObj = JSON.parse(staff);
/*console.log(staffObj)
let listItem = `<li>${staffObj.staff[0].name.firstName}</li>`
list.insertAdjacentHTML("afterbegin", listItem)*/

/*
for (let i = 0; i < staffObj.staff.length; i++) {
    const firstName = staffObj.staff[i].name.firstName;
    console.log(firstName)
    let listItem = `<li>${firstName}</li>`
    list.insertAdjacentHTML("beforeend", listItem)
}*/

/*
let names = [];
for (let i = 0; i < staffObj.staff.length; i++) {
    const firstName = staffObj.staff[i].name.firstName;
    names.push(firstName)
}

names.sort()
for (let i = 0; i < names.length; i++) {
    const element = names[i];
    let listItem = `<li>${element}</li>`
    list.insertAdjacentHTML("beforeend", listItem)  
}*/

/*
let names = staffObj.staff.map(item => item.name.firstName).sort()
console.log(names)
for (let i = 0; i < names.length; i++) {
    const element = names[i];
    let listItem = `<li>${element}</li>`
    list.insertAdjacentHTML("beforeend", listItem)  
}*/

/*
staffObj.staff.forEach(element => {
    let listItem = `<li>${element.name.firstName}</li>`
    list.insertAdjacentHTML("beforeend", listItem)  
});*/

let arr = ["mer", "ha", "ba"];
console.log(arr)
localStorage.setItem("selam", JSON.stringify(arr));

let selam = localStorage.getItem("selam")
console.log(JSON.parse(selam));


import {Staff} from '../JS-118/person.js';

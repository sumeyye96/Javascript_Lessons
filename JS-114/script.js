/*let firstBtn =  document.getElementById("btn")
console.log(firstBtn.innerHTML)

//document.getElementById("btn").innerHTML = "Tıkla"

console.log(firstBtn.class)
console.log(firstBtn.title)

firstBtn.style["color"] = "red"
firstBtn.title = "merhaba"

let img = document.getElementById("img")
img.src = "resim.jpg"
img.alt = "resim"

img.id = "image"

console.log(img.getAttribute("alt"))  // olan bir attribute'u alır
img.setAttribute("class" , "image")  // olmayan bir özellik atar

img.className = "mer"
img.setAttribute("ab" , "cd")  // olmayan bir özellik atar

firstBtn.setAttribute("class", "second")

firstBtn.classList.add("active")
firstBtn.classList.remove("active")
console.log(firstBtn.classList.entries())
// yeni html elemanı oluşturma
//let newListItem = document.createElement("li")
let paraItem = document.createElement("p");
paraItem.innerHTML = "Bu yeni paragraf"
paraItem.style["color"] = "blue";
console.log(paraItem)
// appendChild
//document.write(paraItem) // write çalışmaz
//document.write("<p>paraItem</p>")

//document.body.appendChild(paraItem)
document.body.div.appendChild(paraItem)
//document.appendChild("body",paraItem)

let container = document.querySelector(".container")
let card = document.querySelector(".card")
console.log(container)
//container.appendChild(paraItem)
//card.appendChild(paraItem) // ekler
card.removeChild(paraItem) // siler
//container.removeChild(card)
*/

const listeItems = document.querySelectorAll("#list li")
//console.log(listeItems)
//console.log(listeItems[listeItems.length-1])

for (let i = 0; i < listeItems.length; i++) {
    listeItems[i].setAttribute("class", "list-item")
    
}

const h1Items = document.getElementsByClassName("title");
console.log(h1Items)

for (let i = 0; i < h1Items.length; i++) {
    console.log(h1Items[i].childNodes)
    for (let j = 0; j < h1Items[i].childNodes.length; j++) {
        console.log(h1Items[i].childNodes[j].nodeName === "span");
        
    }

    // let newSpan = document.createElement("span")
    // newSpan.innerHTML = `bu h1 - ${i+1}`
    // newSpan.style.display = "none"
    // h1Items[i].appendChild(newSpan)   
}

const ulItem = document.getElementById("list");
//console.log(ulItem.childNodes)
//console.log(ulItem.lastChild)



let buttonmun = document.getElementById("btn")


// function clickF() {
//     document.body.style["background-color"] = "blue"
// }

function clickF() {
    let newitem = document.createElement("li")
    let newlistitems = document.querySelectorAll("#list li")
    //console.log(ulItem.childNodes.length/2)
    let newALink = document.createElement("a")
    newALink.setAttribute("href", "index.html");
    newALink.innerHTML = `Number ${newlistitems.length+1}`
    newitem.appendChild(newALink)
    ulItem.appendChild(newitem)
}
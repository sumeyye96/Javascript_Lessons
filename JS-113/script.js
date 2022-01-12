//console.log(document)// id ile ulaşım // tek sonuç verir
let firstH1 = document.getElementById('first-title')

console.log(firstH1.innerText)
console.log(firstH1.innerHTML)

// class ile // array çıktı verir
let allH1 = document.getElementsByClassName("title")
//console.log(allH1)

for (let i = 0; i < allH1.length; i++) {
    console.log(allH1[i].innerText); 
}  

// tag name ile ulaşım // array çıktı verir
const allTagH1 = document.getElementsByTagName("h1")
//console.log(allTagH1)

for (let i = 0; i < allTagH1.length; i++) {
    console.log(allTagH1[i].innerText); 
} 


// queryselectorAll  // array çıktı verir
const queryH1class =  document.querySelectorAll(".title")
console.log(queryH1class)
const queryH1Id =  document.querySelectorAll("#first-title")
console.log(queryH1Id)
const queryH1Tag =  document.querySelectorAll("h1")
console.log(queryH1Tag)
const queryH1Span =  document.querySelectorAll("h1 span")
console.log(queryH1Span)
const queryH1H4 =  document.querySelectorAll("h1 ,h4")
console.log(queryH1H4)

// queryselector  // ilk bulduğunu getirir. // tek sonuç verir
const queryH1classFirst =  document.querySelector("h1.title")
console.log(queryH1classFirst)

let new1 = "h1";
let new4 = "h4";
const querynew =  document.querySelectorAll(`${new1}, ${new4}`)
console.log(querynew)

let firstItem = document.getElementById('first-title')

firstItem.innerText = "paragraf"
firstItem.innerHTML = "<p>paragraf</p>"


let center = document.querySelector(".center")
center.innerHTML = "<li>Secondary Item</li><li>Third Item</li>"  // center altına iki yeni içerik ekledi, eskisini sildi

let searchInput = document.getElementById("search")

searchInput.style["border-color"] = "red"
searchInput.style.borderColor = "yellow"
console.log(searchInput.style.border)

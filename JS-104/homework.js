//Write a function findMax that takes three arguments and returns their maximum.

function findMax(x,y,z) {
  
    if (x>y && x>z) {
        return `${x} is the maximum`
    } else if (y>x && y>z) {
        return `${y} is the maximum`
    } else if (z>x && z>y) {
        return `${z} is the maximum`
    }
}
console.log(findMax(8,9,3))

//Declare a function name evensAndOdds. It takes a positive integer (from prompt) as parameter and prints out the number even or odd.

let number = prompt("Pozitif bir doğal sayı giriniz.")

function evensAndOdds(number) {
    if (number %2 ===0) {
        return `${number} sayısı çifttir.`
    } else {
        return `${number} sayısı tektir.`

    }
}
console.log(evensAndOdds(number))

//Write a function which generates a randomUserIp. Ex: 168.127.25.2

function randomUserIp() {
    let param1= Math.floor(Math.random() * 1000);
    let param2= Math.floor(Math.random() * 1000);
    let param3= Math.floor(Math.random() * 100);
    let param4= Math.floor(Math.random() * 10);
return `Ip adresiniz : ${param1}.${param2}.${param3}.${param4}`
}
console.log(randomUserIp())



//Declare a function fullName and now it takes firstName, lastName as a parameters and it returns your full - name with the count of characters inside your name. "Mustafa TT - 10 karakter"
//Rewrite your function to print a result according to your name ending : Ex. "Mustafa'dan sevgilerle" , "Ali'den sevgilerle", "Fatoş'tan sevgilerle".
//Challenge: take names from prompt.

let adSoyad = prompt("Adınızı ve soyadınızı giriniz.")
function fullName(adSoyad) {
    console.log(`${adSoyad}'dan sevgilerle.`)
    return adSoyad.length
}
console.log(fullName(adSoyad))
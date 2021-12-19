//Write a function findMax that takes three arguments and returns their maximum.

let var1 = prompt("birinci sayıyı giriniz")
let var2 = prompt("ikinci sayıyı giriniz")
let var3 = prompt("üçüncü sayıyı giriniz")


function findMax(param1, param2, param3) {
    if (param1 > param2 && param1 > param3){
        return param1
    } else if (param1 > param2 && param1 < param3){
        return param3
    } else if (param1 < param2 && param1 > param3){
        return param2
    }
}

findMax(var1, var2, var3); 


//Declare a function name evensAndOdds. It takes a positive integer (from prompt) as parameter and prints out the number even or odd.


function evensAndOdds(param) {
    if (param/2 === 0){
        return "number is even";
    }
}

evensAndOdds(5)



//Write a function which generates a randomUserIp. Ex: 168.127.25.2

function userIP() {
    let num1 = Math.random()
    let num2 = Math.random()
    let num3 = Math.random()
    let num4 = Math.random()
    return num1 + "." + num2 + "." + 
}




//Declare a function fullName and now it takes firstName, lastName as a parameters and it returns your full - name with the count of characters inside your name. "Mustafa TT - 10 karakter"
//Rewrite your function to print a result according to your name ending : Ex. "Mustafa'dan sevgilerle" , "Ali'den sevgilerle", "Fatoş'tan sevgilerle".
//Challenge: take names from prompt.


function name(firstName, lastName) {
    return firstName + " " + lastName + "," + "adoınızdaki karakter sayısı " + firstName.length 
}


function name(firstName, lastName) {
    
}
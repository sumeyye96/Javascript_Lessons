let firstName= "Javascript";

console.log(firstName.length) // 10
console.log(firstName[9]) // t

let metin = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions"

console.log(metin[metin.length-1])  // son karakter

let nam="JavaScript Lesson"

console.log(nam.toLowerCase())
console.log(nam.toUpperCase())
console.log(nam.substring(4))   // Script
console.log(nam.substring(2,5)) // vaS
console.log(nam.substr(2,5)) // vaScr
console.log(nam.split("")) // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't', ' ', 'L', 'e', 's', 's', 'o', 'n']
console.log(nam.split(" ")) // ['JavaScript', 'Lesson']
console.log(metin.split(".")) //
let sonKelimeBulma = metin.split(" ")
console.log(sonKelimeBulma[sonKelimeBulma.length-1])

nam="JavaScript Lesson   "
console.log(nam)
console.log(nam.trim())
console.log(nam.includes("i")) // true

console.log(nam.charAt(4)) // "S"
console.log("S".toLowerCase()) // "s"
console.log(nam.charAt(4).toLowerCase()) // "s"

// string concetination
let yeni = "yeni" + "dünya" + 5

console.log(yeni)

let isim = "merhaba";
let ilkKarakter = isim.charAt(0).toUpperCase();  
console.log(ilkKarakter)

let sonrakiler = isim.substring(1);
console.log(sonrakiler)

let büyükMerhaba = ilkKarakter + sonrakiler;
console.log(büyükMerhaba)

isim = ilkKarakter + sonrakiler;
console.log(isim)

isim = "mustafa"
console.log(isim)
console.log(isim.charAt(2))
console.log(ilkKarakter.concat(sonrakiler, " oradakiler"))

console.log(typeof 'Mustafa') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined

console.log(typeof isim.charAt(-2)) // string


let a = "5.5";
let b = 6;
console.log(a+b);  // 5.56  string
console.log(Number(a)  + b);  // 11.5
console.log(parseFloat(a)  + b);  // 11.5
console.log(parseInt(a)  + b);  // 11
console.log( +a  + b + typeof (+a+b));  // 11.5number

console.log( a  + String(b));  // 5.56  string
console.log( a  + b.toString());  // 5.56  string
console.log( a  + ""+b);  // 5.56  string

let piNumber = Math.PI
console.log(piNumber)
console.log(Math.round(piNumber)) // en yakına
console.log(Math.floor(piNumber))  // zemine
console.log(Math.ceil(piNumber))  // yukarı

let randumNumber = Math.random();  // 0 - 0.9999
console.log(randumNumber * 100) // 0 - 99.99999
console.log(Math.floor(randumNumber * 100)) // 0 - 99
console.log(Math.floor(randumNumber * 100) +1) // 1 - 100
console.log(Math.floor(randumNumber * 47) +1) // 1 - 47
console.log(Math.ceil(randumNumber * 47)) // 1 - 47
console.log(Math.floor(randumNumber * 20) +30) // 30 - 49

//OPERATORS
let x = 18;
let w = 20;
let y = 6 ;

console.log(x+y)  //24
console.log(x-y)  //12
console.log(x/y)  //3
console.log(x*y) // 108
console.log(x+x*y) //126
console.log((x+x)*y) // 216
console.log(++x)  // 19
console.log(--x)  // 18 normalde 17

console.log(x%y) // 0
console.log(w%y) // 2



w += 5;
console.log(w);

let net = 15;
console.log(net)
net = net + 4;
console.log(net);
net += 4    /// yukarıdaki ile aynı
net -=10
console.log(net) //13


let c = 15
let d = "15"
console.log(c == d) // true 
console.log(c != d) // false 
console.log(c === d) // false 
console.log(c !== d) // true 

let m = "ali"
let n = "ali"
console.log(m == n) // true 
console.log(m === n) // true 
console.log(m !== n) //  false

let num1 = 9;
let num2 = 11;
let num3 = 11;

console.log(num1 > num2); //false
console.log(num1 < num2); //true
console.log(num1 >= num2); //false
console.log(num1 <= num2); //true
console.log(num2 <= num3); //true


console.log(true && true) // true
console.log(true && false) // false
console.log(false && false) // false
console.log((num2 <= num3) && (num1 <= num2)) // true
console.log((num2 < 15) && (num1 === 11)) // false
console.log((num2 < 15) || (num1 === 11)) // true
console.log((num2 < 15) || (num1 === 9)) // true

let isBig = num1 > 18;
console.log(isBig)
let isBiggest = num1 > 18 ? true : false;
console.log(isBiggest)

let isBigger = num1 > 18 ? "evet büyük" : "hayır küçük";
console.log(isBigger)

let newd=null;
num1 > 18 ? newd=15 : newd=25;
console.log(newd)  // 25



let yen = 47;
let tl = null 

yen === 45 ? (tl = 1) : (tl = 2) ;

let usd = tl*13;
let eur = tl*15;
console.log(tl, usd ,eur)
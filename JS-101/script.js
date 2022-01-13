
document.write("<p>merhaba</p>")


//burası header için yazıldı
//console.log    ("Merhaba from");
//console.log("ggggggggggggggggggggggggggggggggggggggggggscript");

//alert("Sayfada uyarı mesajı")
//window.alert("Sayfada uyarı mesajı")

var firstNameMehmet= "Mehmet";
let lastNameMehmet= "türk";
const age = 47;

// console.log("Mehmet 46 yaşında");
console.log(firstNameMehmet , age , "yaşında");


//Pascal Case
let FirstName = "ali";  // geçerli

//Camel Case
let firstName = "Mehmet";  //tavsiye
const lastName = "Türk";  //tavsiye
var ageMehmet = 56;

//Snake Case
let first_name = "Mehmet";  //geçerli

//Kebap Case
//let first-name = "Mehmet"  // CSS'de kullanıyoruz

console.log(FirstName, firstName ,first_name);

var ageMehmet = 47;  // yukarıda olmasına rağmen değiştirdi
 firstName = "Mustafa" // yukarıda let olduğu için tekrar atanabilir
//lastName = "Demir"  // yukarıda const olduğu için tekrar atanamaz
console.log(firstName, lastName, ageMehmet);



let team1="şahin", team2="doğan", team3="kartal", team4="atmaca"
console.log(team1 + team2 + team3, team4)
console.log("merha"   +   "ba");
console.log(age + 5);  // 52
console.log(age + "5");  // 475

// String

let dataString1 = "Merhaba"
let dataString2 = 'Merhaba' + " " + age + " " + "yaşındaki" + " " + firstName;
let dataString3 = `Merhaba ${age} yaşındaki ${firstName}`
console.log(dataString2)
console.log(dataString3)

// Number
let numberValue1 = 5;
let numberValue2 = 5.5;
console.log(numberValue1+numberValue2 ) // 10.5
console.log(numberValue1,numberValue2 )  // 5 5.5

//Boolean
let isMarried = true;  // false;
let ageIsOver18 = false; 

//undefined
let telefon;
console.log(telefon)

//Null
let nullValue = "";
console.log(nullValue)

function nameFunc(params) {
    let test = "fonksiyon içi";
    console.log(test);
    console.log(firstName) // local scope , global scope'a erişebilir.
}
nameFunc()

//console.log(test); // test local scope olduğu için çalışmaz

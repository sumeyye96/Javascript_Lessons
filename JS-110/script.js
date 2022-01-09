/*var firstname = "mustafa";

let first = "mmm"
const last = "ddd";

first = "kkk";
//last = "ttt";  // consttant atama yapamazsın

let undef;
if (true) {
    var varscope = "this is var"
    let block_var = "this is block"
}
// console.log(varscope) // this is var
// console.log(undef)   // undefined
// console.log(block_var)  // reference error

//true / false örnekleri;

// 4 > 3 && 10 < 12  // true && true ==> true
// 4 > 3 && 10 > 12  // true && false => false
// 4 > 3 || 10 < 12  // true
// 4 > 3 || 10 > 12  // true
// !(4 > 3)  // false
// !(4 < 3)  // true
// !(false)  // true
// !(4 > 3 && 10 < 12)  // false
// !(4 > 3 && 10 > 12)  // true
// !(4 === '4')  //  true
// (4 == '4')  //  true


let rain = 98; // true  // herhangi bir değer var ise
rain = false;
rain = 0;
rain = null;
rain = undefined;
rain = NaN;
rain = "";

let yeni = ""
if (yeni) {
//console.log("yeni değişken var")
}

if (!yeni) {
//console.log("yeni değişken yoksa")
}

testFunc()
let muz = "b" + "a" + + "b" + "a";
// console.log(muz)
// console.log("4"-3);
// console.log("4"+3);

let switchVar = 5;

switch (switchVar) {
    case 5:
        console.log("5'e eşit")
        break;
    case 6:
        console.log("6'ya eşit")
        break;

    default:
        break;
}
switch (switchVar===5) {
    case true:
        console.log("5'e eşit")
        break;
    case false:
        console.log("6'ya eşit")
        break;
    default:
        break;
}
switch (true) {
    case switchVar===5:
        console.log("5'e eşit")
        break;
    case switchVar===6:
        console.log("6'ya eşit")
        break;
    default:
        break;
}

if (switchVar === 5) {
    console.log("5'e eşit")
} else if (switchVar === 6) {
    console.log("5'e eşit")
}
if (switchVar) {
    console.log("5'e eşit")
} else if (!switchVar) {
    console.log("5'e eşit")
}

function testFunc() {
   console.log("function içi") 
}
console.log("function dan sonra")

function tester(a ,b) {  // kendisine verilen değerler iki ile carpan
    console.log((a+b)*2);
}

tester(5 , 7);

let yenideger = 2;
function check(param1, param2) {
    if (param1 === param2) {
        console.log(`${param1} ile ${param2} eşit`)
        yenideger += param2;
    } else {
        console.log("birbirlerine eşit değiller")
    }
}

check(switchVar,7)
check(switchVar,5)
check(switchVar,36)
console.log(yenideger)

function check2(param1, param2) {
    if (param1 === param2) {
        console.log(`${param1} ile ${param2} eşit`)
        console.log(param1 + "ile" + param2 + "eşit")
        let newdeger  = yenideger + param2;
        return newdeger;
    } else {
        console.log("birbirlerine eşit değiller")
        console.log('birbirlerine ${} eşit değiller')
        console.log(`birbirlerine ${switchVar} eşit değiller`)
    }
}
check2(switchVar , 5);  // === newdeger
console.log(check2(switchVar , 5) + 36)  // === newdeger+36


const arrowFunc = (params)  => {
    
}
arrowFunc()

let arr = [6 , "number" , {} , 8, ["6" , 7] , true]
arr[0]= 4;
console.log(arr[0]);

let filteredArr = arr.filter((item)=>{
    return item > 3;
})
let filteredArr5 = arr.filter((item,i, array)=>{
    if(i === 3){
        return item;
    }
})
console.log(filteredArr5)

let filteredArr2 = arr.filter(item => item > 3)

console.log(filteredArr2)


let finded = arr.find((item)=>{
    return item > 6;
})
console.log(finded)

let newArr = []
arr.forEach(element => {
    if(element > 3) {
        newArr.push(element)
    }
});
console.log(newArr)

let num = "";
for (let i = 0; i < 10; i++) {
    num += "#"
    console.log(num)
}

let tree = "";
for (let i = 0; i < arr.length; i++) {
    tree += arr[i]
    console.log(tree)
}

for (i in arr) {  // index number
    console.log(i)
}
for (item of arr) {  // her bir eleman
    console.log(item)
}*/


//////// PROJE


var haystack_1 = ['3', '123124234', undefined, 'needle', NaN, 'world', "nee", 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'nedle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

function findNeedle (arr) {
  let ifFind = arr.find((item)=> item === "needle")
   let indexNum = arr.indexOf(ifFind) 
//let ind = arr.findIndex((item)=> item === "needle")
    //console.log(ind)
  console.log(`Bu array'de ${ifFind} var. index numarası da ${indexNum}`)
}

findNeedle(haystack_1);

function findNee(arr, value) {
    //let ifFind = arr.find((item)=> item.includes("nee"))  // undefined olduğu için patladı
    let ifFind = arr.find((item)=> typeof item === "string" && item.includes(value)) 
    console.log(ifFind) 

// find mantığı ile ilk bulduğunu döndü
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === "string"){
            //console.log(arr[i])
           if (arr[i].includes(value)){
               return  (`Bu array'de ${value} kelimesi index numarası da ${i} de var.`)
           } else {
               return "yoktur"
           }
        }   
    } 
    //console.log(ifFind)
}
console.log(findNee(haystack_3, "wor"))


// filter mantığı
function filterword(arr, value) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === "string"){
           if (arr[i].includes(value)){
            result.push(`Bu array'de ${value} kelimesi index numarası da ${i} de var.`)
           }
        }   
    }
    return result; 
}
console.log(filterword(haystack_1, "nee"))
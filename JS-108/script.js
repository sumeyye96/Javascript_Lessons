let myarray = ['first',44, 'second', 'third', 'fourth']
let totalArray = [1, 2, 3, 4, 5, 6, 7, 8]
// let sum1=0;
// let sum2=0;

// for (let i = 0; i < totalArray.length; i++) {
//             sum1 += totalArray[i]   
//         }
let numArray = [4, 25, 333,5 , 42, 3]

// for (let i = 0; i < numArray.length; i++) {
//     sum2 += numArray[i]   
// }
let a = "50";

function compare(params) {
    if (params >= 50) {
        console.log(`${params} elliden büyük`)
    }  
}
//compare(a)

// for (let i = 0; i < numArray.length; i++) {
//     const element = numArray[i];
//     console.log(element)
// }

function calculate(params) {
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        //console.log(element)
    }
}

// calculate(totalArray)
// calculate(numArray)
// calculate(myarray)

function calcul(params) {
    for (let i = 0; i < params.length; i++) {
        if (params[i] > 5) {
            return;
        }
        const element = params[i];
        console.log(element)
    }
}

//calcul (totalArray);
//calcul (numArray);

function calcule(params) {
    for (let i = 0; i < params.length; i++) {
        if (params[i] === 5) {
            console.log(params[i]*5);
        }
        if(params[i]>33){
            return;
        }
        const element = params[i];
        console.log(element)
    }
}

//calcule (totalArray);
//calcule (numArray);
//console.log(typeof a)
function calcSum(params) {
    let summer = "";
    let sum = 0;
    if(params.length > 0) {
        //console.log("girilen array uzunluğu==>", params.length)
        for (let i = 0; i < params.length; i++) {
            if(typeof params[i] === "number"){
                sum += params[i]   
            } else {
                summer += params[i]
            }
            
        }
    }
    return [sum, summer];
}
// console.log(calcSum(totalArray) )
// console.log(calcSum(numArray) )
// console.log(calcSum([]) )
// console.log(calcSum(myarray) )

let result = calcSum(numArray);
 //console.log(result)

 let newFunc = calcSum;
//console.log(newFunc(totalArray));


function highOrder(params) {
    return params*4+2;
}

//console.log(highOrder(5))

let numara = 5;
//console.log(numara)

//console.log(highOrder(numara))

function numFive(param) {
    return param+7;
}
//console.log(numFive(numara))

let numara2 = numFive(6);
//console.log(numara)
//console.log(highOrder(numFive(numara)))

const callback = (x) => {
    return x*2;
}

function hangar(param) {
    return param;
}

//console.log(hangar(callback))

const hang = (a,c) => {
    const hanging = (b) => {
        return a+(b-c)*2;
    }
    return hanging;
}
console.log(hang(5,4)(2));

const hanger = (a,c) => {
    return callback(a)+c;
}
console.log(hanger(3,9));


let newArr = [5 , 6 , 9, 6 , 15, "7"];

function find6(params) {
    for (let i = 0; i < params.length; i++) {
        if (params[i] === 6) {
            return params[i];
        }  
    }
}
console.log(find6(newArr))


///filter

// const filteredArray = newArr.filter(
//     function name(params) {
//         return params===6;
//     }
// )
// const filteredArray =newArr.filter(item=>item>6);
// console.log(filteredArray);

//const filteredArray =newArr.filter(item=> (item>6 && item<30));

let filtering = ["ahmet", "49", "mehmet", "celil", 60, "memo"];

console.log(filtering.includes("ahmet"));

const newfil = filtering.filter(item => typeof item === "string");
// koşula uyan tüm elementleri döner
console.log(newfil)

const newfil2 = filtering.find(item => typeof item === "string");
const newfil3 = filtering.find(item => item*3);
// koşula uyan ilk elemanı döner
console.log(newfil3)

const newArrayim = filtering.map(item => item*3);
console.log(newArrayim)


//const newArrayim3 = filtering.map(item => item.toUpperCase());
//console.log(newArrayim3)

const newArrayim2 = filtering.map(item => {
    if(typeof item === "string"){
        return item.toUpperCase();
    } else {
        return item;
    }  
});
//yapılan işlemin sonucunu döner, lengt kaç ise o kadar length döner.
// her elemena işlem uygulayıp geri döner;
console.log(newArrayim2)


let myarrim = ['first',44,"repeat", NaN, 'second', 'third', 'fourth']


const mappedArr = myarrim.map(item => {
    if(typeof item === "string"){
        let firstChar = item.charAt(0).toUpperCase();
        let lastChars = item.substring(1)
        let result = firstChar+lastChars;
        return result;
    } else {
        return item;
    }
}
);
console.log(mappedArr)


let sum2 =0
for (let i = 0; i < mappedArr.length; i++) {
    sum2 += mappedArr[i];
}
console.log(sum2)
let sum3 = 0;

mappedArr.forEach(element => {
     sum3 += element;
});
console.log(sum3)


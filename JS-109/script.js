const words = [
    'spray',
    'limit',
    'elite',
    'exuberant',
    'destruction',
    'present',
    'happy'
  ];
  const palindrome = [
    'Anna',
    'asa',
    'civic',
    'common',
    'Kayak',
    'Level',
    'Madam',
    'Mom',
    'Noon',
    'Rotor',
    'Sagas',
    'Solar',
    'Tenet',
    'Stats',
    'Wow'
  ];

// array.forEach(element => {
  
// });


for (let i = 0; i < words.length; i++) {
  console.log(words[i]); 
}

words.forEach(function name(params) {
  console.log(params)
})
words.forEach(params=> console.log(params.toUpperCase()))

words.forEach((params)=> {
  let first = params.charAt(0).toUpperCase();
  let last = params.substring(1);
  console.log(first+last)
})


const newArray1 = words.map(item=>item);
const newArray2 = words.map(function name(params) {
  return params.toUpperCase();
});
const newArray21 = words.map((params)=> {
  return params.toUpperCase();
});
const newArray3 = words.map(function name(params) {
  let first = params.charAt(0).toUpperCase();
  let last = params.substring(1);
  return first+last;
});
console.log(newArray3)


const findItem = palindrome.find(item => item === "Asa")
console.log(findItem)
if (findItem) {
  console.log("find item var")
   palindrome.push("Musa");
}
console.log(palindrome);

const returnItem = palindrome.find(item => {
  if (item === "Asa") {
    return item
  }
})

const returnItem2 = palindrome.find(item => {
  if (item.length > 5 ) {
    return item
  }
})
console.log(returnItem2)

if(returnItem2) {
  console.log("return item 2 var")
}

const returnItem3 = palindrome.find(item => {
  let first = item.charAt(0).toUpperCase();
  let last = item.substring(1,2);
  let final = first + last;
  console.log(final)
  if (final === "Ci" ) {
    return item;
  }
})

console.log(returnItem3)


const newResult = palindrome.filter(item => item.includes("a"))
console.log(newResult)

const filtered = palindrome.filter(item => !item.includes("a"))
console.log(filtered)

const filtered2 = palindrome.filter(item => item === "asa")
console.log(filtered2)

const filtered3 = palindrome.filter(item => item.length < 4)
console.log(filtered3)


const numbers = [0 , 4 , 54 , 62 , 5, 89 , 5];

const sum = numbers.reduce((a, b) => a + b, 0) // virgülden sonraki değer başlangıç toplam değeri
const sum2 = numbers.reduce((a, b) => a + b)
console.log(sum)

let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
  sum1 += numbers[i];  // sum1 = sum1 + numbers[i]
}

const sum3 = numbers.reduce((a, b) => a + b)   // - olursa çıkarma yapark tüm öğeleri birleştirir
console.log(sum3)


const everyItem = palindrome.every(item => item.length > 5);
console.log(everyItem);

function check(params) {
  for (let i = 0; i < params.length; i++) {
  if (params[i].length <= 3){
    return false;
  };
}
}
console.log(check(palindrome))


const someItem = palindrome.some(item => item.length > 5);
console.log(someItem);

const indexItem = palindrome.findIndex(item => item.length > 5);
console.log(indexItem);



const sorted = numbers.sort((x,y) => x-y )
console.log(sorted)

const sortedrev = numbers.sort((a,b) => b-a )
console.log(sortedrev)

const sortedLength = palindrome.sort((x,y) => x.length - y.length )
console.log(sortedLength)


const numbered = [0 , 4 , "a", 54 , 62 , 5, 89 , 5];

const filtered22 = numbered.filter(item => typeof item === "number")
const sorted22 = filtered22.sort((a,b) => b-a)

const res = numbered.filter(item => typeof item === "number").sort((a,b) => b-a)
console.log(res)

const reswithMap = numbered.filter(item => typeof item === "number").sort((a,b) => b-a).map(item=>item*2);
console.log(reswithMap);


// const karma = (item) => {
//   return item*2;
// } 
// console.log(filtered22.karma(item=>item));

// kod zamanlayıcı / tekrarlayıcı

const date = +new Date();
const datestart = +new Date("2021-12-27 22:18");

console.log(datestart)
// setInterval(() => {
//   console.log("set interval çalıstı")
// }, datestart-date);  //belli bir zaman göre çalıştırma


let a = setInterval(() => {   // daha sonra durdurmak için bir değişkene atıyoruz
  console.log("set interval çalıstı")
}, 2000);


// kod geciktirici - tek seferlik
setTimeout(() => {
 clearInterval(a)     // setinterval durdurur.
  console.log("set timeout çalıstı")
}, 10000);  // milisaniye

setTimeout(() => {
  console.log(check(palindrome))
}, 6000);

/// do-while


for (let i = 0; i < 5; i++) {
  console.log("merhaba")
}
//while for'a benzetilmiş hali
let i = 0;
while (i<5) {
  console.log("merhaba")
  i++;
}
//while normal hali, koşul true ise sürekli çalışır. koşul false olana kadar.
// while (condition) {
//    console.log("çalıştı")
// }

// do-while önce tek sefer calışır, koşula bakar, koşul true ise çalışmaya devam eder false ise durur.
do {
  console.log("calıstı")
} while (false);



//Write a function findMax that takes three arguments and returns their maximum.
/*
let var1 = prompt("birinci sayıyı giriniz")
let var2 = prompt("ikinci sayıyı giriniz")
let var3 = prompt("üçüncü sayıyı giriniz")

function findMax(param1, param2, param3) {
    console.log(param1, param2, param3)
    if ((param1 > param2) && (param1 > param3)){
        return param1;
    } else if ((param1 > param2) && (param1 < param3)){
        return param3;
    } else if ((param1 < param2) && (param2 > param3)){
        return param2;
    }
}

console.log(findMax(var1, var2, var3)); */
/*
let arguman = "Merhaba Function"

function regularFunc(params) {
    return params;
}
regularFunc(arguman);

const expressFunc = function(params) {
    return params;
}
expressFunc(arguman);


const arrowFunc = (params) => {
    return params
}
// const arrowFunc = (param1, param2) => {
//     return (param1 + param2);
// }
arrowFunc(arguman);

const arrowFunc1 = params => {
    return params
}
arrowFunc1(arguman)


arguman = 15;

const arrowFunc2 = params => params * 2;   //tek satırlık return yapar

console.log(arrowFunc2(arguman))


//OK (FUNCTION) GOREVI VE ISLEVI GORUR
const arrowExample = (param1, param2) => {
         let result1 = param1 + param2;
         let result2 = param1 - param2;
         return ([result1, result2])
     }

     console.log(arrowExample(6, 3))*/
     /*
     
     let name = "Mark";

     const logUserName = () => {
        let isLoggedIn = true;
        let name = 'Guest User';

        if (isLoggedIn) {
          const name = 'John Wayne';
          console.log(name); // John Wayne
        }

        console.log(name); // Guest User 
      };

      logUserName()
      
      console.log(name); // Mark*/
/*
      let firstName = "Ahmet";
      //console.log(firstName[0]);

      let myArr = ["Merhaba" , 5 , true]

      console.log(myArr)
      console.log(myArr[0])  // Merhaba
      console.log(myArr[1]) // 5

      // Array oluşturma
      // 1.
      let myArray = [3, "Merhaba", "Dünya", 5]; // en basit array üretimi
      console.log(myArray)
      
      //2.
      let newArr = new Array(3);
      console.log(newArr.length)  // 3
      console.log(newArr[1])  // undefined
      
      let newArray = new Array(3, "Merhaba", "Dünya", 5);
      console.log(newArray)
      console.log(newArray[1])
      
      // içerik değiştirme
      newArray[2] = "Jupiter";
      newArray[6] = "Jupiter";
      
      console.log(newArray)

      // değişik içerikler
      let var1 = "isim"
      let var2;
      let degArr = [null, var1, var2, undefined, NaN, 5, "string"]
      console.log(degArr)

      // 3.method
      let lastName = "demir turk";

      let newestArr = lastName.split();
      console.log(newestArr)
      
      let newestArr1 = lastName.split("");
      console.log(newestArr1)
      
      let newestArr2 = lastName.split(" ");
      console.log(newestArr2)


      let letArr = ["Mer", "Ha", 5]
      const constArr = ["Mermer", "Halhal", 55]
      letArr[1] = "Harhar";
      constArr[1] = "Hayhay";
      
      //constArr = ["Mermer", "Hayhay", 55];   /// yanlış , yeni içerik ile dğeiştiremem
      constArr[6] = "burası 6"
      
      letArr = "yepyeni bir içerik ile değiştirebilirim"
      //letArr[1,3] = [2, "Harhar"];
      
      console.log("letArr ==>", letArr)
      console.log("constArr ==>", constArr)*/


let newArr = new Array(8).fill(3)

console.log(newArr)

let newArray = new Array(2)

newArray[0] = 3
newArray[1] = 5

console.log(newArray)
      
      
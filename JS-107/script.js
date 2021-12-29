
for ( let i = 0 ; i < 3 ; i++ ) {
    //console.log(i)
}

for ( let i = 0 ; i < 3 ; i++ ) {
    //console.log(i+5)
}
for ( let i = 0 ; i <= 3 ; i++ ) {
    //console.log(i+5)
    //console.log(Math.random())
}
for ( let i = 0 ; i === 3 ; i++ ) { // i=0 , i===3 olamayacağı için loop başlamadan biter
    //console.log(i+5)
}

 let result = 0;
// for ( let i = 0 ; i < 3 ; i++ ) {
//     result = i;
// }

// for ( let i = 0 ; i < 3 ; i++ ) {
//     result += i;
// }
// console.log(result)

for ( let i = 5 ; i > 0 ; i-- ) {
    result += i;  
}
 //console.log(result)

//for ( let i = 0 ; i < 10 ; i=i+2 ) {
for ( let i = 0 ; i < 10 ; i+=2 ) {
    result += i;
}
//console.log(result)


let sampleArr = ["m", "u", "r", "a" ,"t"];
let randomNum = Math.floor(Math.random()*5)
//0,99 * 5 = 4,9  ==> 4
//0,002 * 5 = 0,01  ==> 0
//console.log(sampleArr[randomNum])

for ( let i = 0 ; i < 10 ; i+=2 ) {
    let random = Math.floor(Math.random()*5)
    //console.log(sampleArr[random])   
    console.log(sampleArr[i])   
}

// 1.run => sampleArr[0] => "m"
// 2.run => sampleArr[2] => "r"
// 3.run => sampleArr[4] => "t"
// 4.run => sampleArr[6]=> undefined
// 5.run => sampleArr[8] => undefined

//exktra
// let random;
// for ( let i = 0 ; i < 10 ; i+=2 ) {
//     let temp = random;
//     random = Math.floor(Math.random()*5)
//     if(temp != random) {
//         console.log(i);
//     }
//     //console.log(sampleArr[random])   
// }



let myArray = ["JS", "Mongo", "React", true, "JS"]
//for (let i = 0; i < 4; i++) {
for (let i = 0; i < myArray.length; i+=2) {
    //console.log(myArray[i]);   
}
// 1.run => myArray[0] => "JS"
// 2.run => myArray[2] => "React"


for (let i = 0; i < myArray.length; i+=2) {
    if(myArray[i] === "JS"){
        //console.log("hey JS var burada")
    } 
}


let myNum = [9, 3, 7 ];
for (let i = 0; i < myNum.length; i++) {
    
    if(myNum[i] > myNum[i+1]){
        console.log("ilk değer ikinciden büyük")
        let temp = myNum[i]
        myNum[i]=myNum[i+1]
        myNum[i+1]=temp
    }
    
    
    //console.log(sortedArray);   
    //console.log(myNum[i]);   
}
//console.log(myNum); 

let arrayim = [3, 6 ,7];
//let sum = arrayim[0] + arrayim[1] + arrayim[2]; // classic way

let sum = 0;
for (let j = 0; j < arrayim.length; j++) {
    sum  += arrayim[j];
}
//console.log(sum)
//console.log(sum/arrayim.length)

// 1. run => sum = sum + arrayim[0] => sum = 0+3 = 3
// 2. run => sum = sum + arrayim[1] => sum = 3+6 = 9
// 3. run => sum = sum + arrayim[2] => sum = 9+7 = 16

let summer = 0;
for (let j = 0; j < 3; j++) {
    summer  += 1 ;    /// summer = summer +1 ;
    //console.log(summer)
}

let summing = 1;
for (let j = 1; j < 5; j++) {
    summing  *= j ;
}
//console.log(summing)

let yaslar = [["ahmet",3],["veli",5], ["celil",6]];
//let sum = arrayim[0] + arrayim[1] + arrayim[2]; // classic way
let sumort = 0;
for (let j = 0; j < yaslar.length; j++) {
    sumort  += yaslar[j][1];
}
//console.log(sumort)
//console.log(sumort/arrayim.length)

let arrayst = ["JS", "Mongo", "React", "JS"]
let string = "";
for (let j = 0; j < arrayst.length; j++) {
    string  += j+1+"."  + (arrayst[j]).toUpperCase() + " "; 
}
//console.log(string)


let newArr = [1,2,5,6,4,5,63,2,1,4,65,8,7,41,26];
let summy = 0;
// for (let i = 0; i < newArr.length; i++) {
//     if(newArr[i] < 10) {
//         console.log(newArr[i])
//         summy += newArr[i];
//     } 
// }
for (let i = 0; i < newArr.length; i++) {
    if(newArr[i] > 10) {
        console.log(newArr[i])
        continue;  // bulduğu değeri denkeleme sokmadan bir sonraki loop'a geçer
    } 
    summy += newArr[i];
}
console.log(summy)
// 1. run => summy = summy + newArr[0] => summy =  = 1
// 2. run => summy = summy + newArr[1] => summy =  = 3
// 3. run => summy = summy + newArr[2] => summy = = 8
// 4. run => summy = summy + newArr[2] => summy = = 14
// 5. run => summy = summy + newArr[2] => summy = = 18
// 6. run => summy = summy + newArr[2] => summy = = 23
// 7. run => summy = summy + newArr[2] => summy = = pas geçiyor çünkü değer 63, 10'dan büyük
// 8. run => summy = summy + newArr[2] => summy = = 25
//...
//...
//...

for (let i = 0; i < newArr.length; i++) {
    if(newArr[i] > 10) {
        console.log(newArr[i])
        break;  // bulduğu değere gelince denklem bitiyor bir sonraki loopa geçmiyor. for loop sonlanıyor
    } 
    summy += newArr[i];
}
console.log(summy)



// while
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
console.log('final value of i = ', i); 

// do while
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 10)
console.log('final value of k = ', k); 


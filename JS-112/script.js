/*
let model = "dışardan model"

let araba = {
    marka : "Jaguar",
    model : "XS",
    modelYear : [2020, 2022],
    benzin : 10,
    info : function (params) {
        console.log(`Markası : ${this.marka}, modeli : ${this.model}, Sahibi:${params}`)
    },
    setFuel (params) {
        this.benzin += params
    },
    getFuel:(params) => {
        console.log(params)
        araba.km = params;
        let result = araba.km * araba.benzin
        console.log(araba.benzin)
       return result
    }
}

console.log(araba.benzin)
console.log(araba["benzin"])
araba.info("mustafa")
araba.setFuel(15);
console.log(araba.benzin)
//araba.getFuel(1000)
console.log(araba.getFuel(1000));
console.log(araba)

// getter ve setter'lar method'lar gibi çalışıyor ve aynı işlemleri yapıyor.
let student = {
    name: "ali",
    surname: "",
    age:25,
    get fullname () {
        if (this.name && this.surname){
            return `${this.name} ${this.surname}`;
          } else {
            return 'Missing name or surname.';
          }      
    },
    set ageUpdate (num) {
        if (this.age > 24) {
           this.age += num;
        } else {
            console.log("he is young") 
        }
    }
}

document.write(student.fullname);
student.ageUpdate = 4;
console.log(student.age)
*/

// destructuring ve spreading
// spread
let a =[5, 3, 6, "yedi"];
let b = [...a , 8]
console.log(b)

let student = {
    name: "ali",
    surname: "turko",
    age:25
}
/*

let newStu = {...student, surname:"deli", ders:"Math"}
//console.log(newStu)
newStu.name = "mehmet"
//console.log(student)


let copyStu = student;
copyStu.surname = "yeni";
console.log(student)
*/
// destruct
const first = a[0]; // klasik yol
console.log(first)
const [ilk, ikinci, ucuncu] = a  // => [ilk, ikinci, ucuncu ] = [5, 3, 6]
console.log(ilk, ikinci, ucuncu)
const [x, , , y] = b; // => [x, , , y] = [5 , 3, 6, "yedi" , 8]  // index numarasına göre eşleşiyor.
console.log(x, y);

// klasik yol
let ilkisim = student.name;
console.log(ilkisim)
console.log(student.name)

const {name, surname } = student
console.log(name, surname)

const rectangle = {
    width: 20,
    height:10,
}
// isim değiştirmek istenirse
const {width : w, height : h} = rectangle;
console.log(w, h)
console.log(rectangle.width, rectangle.height)

function areaCalculation(obj) {
    console.log(obj.width * obj.height)
}
areaCalculation(rectangle)

const rectangle2 = {
    width: 30,
    height:8,
}
areaCalculation(rectangle2)


//fonksiyon içindedestruct

function areaCalc({width , height}) {
    console.log(width * height)
}
areaCalc(rectangle2)
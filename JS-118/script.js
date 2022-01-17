const user = {
    name : "ali",
    firstName (params) {
        
    },
}
const newObj = new Object(); // ==> {}


class User {
    sayHello(){
        console.log("Merhaba");
    }
}

const newUser = new User() // => User'dan kopyalanmış bir object

//newUser.sayHello();
//console.log(newUser)


class Car {
    constructor(brand, model, modelYear){
        this.brand = brand;
        this.model = model;
        this.modelYear = modelYear;
    }
    showYear(){
        console.log(this.modelYear);
    }
}

const toyota = new Car("Toyota", "Corolla", 2007);
const honda = new Car("Honda", "Civic", 2015);

//console.log(toyota)
//honda.showYear()
//console.log(Car)


const inputBrand = document.getElementById("brand")
const inputModel = document.getElementById("model")
const inputYear = document.getElementById("year")

const carData = [];
function createData() {
    const newObj = new Car(inputBrand.value, inputModel.value, inputYear.value);
    carData.push(newObj);
    console.log(carData);
}

function showItems() {
    if(carData.length > 0){
        //buraya table için data eklemeli for döngüsüyle   
    }
}


//nihai carData içeriği girilen değerlere göre aşağıdaki şekilde olur ; 
/*const carData = [
    {
        brand : "toyota",
        model : "corolla",
        modelYear : "2017"
    },
    {
        brand : "honda",
        model : "civic",
        modelYear : "2021",
    }
]*/

class usedCar extends Car {
    constructor(brand, model, modelYear, isRepaired){
        super(brand, model, modelYear); // super ile yeniden aşağıdaki gibi assign etmeme gerek kalmıyor.
        // this.brand = brand;
        // this.model = model;
        // this.modelYear = modelYear;
        this.isRepaired = isRepaired;
    }
}
//console.log(usedCar)

let lada = new usedCar ("Lada", "Samara", 1995, true)
//lada.modelYear = 1996;
//console.log(lada);
carData.push(lada)


function yearUpdate() {
    for (let i = 0; i < carData.length; i++) {
        const element = carData[i];
        element.modelYear +=1;       
    }
}

yearUpdate();
//console.log(carData)


class newCar extends Car {
    constructor(brand, model, modelYear, fuel="gas", isHybrid=false){
        super(brand, model, modelYear);
        this.isModified = false;
        this.fuel = fuel;
        this.isHybrid = isHybrid;
    }

}

let newHonda1 = new newCar("Honda", "CRV", "2022", undefined, true)
let newHonda2 = new newCar("Honda", "CRV", "2022", "petrol" )
//console.log(newHonda1, newHonda2)


// isimle yapılan export
import { Staff, newValues } from "./person.js";
console.log(Staff)
let newStaff = new Staff();
console.log(newValues)
newStaff.greetings();
// isimsiz export / default export
import Personal from "./person.js"

console.log(Personal)
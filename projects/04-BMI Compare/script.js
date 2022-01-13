
const john = {
    fulName : "John Schooder",
    mass: 82,
    height: 180,
    calcBMI : function () {
        let result = this.mass/(this.height * this.height)
        this.bmi = result
        return result
    }
}
const mark = {
    fulName : "Mark Max",
    mass: 76,
    height: 168,
    calcBMI : function () {
        let result = this.mass/(this.height * this.height)
        this.bmi = result
        return result
    }
}
mark.calcBMI();
john.calcBMI();

if (john.bmi > mark.bmi){
    console.log(`john is higher bmi`)
} else {
    console.log(`mark is higher bmi`)
}


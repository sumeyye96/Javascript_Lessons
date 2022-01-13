
//console.log(staff)

// staff.forEach(element => {
//     console.log(element)
// });

for (let index = 0; index < staff.length; index++) {
    const element = staff[index];
    //console.log(element.lastName)
    element.email = `${element.lastName.toLowerCase()}@coorparation.com`
    element.fullName = function() {
        return this.firstName + " " + this.lastName;
      }
    element.fullname = () => element.firstName + " " + element.lastName;
    
    //console.log(element.fullname())
}

for (i in staff) {
    if(staff[i].age > 21) {
        //console.log(staff[i])
    }
}
const filteredAge = staff.filter(item => item.age > 21)
console.log(filteredAge)

staff.sort((a,b) => a.experience-b.experience);
console.log(staff)

let sumAge = 0;
for (item of staff) {
    sumAge += item.age
}
let average = sumAge / staff.length
console.log(average)

console.log(staff.reduce((a,b)=>a+b.age,0) / staff.length)

const filtered = staff.filter(item => (item.age < 40) && (item.language === "Turkish") && (item.isActive)).sort((a,b) => b.age-a.age)

console.log(filtered)

const ageNumbers = filtered.map(item => item.age > 28 )
const roomNumbers = filtered.map(item => [item.roomNumber, item.fullName()] )
const roomNumbers2 = filtered.map(item => {
    return {num:item.roomNumber, namer:item.fullName()}
    } )
console.log(ageNumbers, roomNumbers, roomNumbers2)

const arr = [5,3,9]
console.log(arr.reduce((a,b) => a+b))
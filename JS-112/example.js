const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Turkey', 'Russia', 'Sweden', 'Germany', 'Tunusia']
const rectangle = {
  width: 30,
  height: 10,
  area: 300,
}
const students = [
{
  name:'Ali',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Halit',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Ahmet',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'Jumash',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Elif',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Nur',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Kerem',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

//Write a function called convertArrayToObject which can convert the array to a structure object.
    const students = [
        ['Micheal', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
      ]

    console.log(convertArrayToObject(students))
    [
      {
        name: 'Micheal',
        skills: ['HTM','CSS','JS','React'],
        scores: [98,85,90,95]
      },
      {
        name: 'John',
        skills: ['HTM','CSS','JS','React'],
        scores: [85, 80,85,80]
      }
    ]
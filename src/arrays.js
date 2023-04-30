const socialNetworking = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0;  i < socialNetworking.length; i++){
    console.log(`I have a profile on the social networking: ${socialNetworking[i]}`)
};

socialNetworking.forEach(function(nameOf, index){
    console.log(`#${index} I have a profile on the social networking: ${nameOf}`)
})

const students = ['wagner', 'laura', 'julia', 'paula'];

const students2 = students.map(function(currentItem){
    return{
        name: currentItem,
        Class: 'Frontend'
    }
})

console.log(students2);

const numbers = [1, 2, 3, 4, 5]
const doubleTheNumbers = numbers.map(function(currentNumber){
    currentNumber = currentNumber *2;
    return currentNumber;
})

console.log(doubleTheNumbers);

const paula = students2.find(function (item) {
    return item.name == 'paula' // true or false
})

console.log(paula);

students2.push({
    name: 'Lucio',
    Course: 'Backend'
})
const Indexpaula = students2.findIndex(function (item) {
    return item.name == 'paula' // true or false
})

console.log(Indexpaula);

const frontEndStudents = students2.every(function(item){
    return item.Class === 'Frontend'
})

console.log(frontEndStudents);

const someFrontEndStudents = students2.some(function(item){
    return item.Class === 'Bacnend' && item.Class === "Frontend"
})

console.log(someFrontEndStudents);

const backEndStudents = students2.filter(function(item) {
    return item.Course === 'Backend'
})

console.log(backEndStudents);

const nums = [10, 20, 30, 10];

const sum = nums.reduce (function(acumulator, currentItem) {
    acumulator += currentItem;
    return acumulator;
}, 0)

console.log (sum);

let sumFor = 0;

for (let i = 0; i < nums.length; i++){
    sumFor += nums[i];
}

console.log (sumFor);

const studentsNames = students2.reduce(function(acumulator, currentItem){
    acumulator += `${currentItem.name} `;
    return acumulator;
}, '')

console.log(studentsNames);

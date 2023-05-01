"use strict";

var socialNetworking = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < socialNetworking.length; i++) {
  console.log("I have a profile on the social networking: ".concat(socialNetworking[i]));
}
;
socialNetworking.forEach(function (nameOf, index) {
  console.log("#".concat(index, " I have a profile on the social networking: ").concat(nameOf));
});
var students = ['wagner', 'laura', 'julia', 'paula'];
var students2 = students.map(function (currentItem) {
  return {
    name: currentItem,
    Class: 'Frontend'
  };
});
console.log(students2);
var numbers = [1, 2, 3, 4, 5];
var doubleTheNumbers = numbers.map(function (currentNumber) {
  currentNumber = currentNumber * 2;
  return currentNumber;
});
console.log(doubleTheNumbers);
var paula = students2.find(function (item) {
  return item.name == 'paula'; // true or false
});

console.log(paula);
students2.push({
  name: 'Lucio',
  Course: 'Backend'
});
var Indexpaula = students2.findIndex(function (item) {
  return item.name == 'paula'; // true or false
});

console.log(Indexpaula);
var frontEndStudents = students2.every(function (item) {
  return item.Class === 'Frontend';
});
console.log(frontEndStudents);
var someFrontEndStudents = students2.some(function (item) {
  return item.Class === 'Backend' && item.Class === "Frontend";
});
console.log(someFrontEndStudents);
var backEndStudents = students2.filter(function (item) {
  return item.Course === 'Backend';
});
var backEndStudentsFilter2 = function backEndStudentsFilter2(students) {
  return students2.Course === 'Backend';
};
console.log(backEndStudents);
console.log(backEndStudentsFilter2());
var nums = [10, 20, 30, 10];
var sum = nums.reduce(function (acumulator, currentItem) {
  acumulator += currentItem;
  return acumulator;
}, 0);
console.log(sum);
var sumFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  sumFor += nums[_i];
}
console.log(sumFor);
var studentsNames = students2.reduce(function (acumulator, currentItem) {
  acumulator += "".concat(currentItem.name, " ");
  return acumulator;
}, '');
console.log(studentsNames);
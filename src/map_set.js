let myMap = new Map();

myMap.set("name", "erick");
myMap.set("stack", "html,css,js")


console.log (myMap);

const names = myMap.get("name");

console.log(names);

console.log(myMap.size);

console.log(myMap.has('name'));

console.log(myMap.has('lastName'));

console.log(myMap.size);


for (let key of myMap.keys()){
    console.log(key)
}

for (let value of myMap.values()){
    console.log(value)
}

for (let entries of myMap.entries()){
    console.log(entries)
}

for (let [key, value] of myMap.entries()){
    console.log(`${key}: ${value}`)
}

myMap.delete("stack");

console.log(myMap);

//set

const cpfs= new Set();

cpfs.add('30802499090');
cpfs.add('78742316006');
cpfs.add('07334365011');
cpfs.add('66423671036');

console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((value)=>{
    console.log(value);
})

const array = ['Gian Souza', 'Jose Paulo','Maria Isabel', 'Luana', 'Luana', 'Gian Souza'];
console.log(array);
const arraySet = new Set([...array])

console.log(arraySet);

const arrayWithoutDoubles = [...arraySet];

console.log(arrayWithoutDoubles);

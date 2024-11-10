console.log("Hello World!");
console.log('hello'.length);
console.log("Hello World has " + "helloworld".length  + " characters");
console.log("hello world"[0]);
// works on the principle of bodmas, it will solve what's in the bracket first i.e
console.log((100 + 100) / 30);
car = {
    name: "toyota",
    color: "red",
    owner: "itachi"
}
car.brand = "camry"
delete car.name
console.log(car);
const array = [1, 2, 3, 4, 5];
// to add to an array- i.e you push it to the end
// array.push(6);
// to remove the last element - like to pop it off
// array.pop();
// console.log(array);
// newArray = [];
// for (const element of array) {
//     newArray.push(element * 2);
// }
// console.log(newArray);

function Name(name, age, soo) {
    console.log("My name is " + name);
    console.log("I am " + age + " years old");
    console.log("I am from " + soo + " state, Nigeria");
};
Name("Denver", 18, "Ogun");

// multiplication function
function timesTable(a, b) {
    for(let i = 0; i <= b; i++) {
        console.log(`${a} x ${i} = ${a * i}`)
    }
};
timesTable(2, 10);

const alphabet = ['a','b', 'c','d', 'e', 'f' , 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
let reversedSentence = '';
function replace(sentence){
    for(const  char of sentence){
        const i = alphabet.indexOf(char.toLowerCase());
        if(alphabet.includes(char)){
            reversedSentence += alphabet[25-i];
        }
    }
    console.log(reversedSentence);
};
// replace("hello world");
replace("svool dliow");
// replace("Power Learn Project");

const objects = [{
    name: "radha",
    age: 18,
    level: "completed"
},
{
    name: "sylvie",
    age: 27,
    level: "completed"
},
{
    name: "itachi",
    age: 25,
    level: "legend"
}];
const names = objects.map((object => object.name));
const itachi = objects.filter(object=>object.name==="itachi");
console.log(names);
console.log(itachi); 

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const less = numbers.map(number => number <    7);
console.log(less);

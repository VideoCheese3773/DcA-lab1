console.log("Hola")

const nameGenerator = require('name-generate');
const reverseSentence = require('@lokeshkatta/reverse-sentence');

let name = nameGenerator.first();
let lastName = nameGenerator.last();
let fullName = name + " " + lastName;

console.log(fullName);
console.log(reverseSentence(fullName));
console.clear();

// function declaration
const n1 = 7;
const n2 = 5;


function sum(a, b) {
    return a + b;
}

console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);

// function expression
// kintamajam priskirta anonimine funkcija
const minus = function (a, b) {
    return a - b;
}

console.log(`${n1} - ${n2} = ${minus(n1, n2)}`);

// arrow function
const multiply = (a, b) => {
    return a * b;
}

console.log(`${n1} * ${n2} = ${multiply(n1, n2)}`);

// arrow function (jeigu logikos bloke yra tik vienas steitmentas)
// galim nerasyti {} ir return
const divide = (a, b) => a / b;

console.log(`${n1} / ${n2} = ${divide(n1, n2)}`);


// arrow function (jeigu logikos bloke yra tik vienas steitmentas)
// jeigu parametru bloke yra tik vienas parametras galime nerasyti ()
// negalima naudoti jei skliaustuose yra "kazkas keisto"
const sqrt = a => a * a;

console.log(`${n1} ** 2 = ${sqrt(n1)}`);


console.log(hi());
console.log(hi());
console.log(hi());

const hello = () => 'Hello kitty'; // turi buti parasytas pries panaudojant

console.log(hello());
console.log(hello());
console.log(hello());

function hi() {
    return 'Hi there';
}

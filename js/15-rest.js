console.clear();

/* 

    REST OPERATORIUS - surenka likusias nepaimtas reiksmes destrukturizuojant

 */

const marks = [10, 2, 8, 4, 6];
const [first, second, ...visiKiti] = marks; //...visi kiti paima nepanaudotus masyvo reiksmes, jei lieka vienas skaicius palieka []

console.log(marks);
console.log(first);
console.log(second);
console.log(visiKiti);

const person = {
    name: 'Petras',
    age: 99,
    isMarried: true,
    favourite: {
        color: 'red',
        number: 13,
        artist: 'Spice Girls'
    }
}

const {age, isMarried, ...other} = person;
console.log(age, isMarried);
console.log(other);

// DUODAMI 2 PARAMETRAI

function sum(a, b) {
    return a + b;
}
const s1 = sum(7, 5);
console.log(s1);

//DUODAMAS 1PARAMETRAS (ARRAY), BET SU DAUG REIKSMIU

function arraySum(list) {
    let totalSum = 0;

    for (let i = 0; i < list.length; i++) {
        const number = list[i];
        totalSum += number;
    }
    return totalSum;
}
const s2 = arraySum([10, 2, 8, 4, 6])
console.log(s2);

function sudetis(...args) { // ...ARGS SURENKA SKAICIUS I MASYVA
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        const number = args[i];
        total += number;
    }
    return total;
}
const s3 = sudetis(10, 2, 8, 4, 6);
console.log(s3);

function product() { 
    let total = 1;
    for (let i = 0; i < [...arguments].length; i++) {
        total *= [...arguments][i];
    }
    return total;
}
const s4 = product(10, 2, 8, 4, 6); //[]...arguments] skaicius pavercia i masyva
console.log(s4);
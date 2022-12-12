/* 
        TYPEOF - nustato reiksmes tipa
        "supaprastintas" objektas

*/

const n = 5; //number
const s = 'hi'; // string
const b = true; //boolean

const nType = typeof n;
const sType = typeof s;
const bType = typeof b;

console.log(n, nType);
console.log(s, sType);
console.log(b, bType);

const marks = [10, 2, 8];  // array = object
const marksType = typeof marks;
console.log(marks, marksType);

console.log({}, typeof {});
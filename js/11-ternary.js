console.clear();

/*

    TERNERY - Supaprastintas if'as
    klausimas ? ka daryti kai true : ka daryti kai false
*/

const laimejo = true;
let pinigine = 10;

if (laimejo) {
    pinigine += 20;
} else {
    pinigine -= 1;
}

console.log(pinigine);

// IF SUPAPRASTINTAS VARIANTAS

const pergale = false;
let zinute = 'sveikinu tu laimejai';

if (!pergale) {
    zinute = 'ups.. bandykite kita karta'
}

console.log(zinute);

// TERNARY
const lotteryWin = false;
const wallet = 10 + (lotteryWin ? 20 : -1);
console.log(wallet);

const msgWin = true;
const msg = msgWin ? 'sveikinu' : 'ups';
console.log(msg);

// complex ternary

const a = 0 < 1 
            ? 2 
            : 3;
console.log(a);

const b = 0 > 1 
            ? 2 
            : 3;
console.log(b);

const c = 0 === 1 
                ? 2 
                : 3;
console.log(c);

const d = 0 < 1 
            ? 2 
            : 3 
                ? 4 
                : 5;
console.log(d);

const e = 0 > 1 
            ? 2 
            : 3 
                ? 4 
                : 5;
console.log(e);


const f = 0 < 1 
            ? 2 
                ? 3 
                : 4 
            : 5;
console.log(f);

const g = 0 > 1 
            ? 2 
                ? 3 
                : 4 
            : 5 
                ? 6 
                : 7;
console.log(g);

/*
if (0 < 1) {
   a = 2
} else { 
    if (3) {
        a = 4
    }
}
*/
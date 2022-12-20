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
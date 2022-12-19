console.clear();


/* 
skaitmenu kiekis skaiciuje
*/

function digitCount(number) {
    if (typeof number !== 'number' || !isFinite(number)) {
        return 'error';
    }

    //const numberAsString = number.toString();
    const numberAsString = '' + number;
    let count = numberAsString.length;

    if (number < 0) {
        count--;
    }

    if (number % 1 !== 0) {
        count--;
    }


    // logika

    return count;
    //return ('' + number).length;
}

console.log(digitCount(0), '->', 1);
console.log(digitCount(5), '->', 1);
console.log(digitCount(781), '->', 3);
console.log(digitCount(3.14), '->', 3);
console.log(digitCount(-3.14), '->', 3);
console.log(digitCount(1000000000000000000000), '->', 22);



console.log(digitCount(true));
console.log(digitCount('asd'));
console.log(digitCount(NaN));
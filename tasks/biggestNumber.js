console.clear();

/*
didziausias skaicius sarase
*/

function biggestNumber(list) {
if (!Array.isArray(list)) {
    return 'error: reikia masyvo';
}
if (list.length < 1) {
    return 'error: masyvas negali buti tuscias'
}

    let max = -Infinity;



    for (let i = 0; i < list.length; i++) {
        const number = list[i];
        if (typeof number === 'number' && isFinite(number) && number > max) {
            max = number;
        }
    }

    if (max === -Infinity) {
        return 'error: sarase nera nei vieno normalaus skaiciaus'
    }

    return max;
}

console.log(biggestNumber([0]), '-->', 0);
console.log(biggestNumber([1, 2, 3]), '-->', 3);
console.log(biggestNumber([-5, 78, 14, 0, 18]), '-->', 78);
console.log(biggestNumber([69, 69, 69, 69, 66]), '-->', 69);
console.log(biggestNumber([-1, -2, -3, -4]), '-->', -1);
console.log(biggestNumber('pomidoras'));
console.log(biggestNumber(true));
console.log(biggestNumber([]));
console.log(biggestNumber(null));
console.log(biggestNumber([1, 2, 3, Infinity]));
console.log(biggestNumber([1, 2, 3, NaN]));
console.log(biggestNumber([1, 2, 3, true]));
console.log(biggestNumber([1, 2, 3, 'true']));
console.log(biggestNumber([-5, [78, 14], 0, 18]), '-->', 78);

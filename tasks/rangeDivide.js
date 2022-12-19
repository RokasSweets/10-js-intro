console.clear();

//kiek duotame (imtinai) intervale yra skaiciu, kurie dalijasi be liekanos ir duoto daliklio

function rangeDivide(from, to, divider) {
    if (typeof from !== 'number' || !isFinite(from)) {
        return 'pirmas parametras turi but normalus sksaicius'
    }

    if (typeof to !== 'number' || !isFinite(to)) {
        return 'antras parametras turi but normalus sksaicius'
    }

    if (typeof divider !== 'number' || !isFinite(divider)) {
        return 'trecias parametras turi but normalus sksaicius'
    }

    if (divider <= 0) {
        return 'trecias parametras negali buti mazesnis uz 1'
    }
let count = 0;

for (let i = from; i <= to; i++) {
    if (i % divider === 0) {
        count++;
    }
}
return count;
//return `Skaiciu intervale tarp ${from} ir ${to}, besidalijanciu be liekanos is ${divider} yra ${count} vienetai`
}


/*
console.log(rangeDivide(0, 11, true))
console.log(rangeDivide(0, true, 3))
console.log(rangeDivide(true, 11, 3))
console.log(rangeDivide(0))
console.log(rangeDivide())
console.log(rangeDivide(0, 11, Infinity))
console.log(rangeDivide(0, NaN, 3))
console.log(rangeDivide(0, '', 3))
console.log(rangeDivide(0, null, 3))
/*
console.log(rangeDivide(0, 11, 3), '->', 'Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 3 yra 4 vienetai');
console.log(rangeDivide(0, 11, 5), '->', 'Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 5 yra 3 vienetai');
console.log(rangeDivide(0, 11, 7), '->', 'Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 7 yra 2 vienetai');

console.log(rangeDivide(8, 31, 3), '->', 'Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 3 yra 8 vienetai');
console.log(rangeDivide(8, 31, 5), '->', 'Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 5 yra 5 vienetai');
console.log(rangeDivide(8, 31, 7), '->', 'Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 7 yra 3 vienetai');

console.log(rangeDivide(-18, 18, 3), '->', 'Skaiciu intervale tarp -18 ir 18, besidalijanciu be liekanos is 3 yra 13 vienetai');
console.log(rangeDivide(-18, 18, 5), '->', 'Skaiciu intervale tarp -18 ir 18, besidalijanciu be liekanos is 5 yra 7 vienetai');
console.log(rangeDivide(-18, 18, 7), '->', 'Skaiciu intervale tarp -18 ir 18, besidalijanciu be liekanos is 7 yra 5 vienetai');
*/

console.log(rangeDivide(0, 11, 3), '->', 4);
console.log(rangeDivide(0, 11, 5), '->', 3);
console.log(rangeDivide(0, 11, 7), '->', 2);

console.log(rangeDivide(8, 31, 3), '->', 8);
console.log(rangeDivide(8, 31, 5), '->', 5);
console.log(rangeDivide(8, 31, 7), '->', 3);

console.log(rangeDivide(-18, 18, 3), '->', 13);
console.log(rangeDivide(-18, 18, 5), '->', 7);
console.log(rangeDivide(-18, 18, 7), '->', 5);
console.log(rangeDivide(-18, 18, 0), '->', 5);
console.log(rangeDivide(-18, 18, -7), '->', 5);

console.log(rangeDivide(18, -18, -7), '->', 5);
console.log(rangeDivide(-2, 2, 0.5), '->', 9);
console.log(rangeDivide(-2.5, 3.5, 2), '->', 3);
console.log(rangeDivide(-1000000000, 1000000000, 2), '->', 1000000001);
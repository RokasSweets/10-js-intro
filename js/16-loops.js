console.clear();

/*
LOOP - CIKLAS
TEVAS -> for
vaikai (isvestiniai) -> while, for-of, for-in, foreach
next-level -> map, sort, filter, reduce, ...
*/

const marks = [10, 2, 8, 4, 6];

//for
let sumFor = 0;
for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    sumFor += mark;
}
console.log('For:', sumFor / marks.length);

//while
let sumWhile = 0;
let iWhile = 0;
while (iWhile < marks.length) {
    const mark = marks[iWhile];
    sumWhile += mark;
    iWhile++;
}

console.log('While:', sumWhile / marks.length);

//for-of
let sumForOf = 0;
for (const mark of marks) {
    sumForOf += mark
}
console.log('For-of:', sumForOf / marks.length);

//foreach
let sumForEach1 = 0;
marks.forEach(function (mark, iForEach, list) {
    sumForEach1 += mark
});
console.log('Foreach:', sumForEach1 / marks.length);
//2
let sumForEach2 = 0;
marks.forEach(mark => {sumForEach2 += mark});
console.log('Foreach2:', sumForEach2 / marks.length);
//3
let sumForEach3 = 0;
function sumavimasForeach(mark) {
    sumForEach3 += mark;
}
marks.forEach(sumavimasForeach);
console.log('Foreach3:', sumForEach3 / marks.length);
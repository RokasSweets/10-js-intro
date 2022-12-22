console.clear();

/*
FILTER - palieka tik norimas reiksmes
*/

const numbers = [-1, 5, -7, 3.5, 10];
const negativeNumbers = [];

for (const number of numbers) {
    if (number < 0) {
        negativeNumbers.push(number);
    }
}

console.log(numbers);
console.log(negativeNumbers);

const positiveNumbers = numbers.filter(n => n > 0);
console.log(positiveNumbers);

// tik pilnamecius

const students = [
    {name: 'Petras', age: 99, isMarried: true},
    {name: 'Maryte', age: 89, isMarried: false},
    {name: 'Simon', age: 7, isMarried: false},
    {name: 'Alas', age: 47, isMarried: true},
 ]

 const pilnameciai = students.filter(s => s.age >= 18);
 console.log(pilnameciai);

function isMarriedAndAdult(student) {
    if (student.age < 18) {
    return false;
    }
    if (!student.isMarried) {
        return false;
    }
    return true;
}

function isMarriedAndAdult2(student) {
    if (student.age <= 18 && student.isMarried) {
    return false;
    }
    if (!student.isMarried) {
        return false;
    }
    return true;
}

 const vedePilnameciai = students.filter(isMarriedAndAdult);
 console.log(vedePilnameciai);
 const vedePilnameciai2 = students.filter(isMarriedAndAdult2);
 console.log(vedePilnameciai2);

 console.log('--------');
//tik vedusiu zmoniu vardai
 const onlyNamesOfMarried = students
    .filter (s => s.isMarried)
    .map(s => s.name);
console.log(onlyNamesOfMarried);
// vedusiu skaicius
const onlyMarriedCount = students
    .filter (s => s.isMarried)
    .length
console.log(onlyMarriedCount);
console.clear();

/*
    REDUCE - sutraukti/sumazinti
    procedura, kaip is saraso reiksmiu gauti viena galutine reiksme
    is daugiskaitos i vienaskaita
*/

//iprastas ciklas
const numbers = [10, 2, 8, 4, 6];

let sum = 0;

for (const number of numbers) {
    sum += number;
}
console.log('for sum:', sum);

//2 paprastas reduce - logika viduje

const reduceSum = numbers.reduce((sum, number) => sum += number);
console.log('reduce sum:', reduceSum);

//3 paprastas reduce - logika isorineje funkcijoje
function calcSum(sum, number){
    return sum + number
}

const reduceSumFunc = numbers.reduce(calcSum);
console.log('reduce sum2:', reduceSumFunc);


//4 kiti paprasti pavyzdziai
const reduceMinus = numbers.reduce((total, number) => total - number);
console.log('reduce minus:', reduceMinus);

const reduceMulti = numbers.reduce((total, number) => total * number);
console.log('reduce multi:', reduceMulti);

const reduceDiv = numbers.reduce((total, number) => total / number);
console.log('reduce divide:', reduceDiv);


// reduce, su nurodyta pradine akumuliatoriaus reiksme
console.log('--------');
const reduceSum2 = numbers.reduce((sum, number) => sum += number, 0);
console.log('reduce 2 sum:', reduceSum);

const reduceMinus2 = numbers.reduce((total, number) => total - number, 0);
console.log('reduce 2 minus:', reduceMinus2);

const reduceMulti2 = numbers.reduce((total, number) => total * number, 1);
console.log('reduce 2 multi:', reduceMulti2);

const reduceDiv2 = numbers.reduce((total, number) => total / number, 1);
console.log('reduce 2 divide:', reduceDiv2);

//patikrinam ar iki galo isdalinome duota skaiciu ''maziausiais'' dalikliais?
//100
//[2, 2, 5, 5]
const atsGood = [2, 2, 5].reduce((t, n) => t / n, 100);
console.log(atsGood);

const students = [
    {name: 'Petras', age: 99, isMarried: true},
    {name: 'Maryte', age: 89, isMarried: false},
    {name: 'Simon', age: 7, isMarried: false},
    {name: 'Alas', age: 47, isMarried: true},
 ]
 const averageAge = students.reduce((t, s) => t + s.age, 0) / students.length;
 console.log('average age: ', parseInt(averageAge.toFixed(1)));
 console.log('average age: ', +averageAge.toFixed(1));
 console.log('average age: ', parseFloat(averageAge.toFixed(1)));

 
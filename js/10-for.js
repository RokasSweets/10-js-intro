console.clear();

/* 
    FOR - ciklas (loop)
    kartojame norima logika n kartu arba iki tol kol reikia (reikalinga patikrinimo salyga)

    for () {
        logika, kuria reikia kartoti n kartu
    }

*/

// isspausdinti skaicius nuo 0 iki 5
let i = 0;

console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);

// for aplikacija 

for (let i=0; i<=5; i++) {
    console.log('dirbu...', i);
}
console.log('end');

//isspausdinti skaicius nuo 5 iki 10

for(let i = 5; i <= 10; i++) {
    console.log('skaicius', i);
}

//isspausdinti skaicius nuo -10 iki -5

for(let i = -10; i <= -5; i++) {
    console.log('skaicius', i);
}

//isspausdinti skaicius nuo 10 iki 5

for(let i = 10; i >= 5; i--) {
    console.log('skaicius', i);
}

console.clear();

const marks = [10, 2, 8, 4, 6, 10];
let sum = 0;
const count = marks.length;

for (let i = 0; i < count; i++) {
    sum += marks[i];
    console.log(i, '-->', marks[i], '=>', sum);
}

const average = sum / count;
console.log('pazymiu vidurkis', average);


const petras = [10, 8, 6];
const count2 = petras.length;
let sum2 = 0;

for (let i=0; i< count2; i++) {
    sum2 += petras[i]
}

console.log('petro vidurkus:', sum2 / count2);

const maryte = [9, 7, 5];
const count3 = petras.length;
let sum3 = 0;

for (let i=0; i< count3; i++) {
    sum3 += maryte[i]
}

console.log('marytes vidurkus:', sum3 / count3);

function marksAverage(marksArray) {
    let sum = 0;

    for (let i=0; i< marksArray.length; i++) {
        sum += marksArray[i];
    }

    return sum / marksArray.length;
}

console.log('-----------');

const student1 = {
    name: 'jonas',
    marks: [2, 4, 6]
};

const student2 = {
    name: 'ona',
    marks: [4, 6, 8, 10]
};

const student3 = {
    name: 'aloyzas',
    marks: [6, 8, 10, 7, 3]
}

const student4 = {
    name: 'marijona',
    marks: []
}

const vidurkis1 = marksAverage(student1.marks);
const vidurkis2 = marksAverage(student2.marks);
const vidurkis3 = marksAverage(student3.marks);
const vidurkis4 = marksAverage(student4.marks);

console.log(`${student1.name} pazymiu vidurkis yra ${vidurkis1}.`);
console.log(`${student2.name} pazymiu vidurkis yra ${vidurkis2}.`);
console.log(`${student3.name} pazymiu vidurkis yra ${vidurkis3}.`);
console.log(`${student4.name} pazymiu vidurkis yra ${vidurkis4}.`);

console.log('-----------');


const currency = 'EUR';
const prekes = [
    {
        name: 'Bananas',
        price: 2,
        inStock: 10
    },
    {
        name: 'Agurkas',
        price: 3,
        inStock: 10
    },
    {
        name: 'Pomidoras',
        price: 1.57,
        inStock: 30
    },
];

function shop() {

}

shop(prekes, currency);

console.log(`MUSU PARDUOTUVE`);
console.log('-----------');
console.log(` 1) banana kainuoja 2.00eur ir turime ju 10 vienetu.`);
console.log(` 2) agurkas kainuoja 3.00eur ir turime ju 10 vienetu.`);
console.log(` 3) pomidorcik kainuoja 1.57eur ir turime ju 30 vienetu.`);
console.log('-----------');
console.log(`viso asortimento kaina: 97.10eur.`);
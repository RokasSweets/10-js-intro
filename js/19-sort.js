console.clear();

/*
SORT - rikiavimas
jei lyginamos reikses yra:
    -mazesne (-1)
    -lygios (0)
    -didesne (1)
*/

//const numbers = [10, 2, 8, 4, 6]
// PALEI ABECELE TIK STRINGO PIRMA RAIDE IR TIK STRINGAI
const dic = ['Petras', 'Maryte', 'Jonas', 'Ona'];

const dicAZ = [...dic].sort(); // nuo maziau iki daugiau
console.log(dicAZ);
const dicZA = [...dic].sort().reverse();
console.log(dicZA);

//

const num = [10, 2, 8, 1, 4, 15, 6, 23, 45];
const numAZ = [...num].sort((a, b) => a - b);
const numZA = [...num].sort((a, b) => b - a);
console.log(num);
console.log(numAZ);
console.log(numZA);

/// pagal amziu

const students = [
    {name: 'Petras', age: 99, isMarried: true},
    {name: 'Maryte', age: 89, isMarried: false},
    {name: 'Simon', age: 7, isMarried: false},
    {name: 'Alas', age: 47, isMarried: true},
 ];

 const studentAgeAZ = [...students].sort((a, b) => a.age - b.age);
 const studentAgeZA = [...students].sort((a, b) => b.age - a.age);
 console.log(studentAgeAZ);
 console.log(studentAgeZA);
/// pagal vardus
 const studentNameAZ = [...students]
    .sort((a, b) => a.name < b.name ? -1 : a.name === b.name ? 0 : 1);
    console.log(studentNameAZ);

function compareStudents(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name === b.name) {
        return 0;
    }
    return 1
}
const studentNameAZfunc = [...students].sort(compareStudents);
console.log(studentNameAZfunc);
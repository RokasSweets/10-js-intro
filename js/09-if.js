console.clear();

/*
    IF

    Palyginimo Operatoriai:
    visi: >, <, <=, >=, ==, !=, ===, !==
    naudotini: >, <, <=, >=. ===, !==
    nenaudotini: ==, !=

    Sablonai:
    if () {}
    if () {} else {}
    if () {} else if () {}
    if () {} else if () {} else {}
    if () {} else if () {} ... else if () {}
    if () {} else if () {} ... else if () {} else {}
    
*/

const a = 7;
const b = 7;

// jeigu a daugiau uz b, tai spausdiname "a daugiau uz b"
// jeigu a nera daugiau uz b, tai spausdiname "a nera daugiau uz b"

console.log('start');
if (a == b) {
    console.log(`${a} yra lygu ${b}`);
} else {
    console.log(`${a} nera lygu ${b}`);
}

if (a <= b) {
    console.log(`${a} maziau arba lygu uz ${b}`);
} else {
    console.log(`${a} nera maziau arba lygu uz ${b}`);
}

if (a != b) {
    console.log(`${a} ne lygu ${b}`);
} else {
    console.log(`${a} lygu ${b}`);
}

console.log('------');

const c = 13; 
const d = 11;

if (c > d) {
    console.log('C daugiau uz D');
} else if (c < d){
    console.log('C maziau uz D');
} else if (c == d) {
    console.log('C lygu D');
}

console.log('end');
// console.log(`${a} daugiau uz ${b}`);



const petras = [10, 2];
const maryte = [8, 4, 6];

if (petras.length > maryte.length) {
    console.log('Petras turi daugiau arba vienodai su Maryte pazymiu');
} else {
    console.log('Maryte turi daugiau pazymiu uz Petra');
}

if (5 === 5) {
    console.log('taip');
}

if (5 !== 3 ) {
    console.log('taip');
}

console.log("--------");

if (5 === '5') {
    console.log('vienodi');
} else {
    console.log('skirtingi');
}

const suma = 5;

if (typeof suma === 'number') {
    console.log('darau pavedima');
} else {
    console.log('negausi pavedimo');
}
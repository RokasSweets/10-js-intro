console.clear();
console.log('Class...');

import { Student } from "./Student.js";
//const Student = require('./Student').default

const petras = new Student('Petras', 2000);
const maryte = new Student('Maryte', 1980);
const jonas = new Student('Jonas', 1980)

petras.addMarks(10, 0, 2, 22);
petras.addMark(2);
petras.addMark(22);
petras.addMark(-3);
petras.addMark(6);
petras.addMark(NaN);


maryte.addMark(9);
maryte.addMark(6);

console.log(petras.name, petras.marks);
//console.log(maryte.name, maryte.marks);
//onsole.log(jonas.name, jonas.marks);

console.log(petras.name, petras.marksAverage());
//console.log(maryte.name, maryte.marksAverage());
//console.log(jonas.name, jonas.marksAverage());
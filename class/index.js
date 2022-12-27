console.clear();
console.log('Class...');

import Studentas from "./Student.js";
//const Student = require('./Student').default

const petras = new Studentas('Petras', 2000);
const maryte = new Studentas('Maryte', 1980);

console.log(petras, petras.name, petras.birthYear, petras.isMarried);
console.log(maryte, maryte.name, maryte.birthYear, maryte.isMarried);
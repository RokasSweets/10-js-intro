/* 
    Array (list, sarasas, matrix, matrica, masyvas)
*/

const emptyArray = [];
console.log(emptyArray);

const marks = [10, 2, 8, 4, 6];
console.log(marks);

const usersNames = ['Petras', 'Maryte', 'Jonas', 'Ona'];
console.log(usersNames);

const boolist = [true, false, true, true, false, false];
console.log(boolist);


//LABAI NEREKOMDUOTINEMIXUOTA SKIRTINGO TIPO REIKSMES MASYVE
//NEBENT ZINOT KA DAROT IR NORIT TAUPYTI VIETA (RAM)
// [vardas, amzius, ar vedes]
const combo1 = ['Jonas', 99, true];
const combo2 = ['Maryte', 87, false];

const marksCount = marks.length;
console.log(marksCount);

const userCount = usersNames.length;
console.log(userCount);

const boolCount = boolist.length;
console.log(boolCount);

const emptySize = emptyArray.length;
console.log(emptySize);
//             0   1  2   3  pOZICIJOS INDEXAS
const money = [5, 10, 20, 5];
console.log('Kupiuros:', money);

let wallet = 0; 

wallet +=  money[0];
wallet +=  money[1];
wallet +=  money[2];
wallet +=  money[3];

console.log('wallet:', wallet, 'pinigu');

const marks2 = [10, 2, 8, 4, 6];

let marksSum = 0;
marksSum += marks2[0];
marksSum += marks2[1];
marksSum += marks2[2];
marksSum += marks2[3];
marksSum += marks2[4];
//marksSum += marks2[5];

console.log('Marks sum:', marksSum);

console.log(marks2[5]);

const x = 30 + undefined;
console.log(x);

const abc = ['a', 'b', 'c', 'd', 'e', 'f']
// abecele : a, b, c, d, e, f.
let abcString = 'Abecele: ';
const seperator = ', ';
const ending = '.';

abcString += abc[0] + seperator;
abcString += abc[1] + seperator;
abcString += abc[2] + seperator;
abcString += abc[3] + seperator;
abcString += abc[4] + seperator;
abcString += abc[5] + ending;

console.log(abcString);
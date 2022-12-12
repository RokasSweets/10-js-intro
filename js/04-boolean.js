/* 
    BOOLEAN (logine reiksme)
    true  -> 1
    false -> 0 
*/

const arSninga = true;
const arLyja = false;

console.log('Ar sninga?', arSninga);
console.log('Ar lyja?', arLyja);

//idomesni atvejai

const luckyNumber = 13;
const luckySentence = `My lucky number is ${luckyNumber}!`;
console.log(luckySentence);

const snowString = `Ar sninga? Ats.; ${arSninga}.`;
console.log(snowString); 

const rainString = `Ar lyja? Ats.; ${arLyja}.`;
console.log(rainString);

const penkiosTiesosSum = true + true + true + true + true;
console.log(`Tiesos:,`, penkiosTiesosSum);

const penkiMelaiSum = false + false + false + false + false;
console.log(`Melai:`, penkiMelaiSum);

const penkiosTiesosMulti = true * true * true * true * true;
console.log(`Tiesos multi:,`, penkiosTiesosMulti);

const penkiMelaiMulti = false * false * false * false * false;
console.log(`Melai multi:`, penkiMelaiMulti);

const combo = 5 * true - 7 * false;
console.log(`combo:`, combo);

//saknis
const saknis81 = 81 ** 0.5;
console.log(saknis81);

const kubineSaknis27 = 27 ** (1 / 3);
console.log(kubineSaknis27);
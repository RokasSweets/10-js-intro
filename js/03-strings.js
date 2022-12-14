/*

        STRINGS (TEXTAs)
        iniciavimas kabutemis: 
        - viengubos (') (default) 
        - dvigubos (")
        -  backtick/ apostrofas (`)
*/

const hi = 'labas';
console.log(hi);

const morning = "rytas";
console.log(morning);

const sentence = 'labas rytas';
console.log(sentence);

const combo1 = hi + ' ' + morning;
const combo2 = hi + " " + morning;
console.log(combo1);
console.log(combo2);

// Vienguba kabute (').
// Dvyguba kabute (").
// Vienguba kabute (') ir dviguba kabute (").
const kabute2 = "Vienguba kabute (').";
console.log(kabute2);

const kabute1 = 'Dvyguba kabute (").';
console.log(kabute1);

// \ escape
const kabute112 = 'Vienguba kabute (\') ir dvyguba kabute (").';
console.log(kabute112);

const kabute212 = "Vienguba kabute (') ir dvyguba kabute (\").";
console.log(kabute212);

const kabute3 = 'Vienguba kabute (\') ir dvyguba kabute (\").';
console.log(kabute3);

console.log('---------');

const user = 'John';
// Hi, John!
const userHi = 'Hi, ' + user + '!';
console.log(userHi);

const viengubaKabute = "'";
const dvygubaKabute = '"';

// Vienguba kabute (').
// Dvyguba kabute (").
// Vienguba kabute (') ir dviguba kabute (").

const kabuciuSakinys = 'Vienguba kabute (' + viengubaKabute + ') ir dvyguba kabute (' + dvygubaKabute + ').';
console.log(kabuciuSakinys);

const kabutesBacktick = `Vienguba kabute (') ir dvyguba kabute (") ir backtick kabute (\`).`;

const backtickSakinys = `Vienguba kabute (${viengubaKabute}) ir dvyguba kabute (${dvygubaKabute}).`;
console.log(backtickSakinys);

const userBacktick = `Hi, ${user}!`;
console.log(userBacktick);
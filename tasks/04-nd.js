let arbuzai = 12; 
const p1 = 2;
const p2 = 3;
const p3 = 1;
const g1 = 4;

console.log('liko arbuzu:' ,arbuzai);
arbuzai -= p1;
console.log('liko arbuzu:' ,arbuzai);
arbuzai -= p2;
console.log('liko arbuzu:' ,arbuzai);
arbuzai -= p3;
console.log('liko arbuzu:' ,arbuzai);
arbuzai += g1;
console.log('liko arbuzu:' ,arbuzai);

let arbuzaiSold = p1 + p2 + p3;
console.log('arbuzu parduota:' ,arbuzaiSold);
console.log('arbuzu grazinta' ,g1);
console.log('is viso arbuzu parduota po grazinimu:' ,arbuzaiSold - g1);
const UAB = '"UAB Arbuzas Bachruzas"';
const salis = 'Lietuva';
console.log(UAB + ' ' + salis);
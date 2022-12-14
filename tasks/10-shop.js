console.clear();

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




/* 
console.log(` 1) banana kainuoja 2.00eur ir turime ju 10 vienetu.`);
console.log(` 2) agurkas kainuoja 3.00eur ir turime ju 10 vienetu.`);
console.log(` 3) pomidorcik kainuoja 1.57eur ir turime ju 30 vienetu.`);
console.log('-----------');
console.log(`viso asortimento kaina: 97.10eur.`);
*/
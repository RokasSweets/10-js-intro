console.clear();

const valiuta = 'EUR';
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

if (prekes.inStock <= 0) {
    console.log(`${prekes.name} sandelyje nera.`);
}

function shop() {
    console.log(`MUSU PARDUOTUVE`);
    console.log('-----------');
    let kaina = 0;
    for (let i = 0; i < prekes.length; i++)  {
        if (prekes[i].inStock === 0) {
            console.log(`${prekes[i].name} kainuoja ${prekes[i].price.toFixed(2)} ${valiuta}. Prekes sandelyje nera.`);
        } else {
        console.log(`${prekes[i].name} kainuoja ${prekes[i].price.toFixed(2)} ${valiuta} ir turime ju ${prekes[i].inStock} vnt.`);
        kaina += prekes[i].price * prekes[i].inStock;}
    }
    console.log('-----------');
    console.log(`Viso asortimento kaina: ${kaina.toFixed(2)} ${valiuta}`);
}

shop(prekes, valiuta);





/* 
console.log(` 1) banana kainuoja 2.00eur ir turime ju 10 vienetu.`);
console.log(` 2) agurkas kainuoja 3.00eur ir turime ju 10 vienetu.`);
console.log(` 3) pomidorcik kainuoja 1.57eur ir turime ju 30 vienetu.`);
console.log('-----------');
console.log(`viso asortimento kaina: 97.10eur.`);
*/
console.clear();

//destrukturizavimas


const pazymiai = [10, 9, 8, 7, 6];
const pirmas = pazymiai[0];
const antras = pazymiai[1];

console.log(pirmas);
console.log(antras);

const marks = [10, 2, 8, 4, 6];
const [first, second, third] = marks;

console.log(first);
console.log(second);
console.log(third);

const petras = ['Petras', 99, true];
const vardas = petras[0];
const amzius = petras[1];
const arVedes = petras[2];

console.log(vardas, amzius, arVedes);

const ona = ['Ona', 87, false];
const [name, age, isMarried] = ona;
console.log(name, age, isMarried);

const car = {
    brand: 'tesla',
    model: 's',
    color: 'red'
}
const { brand, color } = car
console.log(brand, color);

// SPREAD

const numbers = [1, 2, 3];
const numbers2 = [...numbers, ...numbers];
const numbers3 = [...numbers2, 999, ...numbers2];

console.log(numbers);
console.log(numbers2);
console.log(numbers3);

const person = {
    name: 'Maryte',
    age: 88,
    isMarried: true,
    childrenCount: 5,
    phone: 66476547564,
    adress: 'banduziu 18, kalafijoriskes',
    height: 200
}

console.log(person);
const person2 = {
    ...person,
    car: {
        ...car,
        price: 100000
    },
    happy: true,
}
console.log(person2);

console.log(person2.car.brand);

const { childrenCount, happy } = person2;
console.log(childrenCount, happy);
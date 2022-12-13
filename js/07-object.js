/*

        OBJECT (OBJEKTAS)
        "tikras" objektas

*/

const user1 = ['Petras', 99, true,];
const user2 = ['Maryte', 87, false,];

// Petras yra 99 metu amziaus.
// Maryte yra 87 metu amziaus.

const user1Name = user1[0];
const user1Age = user1[1];
const user1Intro = `${user1Name} yra ${user1Age} metu amziaus.`;
console.log(user1Intro);


const user2Name = user2[0];
const user2Age = user2[1];
const user2Intro = `${user2Name} yra ${user2Age} metu amziaus.`;
console.log(user2Intro);

const emptyObject = {};
console.log(emptyObject);

const student1 = {
    name: 'Jonas',
    age: 99,
    isMarried: false,
    marks: []
};

console.log(student1);

const student2 = {
    name: 'Ona',
    age: 69,
    isMarried: true,
    marks: [10, 2, 8, 4, 6]
}

console.log(student2);

// standartinis reiksmes istreaukimas is objekto -> obj['key']
const stud1Name = student1['name'];
const stud1Age = student1['age'];
const stud1Status = student1['isMarried'];
const stud1Marks = student1['marks'];
console.log(stud1Name);
console.log(stud1Age);
console.log(stud1Status);
console.log(stud1Marks);

const stud2Name = student2['name'];
const stud2Age = student2['age'];
const stud2Status = student2['isMarried'];
const stud2Marks = student2['marks'];
console.log(stud2Name);
console.log(stud2Age);
console.log(stud2Status);
console.log(stud2Marks);

//supaprastinta objekto reiksmes istraukimo sintaxe  -> obj.key

const car = {
    brand: 'Tesla',
    model: 'S',
    price: 100000,
    currency: 'EUR',
    color: 'red'
}
console.log(car);
console.log(car['brand']);
console.log(car.brand);

const obj = {
    simple: 'paprasta reiksme',
    childName: 'Johny boy'
}
console.log(obj.simple);
console.log(obj.childName);

// console.log(obj.child-name);   automatiskai minusuoja - name

console.log('-----------');

const student3 = {
    name: 'Ona',
    age: 69,
    isMarried: true,
    marks: [10, 2, 8, 4, 6]
}

const marks = student3.marks;
console.log(marks);

let sum = 0;
sum += marks[0];
sum += marks[1];
sum += marks[2];
sum += marks[3];
sum += marks[4];

const count = marks.length;

const average = sum / count;
console.log('Mark average:', average);

const person = {
    name: 'Petras',
    age: 99,
    children: [
        {
            name: 'Maryte',
            age: 13
        },
        {
            name: 'Jonas',
            age: 27
        },
        {
            name: 'Ona',
            age: 41
        }
    ],
}

console.log(person['children'][1]['name']);
console.log(person.children[1]['name']);
console.log(person['children'][1].name);
console.log(person.children[1].name);
console.log(person.children.length);

console.log('--------------');

const y =typeof'' + 5;
console.log(y);


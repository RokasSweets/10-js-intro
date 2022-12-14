console.clear();

//let timeHour = 25;

const timeNow = new Date();
const hour = timeNow.getHours();
const min = timeNow.getMinutes();
const sec = timeNow.getSeconds();
const time = `${hour}h : ${min}min : ${sec}s` ;

console.log('Dabatrinis laikas: ', time);

if (hour >= 12 && hour < 18) {
    console.log('Laba diena!');
} else if (6 <= hour && hour < 12) {
    console.log('Labas rytas!');
} else if (6 > hour) {
    console.log('Labanakt!');
} else if (hour >= 18 && hour <= 22) {
    console.log('Labas vakaras!');
} else if (hour > 24) {
    console.log('Durneli, tiek laikrodis valandu neturi!');
} else if (hour > 22 && hour <= 24) {
    console.log('Labanakt!');
}
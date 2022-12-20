console.clear();

const name = 'Petras';

console.log(name.length);
console.log(''.length);
console.log('aaaa'.length);
console.log('    '.length);
console.log('   '.length);

console.log('Petras'[0]);
console.log('Petras'[1]);
console.log('Petras'[2]);
console.log('Petras'[3]);
console.log('Petras'[4]);
console.log('Petras'[5]);
console.log('Petras'[6]);

console.log('Petras'.charAt(0)); // taspats kaip []
console.log('Petras'.at(-1));  // yra galimybe paimti indexuojant is galo i prieki
console.log('------------');
console.log('Maryte'.includes('M')); // AR YRA VIDUJ M
console.log('Maryte'.includes('ry'));
console.log('Maryte'.includes('re')); // tik iseiles einancios raides
console.log('Maryte'.startsWith('Ma'));
console.log('Maryte'.endsWith('te'));

console.log('------------');

const jaustukas = 'pyst';
const sakinys = 'va tai pyst ir yra';
const sakinys2 = 'Pyst per galva su PAGALIU';

console.log('jaustukas:', sakinys.includes(jaustukas));
console.log('jaustukas:', sakinys2.includes(jaustukas));

console.log(sakinys2.toLowerCase());

console.log('jaustukas:', sakinys.toLowerCase().includes(jaustukas));
console.log('jaustukas:', sakinys2.toLowerCase().includes(jaustukas));

const p1 = sakinys.toLowerCase().includes(jaustukas);
const p2 = sakinys2.toLowerCase().includes(jaustukas);
console.log('jaustukas lowercase:', p1);
console.log('jaustukas lowercase 2:', p2);

console.log('------------');

console.log('Jonas'.indexOf('J')); //parodo kur ta ieskoma raide yra 
console.log('Jonas'.indexOf('o'));
console.log('Jonas'.indexOf('n'));
console.log('Jonas'.indexOf('a'));
console.log('Jonas'.indexOf('s'));
console.log('Jonas'.indexOf('x')); // jeigu nera tada gaunasi -1
console.log('Jonas'.indexOf('g'));
console.log('Jonas'.indexOf('on'));
console.log('Jonas'.indexOf('onas'));
console.log('Jonas'.indexOf('onassss'));
console.log('Vasara'.indexOf('a')); // paima pirma atveji
console.log('Ananasas'.indexOf('a', 3)); //nuo 3 raides

console.log('------------');
//slice

const w1 = 'pasimatymas';
const w2 = w1.slice(1, w1.length - 1); //slice (start, end)
const w3 = w1.slice(-2); // 2 pask raides
console.log(w2);
console.log(w3);

console.log('------------');
//replace

const s1 = 'labas rytas, lietuva!';
const s2 = s1.replace('rytas', 'vakaras')
console.log(s1);
console.log(s2);

const template = 'gera diena, VARDAS!';
const userHi = template.replace('VARDAS', 'Ona')
console.log(template);
console.log(userHi);

const song = 'na na na na';
const song2 = song.replace('na', 'la');
const song3 = song.replaceAll('na', 'la');
const song4 = song.replace(/na/g, 'la');  //regex/ regexp g = globaliai ieskoti na
console.log(song);
console.log(song2);
console.log(song3);
console.log(song4);

console.log('------------');

//REPEAT

const superSong = 'La' + ' la'.repeat(5) + '!';
console.log(superSong);
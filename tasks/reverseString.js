console.clear();

//perrasyti texta is galo i prieki
// string (simboliu array) <--> array (bet ko array)

function reverseString(str) {
    if (typeof str !== 'string') {
        return `ERROR...: DUOK STRINGA, o ne ${typeof str}!`
    }

    let text = '';

    // 1) eiti is teksto galo, imti simboli ir lipdyti nauja texta
    //for (let i = str.length - 1; i >= 0; i--) {
      //  const symbol = str[i];
        //text += symbol;
    //}

       // 2) eiti is teksto priekio, imti simboli is galo
       //for (let i = 0; i < str.length; i++) {
        //const symbol = str[str.length - i - 1];
        //text += symbol;
    //}

         // 3) eiti is teksto priekio, imti simboli is priekio
       for (let i = 0; i < str.length; i++) {
        const symbol = str[i];
        text = symbol + text;
    }
    return text;
}

console.log(reverseString('a'), '--->', 'a');
console.log(reverseString('g'), '--->', 'g');
console.log(reverseString('fff'), '--->', 'fff');
console.log(reverseString('asdsa'), '--->', 'asdsa');
console.log(reverseString('sedek uzu kedes'), '--->', 'sedek uzu kedes');
console.log(reverseString('sula'), '--->', 'alus');


console.log(reverseString('asd'), '--->', 'dsa');
console.log(reverseString('qwerty'), '--->', 'ytrewq');
console.log(reverseString(5));
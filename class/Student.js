class Student {
    constructor(vardas, gimimoMetai) {
        this.name = vardas
        this.birthYear = gimimoMetai;
        this.isMarried = false;
        this.shoes = 40;
        this.marks = [];
    }

    //metodas itraukiantis nauja pazymi
    addMark(mark) {
        this.marks.push(mark)
    }

    marksAverage() {
        if (this.marks.length === 0) {
            return 'neiskaita'
        }
        const correctMarks = this.marks
            .filter(m => m >= 1)
            .filter(m => m <= 10)
            .filter(m => m % 1 === 0);
        console.log(correctMarks);
        return this.marks.reduce((t, m) => t + m, 0) / this.marks.length;

        
    }
}

//module.exports = Student; 
export { Student };
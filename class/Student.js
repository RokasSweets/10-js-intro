class Student {
    constructor(vardas, gimimoMetai) {
        this.name = vardas
        this.birthYear = gimimoMetai;
        this.isMarried = false;
        this.shoes = 40;
        this.marks = [];
    }


    isValidMark(mark) {
        if (typeof mark !== 'number'
            || !isFinite(mark)
            || mark < 1
            || mark > 10
            || mark %1 !== 0) {
            return false
        }
        return true
    }


    updateName(name) {
        this.name = name;
    }
    //metodas itraukiantis nauja pazymi
    addMark(mark) {
        if (!this.isValidMark(mark)) {
            return 'error'
        }
        this.marks.push(mark);
        return 'OK';
    }

    addMarks(...marks) {
        for (const mark of marks) {
            if (!this.isValidMark(mark)) {
            continue;
        }
        this.marks.push(mark);
        }

    }

    marksAverage() {
        if (this.marks.length === 0) {
            return 'neiskaita'
        }
        const correctMarks = this.marks
            .filter(this.isValidMark)

        console.log(correctMarks);
        return this.marks.reduce((t, m) => t + m, 0) / this.marks.length;

        
    }
}

//module.exports = Student; 
export { Student };
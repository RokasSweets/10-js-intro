class Student {
    constructor(vardas, gimimoMetai) {
        this.name = vardas
        this.birthYear = gimimoMetai;
        this.isMarried = false;
        this.shoes = 40;
        this.marks = [];
    }
}

//module.exports = Student; 
export default Student;
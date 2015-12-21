/**
 * Created by sakariruoho on 10/14/15.
 */
var sum = (a, b = 6) => (a + b);

var square = (b) => b * b; // foo


var variable = 8;

class MyClass {
    constructor(credentials) {
        this.name = credentials.name;
        this.enrollmentNo = credentials.enrollmentNo
    }
    getName() {
        return this.name;
    }
}

export { sum, square, variable, MyClass };
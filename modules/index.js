/**
 * Created by sakariruoho on 10/14/15.
 */
import {sum, square, variable, MyClass} from './import';

// 25
console.log(square(5));

var cred = {
    name: 'Ritesh Kumar',
    enrollmentNo: 11115078
}

var x = new MyClass(cred);

//Ritesh Kumar
console.log(x.getName());
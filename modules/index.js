/**
 * Created by sakariruoho on 10/14/15.
 */
import {sum, square, variable, MyClass} from './export';

// 25
console.log(square(5));

var cred = {
    name: 'Sakari Ruoho',
    enrollmentNo: 1234567
}

var x = new MyClass(cred);

//Ritesh Kumar
console.log(x.getName());
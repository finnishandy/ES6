/**
 * Created by Sakari.Ruoho on 18/12/2015.
 */
var _ = require('lodash');

var toLetterGrade = function (grade) {
    if(grade >= 90) return 'A';
    if(grade >= 80) return 'B';
    if(grade >= 70) return 'C';
    if(grade >= 60) return 'D';

    return 'F';
};
toLetterGrade (98); //-> A

var arrayize = function(fn) {
    return function(arr) {
        return _.map(arr, fn);
    }
};

var toLetterGrades = arrayize(toLetterGrade);
console.log(toLetterGrades([20, 98, 100, 73, 85, 50])); //-> [F, A, A, C, B, F]

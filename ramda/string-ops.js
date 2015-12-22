/**
 * Created by Sakari.Ruoho on 22/12/2015.
 */
var R = require('ramda');

var trim = (str) => str.replace(/^\s*|\s*$/g, '');

var normalize = (str) => str.replace(/\-/g, '');

var validLength = (param, str) => str.length === param;

var checkLengthSsn = validLength.bind(undefined, 9);

var sanitizeSsn = R.compose(normalize, trim);
var isValidSsn = R.compose(checkLengthSsn, sanitizeSsn);

console.log(sanitizeSsn(' 444-44-4444 '), '444444444');
console.log(isValidSsn(' 444-44-4444 '));

Function.prototype.compose = R.compose;

var isValidSsn2 = checkLengthSsn.compose(normalize).compose(trim);
console.log(isValidSsn2(' 444-44-4444 '));

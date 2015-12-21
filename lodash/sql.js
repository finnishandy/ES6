/**
 * Created by Sakari.Ruoho on 21/12/2015.
 */
var _ = require('lodash');

function Person(first, last, nationality, birth) {
    this.firstname = first;
    this.lastname = last;
    this.nationality = nationality;
    this.birth = birth;
}

Person.prototype.getFullName = function () {
    return [this.firstname, this.lastname].join(' ');
};
Person.prototype.toString = function () {
    return this.getFullName();
};
Person.prototype.getNationality = function () {
    return this.nationality;
};
Person.prototype.getBirth = function () {
    return this.birth;
};

var p1 = new Person('Alonzo', 'Church', 'American', 1903);
var p2 = new Person('Haskell', 'Curry', 'American', 1900);
var p3 = new Person('John', 'von Neumann', 'Hungarian', 1903);
var p4 = new Person('Barkley', 'Rosser', 'Greek', 1907);
var p5 = new Person('David', 'Hilbert', 'German', 1862);
var p6 = new Person('Alan', 'Turing', 'British', 1912);
var p7 = new Person('Stephen', 'Kleene', 'American', 1909);


// SELECT p.firstname FROM Person
// WHERE p.birth > 1903 and p.nationality IS NOT 'American'
// GROUP BY p.firstname, p.birth

_.mixin({
    'select': _.pluck,
    'from': _.chain,
    'where': _.filter,
    'groupBy': _.sortByOrder
});

var result =
    _.from([p1, p2, p3, p4, p5, p6, p7])
        .where(function (p) {
            return p.getBirth() > 1900 && p.getNationality() !== 'American'
        })
        .groupBy(['firstname', 'birth'])
        .select('firstname')
        .value();

console.log(result);

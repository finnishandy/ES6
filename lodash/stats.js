/**
 * Created by Sakari.Ruoho on 21/12/2015.
 */
var _ = require('lodash');

function Person(first, last, nationality) {
    this.firstname = first;
    this.lastname = last;
    this.nationality = nationality;
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


var p1 = new Person('Alonzo', 'Church', 'American');
var p2 = new Person('Haskell', 'Curry', 'American');
var p3 = new Person('John', 'von Neumann', 'Hungarian');
var p4 = new Person('Barkley', 'Rosser', 'Greek');
var p5 = new Person('David', 'Hilbert', 'German');
var p6 = new Person('Alan', 'Turing', 'British');
var p7 = new Person('Stephen', 'Kleene', 'American');

var getNationality = function (person) {
    return person.nationality;
};

var gatherStats = function (stat, nationality) {
    if (_.isUndefined(stat[nationality])) {
        stat[nationality] = {'name': nationality, 'count': 0};
    }
    stat[nationality].count++;
    return stat;
};

var nationality = _.chain([p1, p2, p3, p4, p5, p6, p7])
    .map(getNationality)
    .reduce(gatherStats, {})
    .values()
    .sortBy('count')
    .reverse()
    .first()
    .value()
    .name;

console.log(nationality);

_.from([p1, p2, p3, p4, p5, p6, p7])            
    .where((p) => p.birthYear() > 1900 && p.address.country !== 'US')
    .groupBy(['firstname', 'birthYear'])
    .select('firstname', 'birthYear')
    .value();  //-> ['Alan', 'Barkley', 'John']

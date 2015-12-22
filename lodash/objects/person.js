/**
 * Created by Sakari.Ruoho on 22/12/2015.
 */
function Person(first, last) {
    this.firstname = first;
    this.lastname = last;
}

Person.prototype.getFullName = function () {
    return [this.firstname, this.lastname].join(' ');
};
Person.prototype.toString = function () {
    return this.getFullName();
};

module.exports = Person;


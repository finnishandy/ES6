/**
 * Created by sakariruoho on 10/30/15.
 */
"use strict";

var _ = require('lodash');

function reduce(fn,accumulator,thisArg) {
    var idx = -1,
        len = this.length;
    if (!accumulator && len > 0) { //#A
        accumulator = this[++idx];
    }
    while (++idx < len) {
        accumulator = fn.call(thisArg, accumulator, //#B
            this[idx], idx, this);
    }
    return accumulator;       //#C
}

class Address {
    constructor(Country) {
        this.country = Country;
    }
}

class Person {
    constructor(Address) {
        this.address = Address;
    }
}
var uk = new Address("united kingdom");
var p1 = new Person(new Address("Hong Kong"));
var p2 = new Person(new Address("Finland"));
var p3 = new Person(uk);
var p4 = new Person(uk);

var stats = _([p1, p2, p3, p4]).reduce(function (stat, person) { //lodash
    var country = person.address.country;  //#A
    stat[country] = _.isUndefined(stat[country]) ? 1 : //#B
    stat[country] + 1;
    return stat; //#C
}, {}); //#D

console.log(stats + "\n");

console.log(_.groupBy([p1, p2, p3, p4], (person) => person.address.country));


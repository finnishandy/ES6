/**
 * Created by Sakari.Ruoho on 22/12/2015.
 */
"use strict";

var _ = require('lodash');
var tree = require('./objects/tree');
var node = require('./objects/node');
var Person = require('./objects/person');

// Tree class  
function map(node, fn) {
    fn(node.value);  //#A
    if (!node.hasChildren()) { //#B   
        return;   
    }
    _.map(node.children, function (child) {  //#C   
        map(child, fn); //#D
    });
};
var church = node(new Person('Alonzo', 'Church'));
var rosser = node(new Person('Barkley', 'Rosser'));
var kleene = node(new Person('Stephen', 'Kleene'));
var turing = node(new Person('Alan', 'Turing'));
var nelson = node(new Person('Nels', 'Nelson'));
var constable = node(new Person('Robert', 'Constable'));
var gandy = node(new Person('Robert', 'Gandy'));
var mendelson = node(new Person('Elliot', 'Mendelson'));
var sacks = node(new Person('Gerald', 'Sacks'));

church = church.append(rosser).append(turing).append(kleene);
kleene = kleene.append(nelson).append(constable);
rosser = rosser.append(mendelson).append(sacks);
turing = turing.append(gandy);

var foo = tree(church);

var mapRoot = _.partial(map, foo.getRoot());

mapRoot(function (p) {
    console.log(p.getFullName());
});

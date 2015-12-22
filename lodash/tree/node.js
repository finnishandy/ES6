/**
 * Created by Sakari.Ruoho on 22/12/2015.
 */
"use strict";

var _ = require('lodash');

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

Array.prototype.copy = function () {
    return _.map(this, _.identity);
};

class Node {        
    constructor(val) {          
        this._val = val;          
        this._parent = null;          
        this._children = [];        
    }        

    isRoot() {          
        return _.isUndefined(this._parent);        
    }        

    var getChildren = function() {          
        return this._children;        
    }        

    hasChildren() {          
        return this._children.length > 0;        
    }        

    var getValue = function () {          
        return this._val;        
    }        

    append(child) {           
        child._parent = this; //#A           
        this._children.push(child); //#B           
        return this; //#C        
    };
}



var Tree = function (root) {
    this.root = root;

    var _visit = function (node, callback) {

        callback(node.value);

        if (!node.hasChildren()) {
            return; // end of path
        }

        _.map(node.children, function (c) {
            _visit(c, callback);
        });
    };

    var _arr = function (arr, node) {

        arr.push(node);

        _.map(node.children, function (n) {
            _arr(arr, n);
        });
        return arr;
    };

    this.traverse = function (f) {
        _visit(this.root, f);
    };

    this.traverseRoot = _.bind(_visit, this, this.root);

    this.flatten = function () {
        return _arr([], this.getRoot());
    };
};
Tree.prototype.getRoot = function () {
    return this.root;
};

var node = function (p) {
    return new Node(p);
};
var tree = function (r) {
    return new Tree(r);
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

var apprenticeship = tree(church);
var result = false;
apprenticeship.traverseRoot(function (p) {
    result = p !== null;
    console.log(p.getFullName());
});

var callback = _.bind(function (p, arr) {
    arr.push(p);
}, null, _, []);

var arr = apprenticeship.flatten();

console.log(arr);

module.exports = Tree;

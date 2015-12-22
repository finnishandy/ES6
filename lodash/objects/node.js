/**
 * Created by Sakari.Ruoho on 22/12/2015.
 */
"use strict";

class Node {
    constructor(val) {
        this._val = val;
        this._parent = null;
        this._children = [];
    }

    isRoot() {
        return _.isUndefined(this._parent);
    }

    get children() {
        return this._children;
    }

    hasChildren() {
        return this._children.length > 0;
    }

    get value() {
        return this._val;
    }

    append(child) {
        child._parent = this; //#A           
        this._children.push(child); //#B           
        return this; //#C        
    };
}

var node = function (p) {
    return new Node(p);
};

module.exports = node;
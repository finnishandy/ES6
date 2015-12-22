/**
 * Created by Sakari.Ruoho on 22/12/2015.
 */
var _ = require('lodash');

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

module.exports = tree;
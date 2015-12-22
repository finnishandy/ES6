/**
 * Created by Sakari.Ruoho on 22/12/2015.
 */
"use strict";

module.exports = function Pair(a, b) {

    var _left = a;
    var _right = b;

    return {
        cons: function (a, b) {
            return Pair(a, b);
        },
        left: function () {
            return _left;
        },
        right: function () {
            return _right;
        },
        toArray: function () {
            return [_left, _right];
        }
    }
};

/**
 * Created by Sakari.Ruoho on 22/12/2015.
 */
"use strict";

var _ = require('lodash');
var bitree = require('./mock/bitreeMock');


/**
 * #A - Descend through the left branch
 * #B - Process current element. Invoke provided function on the node value
 * #C - Descend through the right branch
 * @param node
 * @param fn
 */
var search = function (node, fn) {
    if(node.left) {           
        search(node.left, fn); //#A         
    }         

    fn.call(this, node.value);  //#B         

    if(node.right) {            
        search(node.right, fn); //#C         
    }    
}


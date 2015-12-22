/**
 * Created by Sakari.Ruoho on 22/12/2015.
 */
var Pair = require('pair')

class BiNode extends Pair {       
    constructor(val) {         
        this._val = val;         
        this._parent = null;        
    }    

    isRoot() {       
        return _.isUndefined(this._parent);    
    }    

    get value() {       
        return this._val;    
    }    

    append(left, right) { //#A        
        left._parent = this;        
        right._parent = this;
        super._right = right;         
        super._left = left;        
        return this;    
    }
}



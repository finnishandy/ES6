/**
 * Created by Sakari.Ruoho on 18/12/2015.
 */
var _ = require('lodash');

var isValid = (val) => !_.isUndefined(val) && !_.isNull(val);

var allValid = (function () {        
    return _(arguments).flatten().every(isValid);
});
console.log(allValid(null));      //-> false    
console.log(allValid('string'));  //-> true    
console.log(allValid('string', 0, null, {})); //-> false



/**
 * Created by Sakari.Ruoho on 21/12/2015.
 */
var _ = require('lodash');

var names = ['alonzo church', 'Haskell curry', 'stephen_kleene', 'John Von Neumann', 'stephen_kleene'];

result = _.unique(names).map(_.startCase).sort();

console.log(result);

/**
 * Just to show the power of functional programming look at this possible example of imperative style
 *
 * var result = [];    
 * for (let i = 0; i < names.length; i++) { //#A        
 * var n = names[i];        
 * if (n !== undefined && n !== null) {   //#B            
 * var ns = n.replace(/_/, ' ').split(' '); //#C            
 * for(let j = 0; j < ns.length; j++) {                
 * var p = ns[j];                
 * p = p.charAt(0).toUpperCase() + p.slice(1);                
 * ns[j] = p;             
 * }            
 * if (result.indexOf(ns.join(' ')) < 0) {  //#D                
 * result.push(ns.join(' '));            
 * }        
 * }    
 * }    
 * result.sort(); //#E
 */

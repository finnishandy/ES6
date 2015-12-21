/**
 * Created by Sakari.Ruoho on 18/12/2015.
 */
var _ = require('lodash');
var result = _(['Haskell Curry', 'Barkley Rosser', 'John Neumann', 'Alonzo Church'])
                .reverse()
                .map((val) => val.split(' ')[1])
                .value();
console.log(result);

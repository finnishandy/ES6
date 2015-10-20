/**
 * Created by sakariruoho on 10/14/15.
 */
var kvArray = [{key:1, value:10}, {key:2, value:20}, {key:3, value: 30}];
var reformattedArray = kvArray.map(function(obj){
    var rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
});
// reformattedArray is now [{1:10}, {2:20}, {3:30}],
// kvArray is still [{key:1, value:10}, {key:2, value:20}, {key:3, value: 30}]

console.log(reformattedArray);
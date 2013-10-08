// Returns a string that concatenates each string from the array separated by 
// the given delimeter.
// e.g. join(['one', 'two', 'three'], ' and ') 
// returns: 'one and two and three'
var join = function(arr, delimeter) {
 var output = '';
 for(var i=0; i<arr.length-1; i++) {
  	output += arr[i] + delimeter;
	}
if (i = arr.length){
	output += arr[arr.length-1];	
	}
 return output;
};
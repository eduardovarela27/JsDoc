// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function(size) {
    let subArr = [];
    const arr = [];
    for(let i =1 ; i<=size; i++){
      for(let y =1; y<= size; y++){
            subArr.push(i*y);
      }
       arr.push(subArr);
       subArr = []
    }
      return size ===0 ? []:arr;    
  }

//Alternative solution by malyshevalex
multiplicationTable = function(size) {

  return Array.apply(null, new Array(size)).map(function(val, i) {
    return Array.apply(null, new Array(size)).map(function(val, j) {
      return (i+1) * (j+1);
    });
  });
}
//Alternative solution by Delscid
multiplicationTable = function(size) {
  var result = [];

  for (var i = 0; i < size; i++) {
    result[i] = [];
    for(var j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }
  
  return result
}

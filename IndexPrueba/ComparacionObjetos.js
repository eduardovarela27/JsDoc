// function cakes (recipe, available){
//     if(Object.values(recipe).length > Object.values(available).length){return 0}
//     let calc = 0;let arr =[];
//     for (let rec in recipe){
//         calc=Math.floor(available[rec]/recipe[rec]);//round down
//         arr.push(calc); 
//     };
//     return Math.min(...arr);
// }

// //for example

// let recipe = {flour: 500, sugar: 200, eggs: 1};
// let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
// cakes(recipe,available);
//End Cakes

// function generateHashtag (str) {
//     let strUpper = str.split(" ").map(s=> s.charAt(0).toUpperCase().concat("",s.slice(1))).join("");
//     return strUpper.length > 140 || strUpper.length === 0 ? false: "#".concat("",strUpper).split(" ").join("");
//   }
//   let str = "";
//   console.log(generateHashtag(str));
//End generateHastag

// function moveZeros(arr) {
//     const zeros = arr.filter(m => m === 0);
//     return arr.filter(m => m !== 0).concat(zeros);
// }
// const test = ['a','b',null,'c','d',1,false,1,3,[],1,9,{},9,0,0,0,false,0,0,[],0,0,0,0,0]
// console.log(moveZeros(test));
//End moveZeros

function sumIntervals(intervals) {
    const long = intervals.flat();//aplanar el arreglo
    return intervals.map(i => i[1] - i[0]).reduce((a,b)=>a+b);
  }

  console.log(sumIntervals([[1,2],[6, 10],[11, 15]]));
  console.log(sumIntervals( [[1,5],[10, 20],[1, 6],[16, 19],[5, 11]]));
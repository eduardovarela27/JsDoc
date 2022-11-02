multiplicationTable = function (size) {
    let subArr = [];
    const arr = [];
    for (let i = 1; i <= size; i++) {
        for (let y = 1; y <= size; y++) {
            subArr.push(i * y);
        }
        arr.push([subArr]);
        subArr = []
    }
    return size === 0 ? [] : arr;

}

//   console.log(multiplicationTable(1));

function digitalRoot(n) {
    let arr = []
    let str = n.toString();
    for(let i = 0; i < str.length ; i ++){arr.push(str.charAt(i));}
    return arr.map(Number).reduce((a,b)=>a+b);
}

console.log(digitalRoot(16));
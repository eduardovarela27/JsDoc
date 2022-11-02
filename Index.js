var maxSequence = function (arr) {
    if (arr.length === 0 || (arr.reduce((a, b) => a + b)) < 0) { return 0 }
    let sequence = 0; let count = 0;
    arr.forEach((a) => {
        count += a;
        if (count < 0) { count = 0 }
        if (count > sequence) { sequence = count }
    });
    return sequence;
}

console.log(maxSequence([8, -9, 11, -2, 1, 2, -3]));//buscar la subsecuencia
console.log(maxSequence([]));

// [-2, 1, -3, 4, -1, 2, 1, -5, 4]

const products =
{
    name:"",
    prize:""
}
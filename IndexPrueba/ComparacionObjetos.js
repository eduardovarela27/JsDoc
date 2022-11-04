function cakes (recipe, available){
    if(Object.values(recipe).length > Object.values(available).length){return 0}
    let calc = 0;let arr =[];
    for (let rec in recipe){
        calc=Math.floor(available[rec]/recipe[rec]);//round down
        arr.push(calc); 
    };
    return Math.min(...arr);
}

//for example

let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
cakes(recipe,available);
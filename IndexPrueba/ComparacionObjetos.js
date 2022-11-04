function cakes (recipe, available){
    //code here
    let calc = 0;
    for (let rec in recipe){
        calc=Math.floor(available[rec]/recipe[rec]);//round down
        //console.log(`${rec}`);
        //console.log(`${available[rec]}`);
        console.log(calc);
    };
    console.log(`Result: ${calc}`);
}

//for example

let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
cakes(recipe,available);
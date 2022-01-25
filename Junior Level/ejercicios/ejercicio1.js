/* Hay 3 amigos que van a una tienda de helado, 
cada uno de ellos tiene diferentes cantidades de dinero 
segun la cantidad de dinero que ellos digan al programa que tienen; 
el programa debera de dar un menu resumiendo lo que pueden comprar 
con dicha cantidad */

// menu
// 0.6 = helado de agua
// 1 = helado de crema 
// 1.6 = helado de heladix
// 1.7 = helado de heladovich
// 1.8 = helado de helardo
// 2.9 = helado con confites
// 2.9 = pote de un 1/4 kg

const menu = [
    { id: 1, desc: "helado de agua", precio: 0.6, },
    { id: 2, desc: "helado de crema", precio: 1, },
    { id: 3, desc: "helado de heladix", precio: 1.6, },
    { id: 4, desc: "helado de heladovich", precio: 1.7 },
    { id: 5, desc: "helado de helardo", precio: 1.8, },
    { id: 6, desc: "helado de confites", precio: 2.9, },
    { id: 7, desc: "pote de 1/4 kg", precio: 2.9, },
]

let dineroCofla = prompt("cuanto dinero tienes?");

let result = menu.filter(helado => helado.precio <= dineroCofla);
if (result.length === 0){
    alert('No te alcanza para nada, pobre de mierda');
}
result.forEach(helado => {
    let container = document.getElementById('container');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(`${helado.desc}, te sobran: ${dineroCofla -helado.precio}`));
    container.appendChild(li);
});

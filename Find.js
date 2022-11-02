const users = [
    { id: 1, name: "eduardo", lastName: "varela" },
    { id: 2, name: "fernando", lastName: "varela" },
    { id: 3, name: "fernando", lastName: "varela" },
    { id: 4, name: "fernando", lastName: "varela" },
];



let cuenta = users.map(user => user.id).reduce((acc, el) => acc + el);
console.log(cuenta);

let miCarrito = [
    { "id_producto": 2, "nombre": "Bombilla individual GU10", "cantidad": 1, "precio": 20 },
    { "id_producto": 3, "nombre": "Bombilla individual GU10", "cantidad": 1, "precio": 20 },
    { "id_producto": 2, "nombre": "Bombilla individual GU10", "cantidad": 1, "precio": 20 },
    { "id_producto": 2, "nombre": "Bombilla individual GU10", "cantidad": 1, "precio": 20 },
    { "id_producto": 3, "nombre": "Bombilla individual GU10", "cantidad": 1, "precio": 20 },
    { "id_producto": 4, "nombre": "Bombilla individual GU10", "cantidad": 1, "precio": 20 },
    { "id_producto": 5, "nombre": "Bombilla individual GU10", "cantidad": 1, "precio": 20 },
    { "id_producto": 4, "nombre": "Bombilla individual GU10", "cantidad": 1, "precio": 20 },


];
const miCarrito2 = [];
let y = 1;
miCarrito.forEach(pro => {//recorro cada objeto del arreglo
    for (let i = y; i < miCarrito.length; i++) {//lo comparo con el siguiente, por eso y=1
        const element = miCarrito[i]; //recojo el valor del elemento siguiente
        if (pro.id_producto === element.id_producto) {//Evaluo si tienen el mismo id
            let comp = miCarrito2.find(p => p.id_producto === element.id_producto) ?? null;//busco si el elemento con ese id ya existe en el arreglo nuevo
            if (comp === null) {//si no existe, lo agrego
                element.cantidad += pro.cantidad; //itero la cantidad de unidades
                miCarrito2.push({ ...element });
                // element.cantidad = 0;
            } else if (comp) {//si existe, solo itero la cantidad de unidades
                miCarrito2.forEach(m => {//recorro el nuevo arreglo
                    if (m.id_producto === comp.id_producto) {
                        m.cantidad += element.cantidad;
                        element.cantidad = 0;
                    }
                });
            }
        } else if (!miCarrito2.find(pro => pro.id_producto === element.id_producto)) {//agrego elementos unicos, que no tengan elementos repetidos
            miCarrito2.push(element);
        }
    }
    y++;//itero la y, la cual controla la comparacion con el elemnto siguiente
});
console.log(miCarrito2);
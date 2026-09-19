


const pedidos = ["Espresso", "americano", "cappuccino", "latte", "mocha" ];

console.log("------------- Cocina ---------------");
console.log("Pedido actual");
console.log("");

console.log(pedidos);
console.log("");

console.log("AGREGAR Cafe");
console.log("");
pedidos.push("Cafe")
console.log(pedidos);
console.log("");

console.log("EDITAR Espresso");
console.log("");
pedidos[0] = "Té";
console.log(pedidos);
console.log("");

console.log("ELIMINAR Té");
console.log("");
pedidos.splice(0, 1);

console.log(pedidos);
console.log("");

console.log("LISTA");
console.log("");
pedidos.forEach((pedidos, indice) =>{
    console.log(indice + 1, " " + pedidos);
});
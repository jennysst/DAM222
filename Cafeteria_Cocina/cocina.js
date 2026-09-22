


const productos=[{producto: "Espresso", precio: 600},
                {producto: "Americano", precio: 50},
                {producto: "Cappuccino", precio: 550},
                {producto: "Latte", precio: 70},
                {producto: "Mocha", precio: 30}
];

const productosBaratos = productos.filter(producto => producto.precio < 100)
const productosCaros = productos.filter(producto => producto.precio > 100)

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("------------- COCINA ---------------");
console.log("");

console.log(productos);

console.log("");
console.log("1 - Agregar producto");
console.log("2 - Editar producto");
console.log("3 - Eliminar producto");
console.log("4 - Ver productos");
console.log("");

rl.question("Elija una opción", (opcion)=>{

    if(opcion == 1){
        rl.question("¿Que desea agregar?",(p)=>{
            productos.push(p);
            productos.forEach((productos, indice) =>{
            console.log(indice + 1, " " + productos);
});
rl.close();
    });
    
    }
    else
    if(opcion == 2){
        rl.question("¿Cual es la posicion del producto a editar?",(po)=>{
            rl.question("¿Cual es el nuevo producto?",(nuevo)=>{
            productos[po] = nuevo;
            productos.forEach((productos, indice) =>{
            console.log(indice + 1, " " + productos);
});
rl.close();
    });
    
    });
    
    }
    else
    if(opcion == 3){
        rl.question("¿Cual es la posicion del producto a eliminar?",(el)=>{
            productos.splice(el, 1);
            productos.forEach((productos, indice) =>{
            console.log(indice + 1, " " + productos);
});
rl.close();
    });
    
    }
    else
    if(opcion == 4){
        console.log("MENÚ");
        console.log("");

        console.log("1 - Productos baratos");
        console.log("2 - Productos caros");
        console.log("3 - bebidas");
        console.log("4 - Postres");

        rl.question("Elija una opción", (opcion2)=>{
            if(opcion2 == 1){
                console.log(productosBaratos);
            }else
                if(opcion2 == 2){
                console.log(productosCaros);
            }

            rl.close();
        });
        

        


    
    }

});


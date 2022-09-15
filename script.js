//
class Producto {
    constructor(nombre, id, precio, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.stock = stock;
    }
}

//se hacen los arrays para crear las categorias de productos
const procesadores = [];
const placasMadre = [];
const tarjetasVideo = [];

//PROCESADORES
procesadores.push(new Producto("Ryzen 3 3200G", 1, "125.000", 6));
procesadores.push(new Producto("Ryzen 5 3600", 2, "157.000", 2));
procesadores.push(new Producto("Ryzen 7 5800", 3, "200.000", 4));
//PLACAS MADRE
placasMadre.push(new Producto("ASUS ROG STRIX B550-F", 4, "239.000", 1));
placasMadre.push(new Producto("ASUS TUF GAMING X570-PLUS", 5, "220.000", 3));
placasMadre.push(new Producto("MSI A320M-A PRO MAX", 6, "48.000", 7));
//TARJETAS DE VIDEO
tarjetasVideo.push(new Producto("ASUS TUF-RTX3080TI", 7, "885.000", 2));
tarjetasVideo.push(new Producto("EVGA GeForce GTX 1660 SUPER SC", 8, "300.000", 2));
tarjetasVideo.push(new Producto("Galax GeForce GTX 1650 EX", 9, "199.000", 1));

//LLamo el id creado en el html
let areaProductos = document.getElementById("area-productos");
//se crea una funcion para crear las card en el html
function crearCard (producto) {
    //Se crea div contenedor para cada card con estilos de boostrap
    let card = document.createElement("div");
    card.setAttribute("class", "card card-producto");
    card.style.width = "18rem";

    areaProductos.appendChild(card);
    //creo contenedores que contengan las imagenes de los productos y se los asigno como hijos a las cards
    let cardImg = document.createElement("div");
    cardImg.innerHTML = `<img src="./media/${producto.id}.png" class="card-img-top" alt="${producto.nombre}"></img>`;
    card.appendChild(cardImg);
    //se crean contenedores para el nombre del producto y el precio
    let cardBody = document.createElement("div");
    cardBody.innerHTML = `<h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text"> Precio: $${producto.precio} </p>
                            <button class="btn btn-dark">Comprar</button>`;
    card.appendChild(cardBody);
    cardBody.setAttribute("class", "card-body");
}

//se recorren los arrays para crear las card con la funcion crearCard
    for (const procesador of procesadores) {
        crearCard(procesador);
    }

    for (const placaMadre of placasMadre) {
        crearCard(placaMadre);
    }
    
    for (const tarjetaDeVideo of tarjetasVideo) {
        crearCard(tarjetaDeVideo);
}
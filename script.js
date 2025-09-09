const pizzas = [
    { id: 1, nombre: "Margarita", precio: 13500.0, imagen: "ruta/margarita.jpg", descripcion: "La más clásica de todas. Una combinación simple y fresca que representa los colores de Italia.", ingredientes: "Salsa de tomate, queso mozzarella, hojas de albahaca fresca, aceite de oliva." },
    { id: 2, nombre: "Napolitana", precio: 16500.0, imagen: "ruta/napolitana.jpg", descripcion: "Un ícono de Nápoles, con sabor intenso y aromático.", ingredientes: "Salsa de tomate, queso mozzarella, tomates en rodajas, ajo, orégano." },
    { id: 3, nombre: "Fugazzeta", precio: 11500.0, imagen: "ruta/fugazzeta.jpg", descripcion: "Orgullo argentino: contundente y deliciosa, con mucho queso y cebolla.", ingredientes: "Masa rellena de mozzarella, cebolla en abundancia, aceite de oliva, orégano." },
    { id: 4, nombre: "Cuatro Quesos", precio: 17000.0, imagen: "ruta/cuatroquesos.jpg", descripcion: "La favorita de los amantes del queso, cremosa y llena de sabor.", ingredientes: "Mozzarella, gorgonzola (o roquefort), parmesano, provolone." },
    { id: 5, nombre: "Pepperoni", precio: 12800.0, imagen: "ruta/pepperoni.jpg", descripcion: "Muy popular en Estados Unidos, con un toque picante irresistible.", ingredientes: "Salsa de tomate, mozzarella, rodajas de pepperoni." },
    { id: 6, nombre: "Hawaiana", precio: 14000.0, imagen: "ruta/hawaiana.jpg", descripcion: "La combinación que divide opiniones: dulce y salada en cada bocado.", ingredientes: "Salsa de tomate, mozzarella, jamón, ananá (piña)." },
    { id: 7, nombre: "Vegetariana", precio: 16000.0, imagen: "ruta/vegetariana.jpg", descripcion: "Colorida y ligera, ideal para los amantes de las verduras.", ingredientes: "Salsa de tomate, mozzarella, pimientos, champiñones, cebolla, aceitunas, zucchini o berenjena." },
    { id: 8, nombre: "Caprichosa", precio: 18000.00, imagen: "ruta/caprichosa.jpg", descripcion: "Una receta variada y sabrosa, típica de Italia.", ingredientes: "Salsa de tomate, mozzarella, jamón, champiñones, alcachofas, aceitunas negras." },
    { id: 9, nombre: "Calabresa", precio: 14800.0, imagen: "ruta/calabresa.jpg", descripcion: "Potente y con carácter, ideal para quienes disfrutan del picante.", ingredientes: "Salsa de tomate, mozzarella, longaniza o salame calabrés, ají picante (opcional)." },
    { id: 10, nombre: "Prosciutto y Rúcula", precio: 19000.0, imagen: "ruta/prosciuttorucula.jpg", descripcion: "Un toque gourmet que mezcla lo fresco y lo intenso.", ingredientes: "Mozzarella, jamón crudo (prosciutto), rúcula fresca, parmesano en escamas, aceite de oliva." }
];

let carrito = [];

const pizzaContainer = document.querySelector(".pizza-container");
const carritoItems = document.getElementById("carrito-items");
const totalElement = document.getElementById("total");
const carritoCantidad = document.getElementById("carrito-cantidad");

// Renderizar las pizzas en el menú
function renderizarPizzas() {
    pizzas.forEach(pizza => {
        const pizzaCard = document.createElement("div");
        pizzaCard.classList.add("pizza-card");
        pizzaCard.innerHTML = `
            <img src="${pizza.imagen}" alt="${pizza.nombre}">
            <h3>${pizza.nombre}</h3>
            <p>${pizza.descripcion}</p>
            <p>Ingredientes: ${pizza.ingredientes}</p>
            <p>Precio: $${pizza.precio.toFixed(2)}</p>
            <button onclick="agregarAlCarrito(${pizza.id})">Agregar al carrito</button>
        `;
        pizzaContainer.appendChild(pizzaCard);
    });
}

// Agregar pizza al carrito
function agregarAlCarrito(id) {
    const pizza = pizzas.find(pizza => pizza.id === id);
    if (pizza) {
        carrito.push(pizza);
        actualizarCarrito();
    }
}

// Eliminar item del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Renderizar los items del carrito
function renderizarCarrito() {
    carritoItems.innerHTML = "";
    carrito.forEach((item, index) => {
        const carritoItem = document.createElement("div");
        carritoItem.classList.add("carrito-item");
        carritoItem.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}">
            <div>
                <span>${item.nombre} - $${item.precio.toFixed(2)}</span><br>
                <span>Ingredientes: ${item.ingredientes}</span>
            </div>
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        carritoItems.appendChild(carritoItem);
    });
}

// Actualizar el total del carrito
function actualizarTotal() {
    const total = carrito.reduce((acc, item) => acc + item.precio, 0);
    totalElement.textContent = total.toFixed(2);
}

// Actualizar la cantidad en el carrito del header
function actualizarCantidadCarrito(){
    carritoCantidad.textContent = carrito.length;
}

// Función principal para actualizar el carrito
function actualizarCarrito() {
    renderizarCarrito();
    actualizarTotal();
    actualizarCantidadCarrito();
}

// Evento al hacer click en el boton comprar (simulacion)
document.getElementById("comprar").addEventListener("click", function() {
    if (carrito.length > 0) {
        alert("¡Gracias por tu compra!");
        carrito = [];
        actualizarCarrito();
    } else {
        alert("El carrito está vacío.");
    }
});


// Inicialización
renderizarPizzas();

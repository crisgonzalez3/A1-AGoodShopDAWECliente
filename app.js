const productos = [
    { SKU: "0K3QOSOV4V", title: "iFhone 13 Pro", price: 938.99 },
    { SKU: "TGD5XORY1L", title: "Cargador", price: 49.99 },
    { SKU: "IOKW9BQ9F3", title: "Funda de piel", price: 79.99 },
    { SKU: "0K3QOSOV5V", title: "iFhone 14 Pro", price: 1200.99 }
];

let carrito = [];

// Cargar productos disponibles en la lista
function cargarProductos() {
    const productosList = document.getElementById('productos');
    productos.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.title} - €${producto.price.toFixed(2)}`;
        li.setAttribute('data-sku', producto.SKU);

        const agregarBtn = document.createElement('button');
        agregarBtn.textContent = '+';
        agregarBtn.onclick = () => agregarProducto(producto.SKU);

        li.appendChild(agregarBtn);
        productosList.appendChild(li);
    });
}

// Agregar producto al carrito
function agregarProducto(sku) {
    const producto = productos.find(p => p.SKU === sku);
    if (producto) {
        carrito.push(producto);
        actualizarCarrito();
    }
}

// Eliminar producto del carrito
function eliminarProducto(sku) {
    carrito = carrito.filter(p => p.SKU !== sku);
    actualizarCarrito();
}

// Actualizar la lista del carrito y el total
function actualizarCarrito() {
    const carritoList = document.getElementById('carrito');
    carritoList.innerHTML = ''; // Limpiar lista

    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.title} - €${producto.price.toFixed(2)}`;
        li.setAttribute('data-sku', producto.SKU);

        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = '-';
        eliminarBtn.onclick = () => eliminarProducto(producto.SKU);

        li.appendChild(eliminarBtn);
        carritoList.appendChild(li);
    });

    const total = carrito.reduce((sum, producto) => sum + producto.price, 0);
    document.getElementById('total').textContent = `Total: €${total.toFixed(2)}`;
}

cargarProductos();

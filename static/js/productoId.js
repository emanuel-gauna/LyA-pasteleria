document.addEventListener('DOMContentLoaded', () => {
    const contenedorProducto = document.getElementById("contenedorProducto");

    // Función para obtener un producto desde la API REST por ID
    async function obtenerProducto(productoId) {
        try {
            const response = await fetch(`http://127.0.0.1:5000/api/productos/${productoId}`); // Ajusta la URL según tu configuración
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const producto = await response.json();
            console.log(producto); // Para verificar los datos obtenidos

            // Determinar el icono para la disponibilidad del producto
            const disponibleIcono = producto.disponible ? "disponible ✔️" : "no disponible ❌";

            // Generar el HTML de la tarjeta Bootstrap para el producto actual
            const tarjetaHTML = `
                <div class="card mb-4 shadow-sm">
                    <img src="/static/img/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                        <h3 class="card-title"><strong>${producto.nombre}</strong></h3>
                        <p class="card-text" style="color: blue;">${producto.descripcion}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-primary bg-pink">Comprar</button>
                            </div>
                            <h3 style="color: green;">$${producto.precio}</h3>
                            <span>${disponibleIcono}</span>
                        </div>
                    </div>
                </div>
            `;
            contenedorProducto.innerHTML = tarjetaHTML;
        } catch (error) {
            console.error('Error al obtener el producto:', error);
            contenedorProducto.innerHTML = `<div class="alert alert-danger" role="alert">Error al obtener el producto: ${error.message}</div>`;
        }
    }

    // Obtener el ID del producto desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const productoId = urlParams.get('id');
    
    if (productoId) {
        // Llamar a la función para obtener el producto cuando se cargue el contenido
        obtenerProducto(productoId);
    } else {
        contenedorProducto.innerHTML = '<div class="alert alert-warning" role="alert">ID del producto no especificado en la URL.</div>';
    }
});

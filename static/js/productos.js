document.addEventListener('DOMContentLoaded', () => {
    const contenedorProductos = document.getElementById("contenedorProductos");

    // Ajusta esta URL según la configuración de tu API
    const API_URL = 'http://127.0.0.1:5000/api/productos';  // URL del backend
    // Base URL de las imágenes en GitHub Pages
    const BASE_IMG_URL = 'https://emanuel-gauna.github.io/LyA-pasteleria/static/img/';

    // Función para obtener productos desde la API REST
    async function obtenerProductos() {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const productos = await response.json();
            console.log(productos); // Para verificar los datos obtenidos

            productos.forEach(producto => {
                // Determinar el icono para la disponibilidad del producto
                const disponibleIcono = producto.disponible ? "disponible ✔️" : "no disponible ❌";

                // Generar el HTML de la tarjeta Bootstrap para el producto actual
                const tarjetaHTML = `
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <!-- Asegúrate de que la URL de la imagen sea accesible desde el frontend -->
                            <img src="${BASE_IMG_URL}${encodeURIComponent(producto.imagen)}" class="card-img-top" alt="${producto.nombre}">
                            <div class="card-body">
                                <h3 class="card-title"><strong>${producto.nombre}</strong></h3>
                                <p class="card-text" style="color: blue;">${producto.descripcion}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <a href="./productDetail.html?id=${producto.id}" class="btn btn-sm btn-custom-purple">Ver más</a>
                                        <button type="button" class="btn btn-sm btn-outline-primary bg-pink">Comprar</button>
                                    </div>
                                    <h3 style="color: green;">${producto.precio}</h3>
                                    <span>${disponibleIcono}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                contenedorProductos.innerHTML += tarjetaHTML;
            });
        } catch (error) {
            console.error('Error al obtener los productos:', error);
            contenedorProductos.innerHTML = `<div class="alert alert-danger" role="alert">Error al obtener los productos: ${error.message}</div>`;
        }
    }

    // Llamar a la función para obtener productos cuando se cargue el contenido
    obtenerProductos();
});

document.addEventListener('DOMContentLoaded', () => {
    const contenedorProductos = document.getElementById("contenedorProductos");
    const crearProductoBtn = document.getElementById("crearProductoBtn");

    // Función para obtener productos desde la API REST
    async function obtenerProductos() {
        try {
            const response = await fetch('http://127.0.0.1:5000/api/productos');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const productos = await response.json();
            console.log(productos); // Para verificar los datos obtenidos

            contenedorProductos.innerHTML = '';
            productos.forEach(producto => {
                const disponibleIcono = producto.disponible ? "Disponible ✔️" : "No disponible ❌";

                const tarjetaHTML = `
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                            <div class="card-body">
                                <h3 class="card-title"><strong>${producto.nombre}</strong></h3>
                                <p class="card-text">${producto.descripcion}</p>
                                <h4 class="card-text" style="color: green;">${producto.precio}</h4>
                                <span>${disponibleIcono}</span>
                                <div class="d-flex justify-content-between align-items-center mt-3">
                                    <button type="button" class="btn btn-sm btn-outline-primary editar-btn" data-id="${producto.id}">Editar</button>
                                    <button type="button" class="btn btn-sm btn-outline-danger eliminar-btn" data-id="${producto.id}">Eliminar</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary disponibilidad-btn" data-id="${producto.id}">${producto.disponible ? 'Marcar como No Disponible' : 'Marcar como Disponible'}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                contenedorProductos.innerHTML += tarjetaHTML;
            });

            // Añadir eventos a los botones de editar, eliminar y cambiar disponibilidad
            document.querySelectorAll('.editar-btn').forEach(button => {
                button.addEventListener('click', () => editarProducto(button.dataset.id));
            });

            document.querySelectorAll('.eliminar-btn').forEach(button => {
                button.addEventListener('click', () => eliminarProducto(button.dataset.id));
            });

            document.querySelectorAll('.disponibilidad-btn').forEach(button => {
                button.addEventListener('click', () => cambiarDisponibilidad(button.dataset.id));
            });

        } catch (error) {
            console.error('Error al obtener los productos:', error);
            contenedorProductos.innerHTML = `<div class="alert alert-danger" role="alert">Error al obtener los productos: ${error.message}</div>`;
        }
    }

    // Función para crear un nuevo producto
    crearProductoBtn.addEventListener('click', () => {
        const nuevoProducto = {
            nombre: prompt('Nombre del producto:'),
            descripcion: prompt('Descripción del producto:'),
            precio: parseFloat(prompt('Precio del producto:')),
            disponible: confirm('¿Está disponible el producto?'),
            imagen: prompt('URL de la imagen del producto:')
        };
        crearProducto(nuevoProducto);
    });

    // Función para crear producto en la API
    async function crearProducto(producto) {
        try {
            const response = await fetch('http://127.0.0.1:5000/api/productos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const nuevoProducto = await response.json();
            console.log('Producto creado:', nuevoProducto);
            location.reload();
        } catch (error) {
            console.error('Error al crear el producto:', error);
        }
    }

    // Función para editar un producto
    async function editarProducto(productoId) {
        const producto = {
            nombre: prompt('Nuevo nombre del producto:'),
            descripcion: prompt('Nueva descripción del producto:'),
            precio: parseFloat(prompt('Nuevo precio del producto:')),
            disponible: confirm('¿Está disponible el producto?'),
            imagen: prompt('Nueva URL de la imagen del producto:')
        };
        try {
            const response = await fetch(`http://127.0.0.1:5000/api/productos/${productoId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log('Producto actualizado');
            alert('producto actualizado corectamente')
            location.reload();
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
        }
    }

    // Función para eliminar un producto
    async function eliminarProducto(productoId) {
        if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
            try {
                const response = await fetch(`http://127.0.0.1:5000/api/productos/${productoId}`, {
                    method: 'DELETE',
                    credentials: 'include' 
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                console.log('Producto eliminado');
                location.reload();
            } catch (error) {
                console.error('Error al eliminar el producto:', error);
            }
        }
    }

    // Función para cambiar la disponibilidad de un producto
    async function cambiarDisponibilidad(productoId) {
        try {
            const producto = await fetch(`http://127.0.0.1:5000/api/productos/${productoId}`).then(res => res.json());
            const nuevaDisponibilidad = !producto.disponible;
            const response = await fetch(`http://127.0.0.1:5000/api/productos/${productoId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ disponible: nuevaDisponibilidad })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log('Disponibilidad del producto cambiada');
            alert('Disponibilidad del producto cambiada correctamente');
            location.reload();
        } catch (error) {
            console.error('Error al cambiar la disponibilidad del producto:', error);
        }
    }

    // Llamar a la función para obtener productos cuando se cargue el contenido
    obtenerProductos();
});

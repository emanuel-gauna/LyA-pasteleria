const contenedorProductos = document.getElementById("contenedorProductos");

const productosPasteleria = [
    {
        id: 1,
        nombre: "Muffins varios",
        descripcion: "Deliciosos muffins horneados con arándanos frescos y una pizca de canela de Arándanos, banana, o Frutos Rojos, chips de chocolate y rellenos de dulce de leche (precio por unidad)",
        precio: 600.00,
        disponible: true,
        image: "/static/img/Muffins de coco y dulce de leche.jpg"
    },
    {
        id: 2,
        nombre: "Budín de Limón y Chocolate con  Nuez",
        descripcion: "Budín esponjoso con el sabor cítrico de la naranja y un glaseado de azúcar, de nuez y bañado en  chocolate (precio por unidad)",
        precio: 3000,
        disponible: true,
        image: "/static/img/budin de limon y amapolas , budin de chocolate y nuez.png"
    },
    {
        id: 3,
        nombre: "Escones de Queso",
        descripcion: "Escones de queso salados, para acompañar con fiambres o solos (precio por unidad)",
        precio: 100,
        disponible: false,
        image: "/static/img/scones de queso.png"
    },
    {
        id: 4,
        nombre: "Tarta de Manzana",
        descripcion: "Tarta crujiente con una capa de manzanas frescas y un toque de canela, perfecta para cualquier ocasión.",
        precio: 6000,
        disponible: true,
        image: "/static/img/tarta-manzana.jpg"
    },
    {
        id: 5,
        nombre: "Roll de Canela",
        descripcion: "Rolles de canela dulces con azucar negra por 6 unidades, ideales para la merienda o desayuno",
        precio: 3500,
        disponible: true,
        image: "/static/img/Roll-canela.jpg"
    },
    {
        id: 6,
        nombre: "Pasta Frola",
        descripcion: "Clásica Pastaflora de dulce de membrillo, batata, y dulce de leche",
        precio: 5000,
        disponible: true,
        image: "/static/img/pastafrola.jpg"
    },
    {
        id: 7,
        nombre: "Medialunas",
        descripcion: "medialunas de manteca y de grasa, ideal para desayuno y merienda (precio por docena)",
        precio: 4000,
        disponible: true,
        image: "/static/img/medialunas.jpg"
    },
    {
        id: 8,
        nombre: "Rosca de Reyes",
        descripcion: "Rosca dulce tradicional decorada con frutas confitadas y azúcar glase, típica de la celebración del Día de Reyes o Pascuas.",
        precio: 4500,
        disponible: false,
        image: "/static/img/rosca-reyes.jpg"
    },
    {
        id: 9,
        nombre: "Cookies",
        descripcion: "Galletas caseras dulces , crujientes por fuera y suaves por dentro, ideales para acompañar un café con chispas de chocolate. (precio por 250GR)",
        precio: 1000,
        disponible: true,
        image: "/static/img/cookies.jpg"
    },
    {
        id: 10,
        nombre: "Chipá",
        descripcion: "Galletas saladas horneadas con una pizca de sal marina y hierbas frescas, perfectas para acompañar un queso.(precio por 250 gr)",
        precio: 2000,
        disponible: true,
        image: "/static/img/chipá.jpg"
    },
    {
        id: 11,
        nombre: "Alfajores de Maizena",
        descripcion: "Dulces alfajores rellenos de dulce de leche y cubiertos con coco rallado (precio por unidad)",
        precio: 250,
        disponible: true,
        image: "/static/img/IMG-20240505-WA0028.jpg"
    },
    {
        id: 12,
        nombre: "Shots - chocotorta- cheesecake",
        descripcion: "shots de postres dedicados para ocaciones especiales cheesecake - chocotorta - red velvet (precio por unidad)",
        precio: 1000,
        disponible: false,
        image: "/static/img/shots-chocotorta.jpg"
    },
    {
        id: 13,
        nombre: "Desayunos dedicados",
        descripcion: "Desayunos dedicados para ocaciones especiales. consta de: 2 rodajas de budin marmolado, cake de manzana, porcion de torta, 2 pebetes de jyq, 3 chipacitos, 3 galletas glase, un jugo individual, infusiones varias (precio a convenir)",
        precio: undefined,
        disponible: false,
        image: "/static/img/desayuno.jpg"
    },
]




productosPasteleria.forEach(producto =>{
 // Determinar el icono para la disponibilidad del producto
    const disponibleIcono = producto.disponible ? "disponible ✔️" : " no disponible ❌";
    // Generar el HTML de la tarjeta Bootstrap para el producto actual
    const tarjetaHTML = `
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img src="${producto.image}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <h3 class="card-title"><strong>${producto.nombre}</strong></h3>
          <p class="card-text" style="color: blue;">${producto.descripcion}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-custom-purple">Ver más</button>
              <button type="button" class="btn btn-sm btn-outline-primary bg-pink">Comprar</button>
            </div>
            <h3 style="color: green;">$${producto.precio}</h3>
            <span>${disponibleIcono}</span>
          </div>
        </div>
      </div>
    </div>
  `;
  contenedorProductos.innerHTML += tarjetaHTML;
})


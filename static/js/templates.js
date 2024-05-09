// Plantilla de la barra de navegación con un parámetro para el título de la página
let navbarTemplates = (titulo) => `
<nav class="navbar navbar-expand-lg navbar-light">
<div class="container-fluid">
  <a class="navbar-brand titulo-animado" href="../index.html">Dulces L y A</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item btn-custom-purple">
        <a class="nav-link active " aria-current="page" href="../index.html">Inicio</a>
      </li>
      <li class="nav-item  btn-custom-purple">
        <a class="nav-link active " aria-current="page" href="./receta.html">Productos</a>
        </li>
      <li class="nav-item  btn-custom-purple">
        <a class="nav-link active " aria-current="page" href="./contacto.html">Contacto</a>
        </li>
      <li class="nav-item  btn-custom-purple">
        <a class="nav-link active " aria-current="page" href="./sucursales.html">Insumos</a>
        </li>
      <li class="nav-item ">
        <button type="button" class="btn btn-custom-purple">
        <a class="nav-link active" aria-current="page" href="./registro.html">Registrate</a></button>
        </li>
    </ul>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-custom-purple" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>
    <div class="titulo-animado">
       <h1>${titulo}</h1> <!-- Aquí se mostrará el título de la página -->
    </div>
`;

// Función para obtener el título de la página según la ruta actual
function obtenerTituloDePagina() {
    let currentPage = window.location.pathname;
    switch (currentPage) {
        case "/templates/acerca.html":
            return "Acerca de nosotros"
        case "/templates/contacto.html":
            return "Contacto";
        case "/templates/receta.html":
            return "Encontra todos nuestros productos";
        case "/templates/sucursales.html":
            return "Obtene tus insumos en:";
        case "/templates/registro.html":
            return "Sección de registro";
        // Agrega más casos según las páginas que tengas
        default:
            return "Bienvenido a la Home"; // Si no coincide con ninguna página, muestra este título por defecto
    }
}

// Insertar la barra de navegación con el título específico en el encabezado
document.getElementById("idHeader").innerHTML = navbarTemplates(obtenerTituloDePagina());



let footer = `
<a href="https://www.twitter.com" target="_blank"><i class="fab  fa-twitter"></i></a>
<a href="https://www.facebook.com"  target="_blank"><i class="fab fa-facebook"></i></i></a>

<a href="https://www.instagram.com/dulces.lya/" target="_blank" ><i class="fab fa-instagram"></i></i></a>
<a href="https://www.linkedin.com/in/emanuel-gauna/" target="_blank" ><i class="fab fa-linkedin"></i></i></a>

<p style="text-align: center;">Derechos reservados @2024</p>
`;
document.querySelector("#idFooter").innerHTML = footer;

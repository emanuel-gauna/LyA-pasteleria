let  header = `
<nav class="navbar navbar-expand-lg navbar-light">
<div class="container-fluid">
  <a class="navbar-brand titulo-animado" href="#">Dulces L y A</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item btn-custom-purple">
        <a class="nav-link active " aria-current="page" href="./index.html">Inicio</a>
      </li>
      <li class="nav-item btn-custom-purple">
        <a class="nav-link active " aria-current="page" href="./templates/acerca.html">Acerca de</a>
      </li>
      <li class="nav-item  btn-custom-purple">
        <a class="nav-link active " aria-current="page" href="./templates/contacto.html">Contacto</a>
        </li>
      <li class="nav-item  btn-custom-purple">
        <a class="nav-link active " aria-current="page" href="./templates/contacto.html">Insumos</a>
        </li>
      <li class="nav-item ">
        <button type="button" class="btn btn-custom-purple">
        <a class="nav-link active" aria-current="page" href="./templates/registro.html">Registrate</a></button>
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
<h1>Bienvenido a Dulces L y A </h1>
</div>
`
document.getElementById("idHeader").innerHTML=header;

let footer = `
<a href="https://www.twitter.com" target="_blank"><i class="fab  fa-twitter"></i></a>
        <a href="https://www.facebook.com"  target="_blank"><i class="fab fa-facebook"></i></i></a>
        <a href="https://www.instagram.com/dulces.lya/" target="_blank" ><i class="fab fa-instagram"></i></i></a>
        <a href="https://www.linkedin.com/in/emanuel-gauna/" target="_blank" ><i class="fab fa-linkedin"></i></i></a>

        <p style="text-align: center;">Derechos reservados @2024</p>
`
document.querySelector("#idFooter").innerHTML=footer;
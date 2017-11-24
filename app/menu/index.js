const menu = `

  <nav id="nav_color">
      <div class="nav-wrapper">
        <a class="brand-logo">Veterinaria</a>
        <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
          <li><i class="material-icons">more_vert</i></li>
          <li><a href="/">Inicio</a></li>
          <li><i class="material-icons">more_vert</i></li>
          <li><a href="/acercade">Acerca de</a></li>
          <li><i class="material-icons">more_vert</i></li>
          <li><a href="/contacto">Contacto</a></li>
          <li><i class="material-icons">more_vert</i></li>
          <li><a href="/productos">Productos</a></li>
          <li><i class="material-icons">more_vert</i></li>
          <li><a href="/guardar">Ingresar Productos</a></li>
          <li><i class="material-icons">more_vert</i></li>
          <li><a class="dropdown-button" data-activates='dropdown1'>a<i class="material-icons right">arrow_drop_down</i></a></li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
          <li><a href="/">Inicio</a></li>
          <li><a href="/acercade">Acerca de</a></li>
          <li><a href="/contacto">Contacto</a></li>
          <li><a href="/productos">Productos</a></li>
          <li><a href="/guardar">Ingresar Productos</a></li>
          <li><a href="/login">Inicio de Sesion</a></li>
        </ul>
      </div>
    </nav> 
    <ul id="dropdown1" class="dropdown-content" >
  <li><a href="/login">Iniciar</a></li>
  <li><a href="/login">Salir</a></li>
</ul>

`
export default menu



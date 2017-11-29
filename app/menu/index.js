const menu = `

  <nav class="nav_color">
      <div class="nav-wrapper">
        <a class="brand-logo">Veterinaria Quezada</a>
        <a data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
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
          <li><a data-beloworigin="true" class="dropdown-button" data-activates='dropdown1'><i class="material-icons right">arrow_drop_down</i></a></li>
        </ul>

        <ul class="side-nav nav_color" id="mobile-demo">
          <li><a href="/">Inicio</a></li>
          <li><a href="/acercade">Acerca de</a></li>
          <li><a href="/contacto">Contacto</a></li>
          <li><a href="/productos">Productos</a></li>
          <li><a href="/guardar">Ingresar Productos</a></li>
          <li><a  data-beloworigin="true" class="dropdown-button" data-activates='mobil-dropdown1'>Inicio de Sesion</a></li>
        </ul>
      </div>
    </nav> 

    <ul data-beloworigin="true" id="dropdown1" class="dropdown-content nav_color" >
      <li><a href="/login">Iniciar</a></li>
      <li><a href="/registrar">Registrarse</a></li>
    </ul>
    <ul id="mobil-dropdown1" class="dropdown-content nav_color">
      <li><a href="/login">Iniciar</a></li>
      <li><a href="/registrar">Registrarse</a></li>
    </ul>

`
export default menu



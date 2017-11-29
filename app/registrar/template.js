const template = `
<div class="row">
    <div class="col s12">
      <div class="card tarjeta letra" >
        <div class="card-content">
          <span class="card-title letra" >Registro de Usuarios</span>
          <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col l6 m6 s12">
          <input id="nombres" type="text" class="validate">
          <label for="nombres">Nombres</label>
        </div>
        <div class="input-field col l6 m6 s12">
          <input id="apellidos" type="text" class="validate">
          <label for="apellidos">Apellidos</label>
        </div>       
      </div>
      <div class="row">
         <div class="input-field col l6 m6 s12">
          <input id="correo" class="validate" type="email">
          <label  data-error="Correo Invalido" for="correo" data-success="Correcto">Correo</label>
        </div>        
        <div class="input-field col l6 m6 s12">
          <input id="contraseña" type="password" class="validate">
          <label for="contraseña">Contraseña</label>
        </div>
      </div>        
      <div class="row">      
        <div class="col l6 m6 s12">
          <div class="file-field input-field">
            <div class="btn">
                <span>Selecionar Imagen</span>
                <input type="file" id="file">
            </div>
            <div class="file-path-wrapper">
                <input class="file-path validate" type="text">
            </div>
          </div>          
        </div>


        <div class="col l6 m6 s12">
          <div class="chip">
          <img src="" alt="Contact Person">
            Jane Doe
          </div>
        </div>

      </div>      
      <div class="row">       
        <div class="input-field col l6 m6 s12">
          <a id="guardar" class="waves-effect waves-light btn">Guardar</a>
        </div>
      </div>      
    </form>
  </div>
  </div>
        </div>
      </div>
    </div>
  </div>`

  

  module.exports = template


  //var img = document.getElementById('file').value;
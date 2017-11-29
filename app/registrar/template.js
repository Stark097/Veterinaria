const template = `
<div class="row">
    <div class="col s12">
      <div class="card tarjeta" >
        <div class="card-content">
          <span class="card-title letra" >Registro de Usuarios</span>
          <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s3">
          <input id="nombres" type="text" class="validate" required>
          <label for="nombres">Nombres</label>
        </div>
        <div class="input-field col s3">
          <input id="apellidos" type="text" class="validate" required>
          <label for="apellidos">Apellidos</label>
        </div>
        <div class="input-field col s3">
          <input id="correo" type="text" class="validate" type="email" required="required">
          <label data-error="Correo Invalido" for="correo">Correo</label>
        </div>        
        <div class="input-field col s3">
          <input id="vencimiento" type="text" class="validate">
          <label for="vencimiento">Fecha Vencimiento</label>
        </div>
      </div>
       <div class="row">
        <div class="input-field col s3">
          <input id="descripcion" type="text" class="validate">
          <label for="descripcion">Descripcion</label>
        </div>
        <div class="input-field col s3">
          <input id="cantidad" type="text" class="validate">
          <label for="cantidad">Cantidad</label>
        </div>
        <div class="col s6">
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
      </div>      
      <div class="row">
        <div id="ocultar" class="input-field col s6" >
          <input id="id" type="text" class="validate">
          <label for="id">id</label>
        </div>
        <div class="input-field col s6">
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

const templateDetalle = (invent) => {
  return `
      <div class="row">
        <div class="col s12 m6">
          <div class="card tarjeta">
            <div class="card-content">
              <span class="card-title">${invent.name}</span>
              ${
                invent.img
                ?
                ` 
                    <figure>                    
                      <img id="vista" src=${invent.img}/>                      
                  </figure>
                  `
                : ''
              }
              
              <p><strong>Id:</strong> ${invent.id}</p>
              <p><strong>Nombre:</strong> ${invent.name}</p>
              <p><strong>Cantidad:</strong> ${invent.cantidad}</p>
              <p><strong>Precio:</strong> ${invent.precio}</p>
              <p><strong>Fecha de Vencimiento:</strong> ${invent.fecha_Vencimiento}</p>
              <p><strong>Descripcion:</strong> ${invent.descripcion}</p>
              <p><strong>Marca:</strong> ${invent.marca}</p>
            </div>
          </div>
         
        </div>
        <div class="col s12 m6">  
         <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="nombre" type="text" class="validate">
          <label for="nombre">Nombre</label>
        </div>
        <div class="input-field col s6">
          <input id="marca" type="text" class="validate">
          <label for="marca">Marca</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="precio" type="text" class="validate">
          <label for="precio">Precio</label>
        </div>        
        <div class="input-field col s6">
          <input id="vencimiento" type="text" class="validate">
          <label for="vencimiento">Fecha Vencimiento</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="descripcion" type="text" class="validate">
          <label for="descripcion">Descripcion</label>
        </div>
        <div class="input-field col s6">
          <input id="cantidad" type="text" class="validate">
          <label for="cantidad">Cantidad</label>
        </div>
      </div>
      <div class="row">
        <!--<div class="col s12">
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
      </div>-->      
    </form>
  </div>
  </div>
  <div id="ver123"></div>
        </div>        
      </div>
  <div class="row">
    <div class="col s12" id="botones">
     <a id="eliminar" key="${invent.id}" class="waves-effect waves-light btn">Eliminar</a>
     <a class="waves-effect waves-light btn"  id="actualizar" class ="button" key="${invent.id}" img="${invent.img}">Modificar</a>
    <div> 
  </div>
  `

}

module.exports = templateDetalle


                    
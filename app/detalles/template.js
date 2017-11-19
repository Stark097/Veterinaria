
const templateDetalle = (invent) => {
  return `
      <div class="row">
        <div class="col s12 m6">
          <div class="card">
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
          <a id="eliminar" key="${invent.id}" class="waves-effect waves-light btn">Eliminar</a>
          <a class="waves-effect waves-light btn"  id="actualizar" class ="button"
                    key="${invent.id}"
                    descripcion="${invent.name}"
                    fecha_alta="${invent.cantidad}"
                    genero="${invent.precio}"
                    identificador="${invent.fecha_Vencimiento}"
                    nombre="${invent.descripcion}"
                    precio="${invent.marca}"
                    url="${invent.img}">Actualizar</a>
        </div>
        <div class="col s12 m6">
         <div  id="editar">

         </div>
        </div>        
      </div>

  `

}

module.exports = templateDetalle


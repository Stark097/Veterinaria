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
              <p><strong>precio:</strong> ${invent.precio}</p>
              <p><strong>precio:</strong> ${invent.fecha_Vencimiento}</p>
              <p><strong>precio:</strong> ${invent.descripcion}</p>
              <p><strong>precio:</strong> ${invent.marca}</p>
            </div>
          </div>
        </div>
      </div>
  `
}

module.exports = templateDetalle
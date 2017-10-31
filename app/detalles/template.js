const templateDetalle = (invent) => {
  return `
      <div class="row">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-content">
              <span class="card-title">${invent.nombre}</span>
              ${
                invent.img
                ?
                ` 
                  <figure>
                    <img src=${invent.img}/>
                  </figure>`
                : ''
              }
              
              <p><strong>Id:</strong> ${invent.id}</p>
              <p><strong>Nombre:</strong> ${invent.nombre}</p>
              <p><strong>Cantidad:</strong> ${invent.cantidad}</p>
              <p><strong>precio:</strong> ${invent.precio}</p>
            </div>
          </div>
        </div>
      </div>
  `
}

module.exports = templateDetalle
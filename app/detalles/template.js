
const templateDetalle = (invent) => {
  return `
      <div class="row">
        <div class="col s12  m6 offset-m3">
          <div class="card tarjeta ">
            <div class="card-content letra" >
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
      </div> 
  `

}

module.exports = templateDetalle


                    
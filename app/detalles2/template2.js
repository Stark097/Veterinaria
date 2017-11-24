/*const template = (datos) => {
  let rows = ''
  let countRow = 1
  let keys = Object.keys(datos)

	keys.map(key => {
    let item = datos[key]
    rows +=  `
     <tr>
      <!--<td>${countRow++}</td>-->
      <td><a href="/detalles2/template/${key}"  class="letra">${item.name}</a></td>
      <td>${item.cantidad}</td>
      <td>${item.precio}</td>
    </tr>
    `
  })

  let table = `
  <table class="highlight  letra">
    <thead>
      <tr>
        <!--<th>#</th>-->
        <th>Nombre</th>
        <th>Cantidad</th>
        <th>precio</th>
      </tr>
    </thead>
    <tbody id="hover">
      ${rows}
    </tbody>
  </table>`

  let card = `
  <div class="row">
    <div class="col s12">
      <div class="card tarjeta">
        <div class="card-content">
          <span class="card-title letra">Lista de Productos</span>
          ${table}
        </div>
      </div>
    </div>
  </div>`

  return card
}

module.exports = template*/
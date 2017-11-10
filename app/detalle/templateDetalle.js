const arrayHTML = (inventario) =>

{  

	
}



`
	 <table class="bordered highlight">
        <thead>
          <tr>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>precio</th>
          </tr>
        </thead>
         <tbody>
`
	for (var i = 0; i < arrayDatos.length; i++) {
		arrayHTML += `
		<tr>
			<td>${arrayDatos[i].nombre}</td>
			<td>${arrayDatos[i].cantidad}</td>
			<td>${arrayDatos[i].precio}</td>
		</tr>
		`
	}

	arrayHTML +=`
	</tbody>
    </table>`

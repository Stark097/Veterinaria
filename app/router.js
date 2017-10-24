import page from 'page'
import layout from './layout'
import homepage from './homepage'
import contacto from './contacto'
import acercade from './acercade'


const main = document.querySelector('main')

page('/', () => {
	main.innerHTML = layout(homepage)
})

page('/contacto', () => {
	main.innerHTML = layout(contacto)
})

page('/acercade', () => {
	main.innerHTML = layout(acercade)
})




var firebase = require('firebase')
var config = {
  
    apiKey: "AIzaSyCh6QdiVHk3LuiY5b_zARVwCgiqy4aRyKY",
    authDomain: "prueba-5c26e.firebaseapp.com",
    databaseURL: "https://prueba-5c26e.firebaseio.com",
    projectId: "prueba-5c26e",
    storageBucket: "prueba-5c26e.appspot.com",
    messagingSenderId: "128290886921"
  
  }

page('/productos', mostrarLoader, function () {

	var main = document.querySelector('main')
	
if (!firebase.apps.length) { 
	firebase.initializeApp(config) 
}

var db = firebase.database()

function obtenerDatos (datos) {
	var arrayDatos = datos.val()

	var main = document.querySelector('main')
	var arrayHTML = ''
	
	arrayHTML +=`
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


	main.innerHTML = layout(arrayHTML)
}

db.ref('inventario').once('value').then(obtenerDatos)

})

function mostrarLoader (ctx, next) {
	var html = `
	<div id="cargar">
	  <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only" >
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
  </div>`
  var main = document.querySelector('main')
  main.innerHTML = layout(html)
  next()
}




/*page('/productos', () =>{

const fun = `<h1>Productos</h1>`
	main.innerHTML = layout(fun)

ver()
})*/
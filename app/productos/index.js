/*import page from 'page'
import layout from './../layout'
import config from './../config'
var firebase = require('firebase')
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
}*/



import page from 'page'
import layout from './../layout'
import config from './../config'
var firebase = require('firebase')
var templateLista = require('./template')

page('/productos', mostrarLoader, () => {
  
	var main = document.querySelector('main')
	
if (!firebase.apps.length) { 
	firebase.initializeApp(config) 
}

var db = firebase.database()

function obtenerDatos (datos) {
	var arrayDatos = datos.val()

	var main = document.querySelector('main')

	var html =  templateLista(arrayDatos)
	
	main.innerHTML = layout(html)
  $( document ).ready(function(){
        $(".button-collapse").sideNav();
        $(".dropdown-button").dropdown({           
            belowOrigin: true, // Displays dropdown below the button   
            float: true
        });
      })
}
db.ref('Productos').once('value').then(obtenerDatos)

})

function mostrarLoader (ctx, next) {
	var html = `
	<div class="preloader">
	  <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-green-only">
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
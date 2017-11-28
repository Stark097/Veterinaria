import page from 'page'
import layout from './../layout'
import config from './../config'
var firebase = require('firebase')
var templateLista = require('./template')

page('/productos2', mostrarLoader, () => {
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
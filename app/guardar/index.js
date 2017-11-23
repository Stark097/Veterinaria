import page from 'page'
import layout from './../layout'
import config from './../config'
var templateLista = require('./../productos/template')
var firebase = require('firebase')


if (!firebase.apps.length) { 
	firebase.initializeApp(config) 
}

var db = firebase.database()

page('/guardar', mostrarLoader, function () {
	var main = document.querySelector('main')

  main.innerHTML = layout(formTemplate)
  var guardarBtn = document.querySelector('#guardar')
  guardarBtn.addEventListener('click', guardar)

   var inputFile = document.getElementById('file');
   inputFile.addEventListener('change', seleccionarImagen, false);

if (!firebase.apps.length) { 
  firebase.initializeApp(config) 
}

var db = firebase.database()

function obtenerDatos (datos) {
  var arrayDatos = datos.val()

  var main = document.querySelector('#ver123')

  var html =  templateLista(arrayDatos)
  
  main.innerHTML = html
}

db.ref('Productos').once('value').then(obtenerDatos)
})




var formTemplate = `
<div class="row">
    <div class="col s12">
      <div class="card tarjeta" >
        <div class="card-content">
          <span class="card-title" style="color:white">Ingresar Nuevos Productos</span>
          <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s3">
          <input id="nombre" type="text" class="validate">
          <label for="nombre">Nombre</label>
        </div>
        <div class="input-field col s3">
          <input id="marca" type="text" class="validate">
          <label for="marca">Marca</label>
        </div>
        <div class="input-field col s3">
          <input id="precio" type="text" class="validate">
          <label for="precio">Precio</label>
        </div>        
        <div class="input-field col s3">
          <input id="vencimiento" type="text" class="validate">
          <label for="vencimiento">Fecha Vencimiento</label>
        </div>
      </div>
       <div class="row">
        <div class="input-field col s3">
          <input id="descripcion" type="text" class="validate">
          <label for="descripcion">Descripcion</label>
        </div>
        <div class="input-field col s3">
          <input id="cantidad" type="text" class="validate">
          <label for="cantidad">Cantidad</label>
        </div>
        <div class="col s6">
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
      </div>      
      <div class="row">
        <div id="ocultar" class="input-field col s6" >
          <input id="id" type="text" class="validate">
          <label for="id">id</label>
        </div>
        <div class="input-field col s6">
          <a id="guardar" class="waves-effect waves-light btn">Guardar</a>
        </div>
      </div>      
    </form>
  </div>
  </div>
        </div>
      </div>
    </div>
  </div>


  
  <div id="ver123"></div>
  `

var fileSelected = null

function guardar (e)  {
	e.preventDefault()

	var storageRef = firebase.storage().ref()
  var thisRef = storageRef.child(fileSelected.name);

	thisRef.put(fileSelected)
	.then((snapshot) => {
 	 	return snapshot.downloadURL
	})
	.then(imgURL => {

		var ref = db.ref("Productos")
		ref.push({
			name: document.querySelector('#nombre').value,
			marca: document.querySelector('#marca').value,
			precio: document.querySelector('#precio').value,
      fecha_Vencimiento: document.querySelector('#vencimiento').value,
      descripcion: document.querySelector('#descripcion').value,
      cantidad: document.querySelector('#cantidad').value,
      id: document.querySelector('#id').value,
			img: imgURL
		})

		page.redirect('/guardar')


	})
	.catch(err => console.error(err))
}

function seleccionarImagen (e) {
	var target = e.target
  fileSelected = target.files[0]
}  

function mostrarLoader (ctx, next) {
  var html = `
  <div id="cargar">
    <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
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
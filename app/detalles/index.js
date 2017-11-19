import page from 'page'
import layout from './../layout'
import config from './../config'
var firebase = require('firebase')
var templateDetalle = require('./template')


page('/detalles/:name', mostrarLoader, function (ctx, next) {  

  if (!firebase.apps.length) { 
    firebase.initializeApp(config) 
  }

  var db = firebase.database()

  db.ref('/Productos/' + ctx.params.name).once('value').then(snapshot => {
    
    let item = snapshot.val()
    var main = document.querySelector('main')
    item.id = ctx.params.name
    var html =  templateDetalle(item)   
    main.innerHTML = layout(html)
    var btn_borrar = document.querySelector('#eliminar')
    btn_borrar.addEventListener('click', eliminar)
    var btn_borrar = document.querySelector('#actualizar')
    btn_borrar.addEventListener('click', actualizar)
    
  })  
})

function mostrarLoader (ctx, next) {
	var html = `
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
  </div>`
  var main = document.querySelector('main')
  main.innerHTML = layout(html)
  next()
}

function eliminar() {
  if (!firebase.apps.length) {
  firebase.initializeApp(config)
  }

var db = firebase.database()
  let doc = document;
  let key  = doc.getElementById('eliminar').getAttribute('key')

  var confirmar = confirm("Se eliminara este producto")

  console.log(confirmar)

  if (key!=null && confirma == true) {
    var ref = db.ref("Productos")
    ref.child(key).remove()

    page.redirect('/productos')
  }
}

function actualizar () {
  var html =  `  <div class="row">
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
        <div class="input-field col s6">
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
  <div id="ver123"></div>
  `
  var main = document.querySelector('#actualizar')
  main.innerHTML = html
}

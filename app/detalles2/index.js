import page from 'page'
import layout from './../layout'
import config from './../config'
var firebase = require('firebase')
var templateDetalle = require('./template')


page('/detalles2/:name', mostrarLoader, function (ctx, next) {    

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
    var btn_elimar = document.querySelector('#eliminar')
    btn_elimar.addEventListener('click', eliminar)
    var btn_actualizar = document.querySelector('#actualizar')
    btn_actualizar.addEventListener('click', update1)  
    $( document ).ready(function(){
        $(".button-collapse").sideNav();
        $(".dropdown-button").dropdown({           
            belowOrigin: true, // Displays dropdown below the button   
            float: true
        });
      })      
  })    
})

function mostrarLoader (ctx, next) {
	var html = `
	  <div class="preloader-wrapper big active preloader">
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

  if (key!=null && confirmar == true) {
    var ref = db.ref("Productos")
    ref.child(key).remove()

    page.redirect('/guardar')
  }
}



function update1(){  
  let doc = document;
  let key  = doc.getElementById('actualizar').getAttribute('key')

  let nombre1  = doc.querySelector('#nombre').value
  let marca1  = doc.querySelector('#marca').value
  let precio1  = doc.querySelector('#precio').value
  let vencimiento1  = doc.querySelector('#vencimiento').value
  let descripcion1  = doc.querySelector('#descripcion').value
  let cantidad1  = doc.querySelector('#cantidad').value
  let Imagen1  = doc.getElementById('actualizar').getAttribute('img')


 

var updates = {};

var postData = {
    id: key,
    name: nombre1,
    marca: marca1,
    precio: precio1,
    fecha_Vencimiento: vencimiento1,
    cantidad: cantidad1,
    descripcion:descripcion1,
    img: Imagen1
};


console.log(postData)

updates['/Productos/' + key] = postData;

console.log(updates)

firebase.database().ref().update(updates);

page.redirect('/guardar')
}
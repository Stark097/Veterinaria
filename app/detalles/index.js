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
    <div class="spinner-layer spinner-green-only">
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


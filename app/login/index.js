

import page from 'page'
import layout from './../layout'
import config from './../config'
var firebase = require('firebase')
if (!firebase.apps.length) { 
	firebase.initializeApp(config) 
}

// template
var loginTemplate = `
<h4 class="card-title center">Iniciar Sesión</h4>
         	<div class="row">
	         	<div class="row center">
	         		<a id="googleLogin" class="waves-effect waves-light btn red darken-1">Inicia con tu cuenta de Google</a>
	         	</div>
         	</div>`

var template = `
    <div class="row">
      <div class="col s12 l12">
        <div class="card-panel login-container tarjeta">
        	${loginTemplate}
        </div>
      </div>
    </div> `

// página de login
page('/login', () => {
	var main = document.querySelector('main')

  main.innerHTML = layout(template)

  var btnLogin = document.querySelector('#googleLogin')
  if (btnLogin) btnLogin.addEventListener('click', login)
})

// login
function login (e) {
	/*e.preventDefault()

	let provider = new firebase.auth.GoogleAuthProvider()

	firebase.auth().signInWithPopup(provider)
		.then(result => {
			let user = result.user.providerData[0]

			let loginContainer = document.querySelector('.login-container')

			let html = `Bienvenido, ${user.displayName} <img style="height: 50px; border-radius: 50%;" class="photoURL" src=${user.photoURL} alt=${user.displayName} />`
			loginContainer.innerHTML = `
				${html}
				<li><a id="salir" href="!#">Salir</a></li>`

			var btnSalir = document.querySelector('#salir')
			btnSalir.addEventListener('click', logout)
		})
		.catch((err) => console.error(err.message+"Error al iniciar sesión") )*/

		var provider = new firebase.auth.GoogleAuthProvider();

		firebase.auth().signInWithPopup(provider).then(function(result) {
		  // This gives you a Google Access Token. You can use it to access the Google API.
		  //var token = result.credential.accessToken;
		  // The signed-in user info.
		  //var user = result.user;
		  // ...
		  let user = result.user.providerData[0]
		  let loginContainer = document.querySelector('.login-container')

			let html = `<div class="img_sesion"><img style="height: 50px; border-radius: 50%;" class="photoURL" src=${user.photoURL} alt=${user.displayName} /><span class="card-title letra" >${user.displayName}</span></div>`
			loginContainer.innerHTML = `
				${html}
				<li class="letra"><a class="letra" id="salir" href="!#">Salir</a></li>`

			var btnSalir = document.querySelector('#salir')
			btnSalir.addEventListener('click', logout)
			validar = 1
		  console.log("inicio exitoso "+validar)
		}).catch(function(error) {
		  // Handle Errors here.
		  //var errorCode = error.code;
		  //var errorMessage = error.message;
		  // The email of the user's account used.
		  //var email = error.email;
		  // The firebase.auth.AuthCredential type that was used.
		  //var credential = error.credential;
		  // ...
		  validar = 0
		  console.log("Error al iniciar sesión "+validar)		  
		});
}

// cerrar sesión
function logout (e) {
	e.preventDefault()

	firebase.auth().signOut().then(() => {
		let loginContainer = document.querySelector('.login-container')
	  loginContainer.innerHTML = loginTemplate
	  var btnLogin = document.querySelector('#googleLogin')
	  if (btnLogin) btnLogin.addEventListener('click', login)
		})
		.catch((error) => {
			console.log(err.message)
	})
}


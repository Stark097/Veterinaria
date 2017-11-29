import page from 'page'
import layout from './layout'
import homepage from './homepage'
import contacto from './contacto'
import acercade from './acercade'
import login from './login'
require('./productos')
require('./detalles')
require('./detalles2')
require('./detalles2/index2.js')
require('./guardar')
require('./menu')
require('./registrar')



const main = document.querySelector('main')

page('/', () => {
	main.innerHTML = layout(homepage)
	 $(document).ready(function(){
	      $('.slider').slider();
	      	$(".button-collapse").sideNav();
	      	$(".dropdown-button").dropdown({	  			 
			      belowOrigin: true, // Displays dropdown below the button   
			      float: true
	  		});
	    });   
})

page('/contacto', () => {
	main.innerHTML = layout(contacto)
	$( document ).ready(function(){
	  		$(".button-collapse").sideNav();
	  		$(".dropdown-button").dropdown({	  			 
			      belowOrigin: true, // Displays dropdown below the button   
			      float: true
	  		});
	  	})
})

page('/acercade', () => {
	main.innerHTML = layout(acercade)
	$( document ).ready(function(){
	  		$(".button-collapse").sideNav();
	  		$(".dropdown-button").dropdown({	  			 
			      belowOrigin: true, // Displays dropdown below the button   
			      float: true
	  		});
	  	})
})

page('/login', () => {
	main.innerHTML = layout(login)
	$( document ).ready(function(){
	  		$(".button-collapse").sideNav();
	  		$(".dropdown-button").dropdown({	  			 
			      belowOrigin: true, // Displays dropdown below the button   
			      float: true
	  		});
	  	})
})






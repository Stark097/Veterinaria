import page from 'page';
import layout from './../layout';
import config from './../config';
import template from './template';



page('/registrar',()=>{
	var main = document.querySelector('main');
	
	main.innerHTML=layout(template);

	 $(document).ready(function(){
	 	  $('.chips').material_chip();
	      $('.slider').slider();
	      	$(".button-collapse").sideNav();
	      	$(".dropdown-button").dropdown({	  			 
			      belowOrigin: true, // Displays dropdown below the button   
			      float: true
	  		});
	    });   
})
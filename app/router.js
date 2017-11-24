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

page('/login', () => {
	main.innerHTML = layout(login)
})




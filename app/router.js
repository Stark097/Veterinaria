import page from 'page'
import layout from './layout'
import homepage from './homepage'
import contacto from './contacto'
import acercade from './acercade'
require('./productos')
require('./detalles')
require('./guardar')


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



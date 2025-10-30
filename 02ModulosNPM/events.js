var EventEmitter = require('events').EventEmitter, 
pub = new EventEmitter()

pub.on('myevent', function(message) {
    console.log(message)
})

.once('myevent', function(message) {
    console.log('Se emite por primera vez: ' + message) 
})

pub.emit('myevent', 'Soy el emisor de eventos')
pub.emit('myevent', 'Volviendo a emitir')
//pub.removeAllListeners('myevent')
pub.emit('myevent', 'Volviendo a emitir otra vez')


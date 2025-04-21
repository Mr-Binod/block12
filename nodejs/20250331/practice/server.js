const express = require('express')
const socketio = require('socket.io')

const app = express();

app.set('view engine', 'ejs')





const server = app.listen(3000, () => {
    console.log('server on~')
})

const io = socketio(server)

app.get('/', (req, res) => {
    res.render('chat')
})

let users = [];

io.on('connection', (socket) => {
    users.push(socket.id)
    console.log(users)
    socket.on('chat', (id, msg) => {
        console.log(id)
        // socket.join(id)
        io.sockets.emit('chat',id, msg)
    })
})
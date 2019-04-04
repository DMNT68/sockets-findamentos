const express = require('express');
const socketIO = require('socket.io'); // configuración para trabajar con socket.io
const http = require('http'); // configuración para trabajar con socket.io

const path = require('path');

const app = express();
let server = http.createServer(app); // configuración para trabajar con socket.io

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = esta es la comunicación del backend
module.exports.io = socketIO(server); // configuración para trabajar con socket.io
require('./sockets/socket');


// configuración para trabajar con socket.io
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
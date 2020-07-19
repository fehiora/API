//Este es el archivo de las rutas para que se pueda hacer la conexión entre los archivos

const express = require('express'); //se vuelver a llamar express para poder trabajar con él
const userController = require('../controllers/UserController');
const api = express.Router(); //para enfocarse en las rutas que se van a utilizar


api.post('/', userController.create);

module.exports = api; //se exportan las rutas para poder utilizarlas en el archivo app.js

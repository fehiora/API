const User = require('../models/user'); //requiriendo el modelo desde el controlador
const { restart } = require('nodemon');


//función anónima, req son los parámetros que se envía por la URL, el res lo que se devuelve al usuario 

//Primera función en la cual se crean usuarios y se guardan en la base de datos

function create(req, res) {
    var user = new User(); //Variable para crear un nuevo usuario de acuerdo al modelo que esta en user.js
    var params = req.body; // Con estas variable se están obteniendo (con req) los parámetros que vienen del body

    user.nombre = params.nombre;
    user.apellido = params.apellido;
    user.documento = params.documento;
    user.tarjetaProfesional = params.tarjetaProfesional;
    user.licenciaSo = params.licenciaSo;
    user.celular = params.celular;
    user.email = params.email;
    user.contrasenia = params.contrasenia;

    user.save((error, usercreated) =>{
        if(error){
            console.error(error);
            res.status(500).send({
            statusCode: 500,
            message: "Error en el servidor"
            })
        }else{
            if(!usercreated){
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al crear al usuario"
                })
            }else{
                res.status(200).send({
                    statusCode: 200,
                    message: "Usuario creado correctamente",
                    userData: usercreated
                })
            }
        }
    })
}

//Segunda función para modificar datos de los usuarios

function update(req, res){
    var dataUser = req.body;
    var id = req.params.id;

    User.findByIdAndUpdate(id, dataUser, (error, userUpdate)=> {
        if(error){
            rest.send({
                message: "Error de conexión",
                statusCode: 500
            })
        }else{
            if(!userUpdate){
                
            }
        }

    })



}

//esta es la forma de esportar los métodos del controlador para usarlos en otros archivos
module.exports = {
   create,
   update,
}
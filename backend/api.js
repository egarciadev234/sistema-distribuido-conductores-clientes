const express = require('express');
const apiRoutes = express.Router();
const jwt = require('jsonwebtoken');
const Client = require('./app/models/Cliente');
const Conductor = require('./app/models/Conductor');


apiRoutes.get('/', (req, res) =>{
    res.json({
        message: "Bienvenido a API backend"
    })
});

// Auth Clientes
apiRoutes.get('/auth/cliente', (req, res) =>{
    Client.findOne({
        name: req.body.name
    }, (err, client) => {
        if(err) throw err;

        if(!client){
            res.json({success: true, message: "Autenticacion fallida, usuario no encontrado"})
        }
        else if(client)
        {
            if (client.password != req.body.password) {
                res.json({success: false, message: "Autenticacion fallida, contraseña erronea"})
            }
            else
            {
                const token = jwt.sign({client}, req.app.get('supersecret'));
                res.json({
                    success: true,
                    message: "disfruta tu token",
                    token
                })
            }   
        }
    });
});

//Auth Conductores
apiRoutes.get('/auth/conductor', (req, res) =>{
    Conductor.findOne({
        name: req.body.name
    }, (err, conductor) => {
        if(err) throw err;

        if(!conductor){
            res.json({success: true, message: "Autenticacion fallida, usuario no encontrado"})
        }
        else if(conductor)
        {
            if (conductor.password != req.body.password) {
                res.json({success: false, message: "Autenticacion fallida, contraseña erronea"})
            }
            else
            {
                const token = jwt.sign({conductor}, req.app.get('supersecret'));
                res.json({
                    conductor,
                    success: true,
                    message: "Empieza a conducir",
                    token
                })
            }
        }
    });
});



apiRoutes.use((req, res, next) =>{
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, req.app.get('supersecret'), (err, decoded)=>{
            if(err)
            {
                return res.json({
                    success: false,
                    message: 'Autenticacion fallida'
                });
            }
            else
            {
                req.decoded = decoded;
                next();
            }
        })
    }
    else
    {
        return res.status(403).send({
            success: false,
            message: "El token no existe"
        })
    }
});

//API Clientes
apiRoutes.get('/clientes', (req, res) =>{
    Client.find({}, (err, clients)=>{
        if (err) throw err;
        res.json({clients})
    })
});

//API Conductores
apiRoutes.get('/conductores', (req, res) =>{
    Conductor.find({}, (err, conductors)=>{
        if (err) throw err;
        res.json({conductors})
    })
});


module.exports = apiRoutes;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config');
const Client = require('./app/models/Cliente');
const Conductor = require('./app/models/Conductor');
const apiRoutes  =require('./api');

const port = process.env.PORT || 3000;
mongoose.connect(config.database, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
app.set('supersecret', config.secret);

//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));


//routes
app.get('/', (req, res) => {
    res.send('Backend');
});


app.get('/cliente', (req, res) => {
    const testClient = new Client({
        name: "erick",
        email: "developeeg@gmail.com",
        address: "Mz- A cs-20 Las Violetas",
        celphone: "30524483292",
        password: "admin234",
    });

    testClient.save((err) => {
        if(err) throw err;
        console.log('Cliente guardado exitosamente');
        res.json({
            success: true
        });
    })
});

app.get('/conductor', (req, res) => {
    const testConductor = new Conductor({
        name: "erickonduce",
        email: "developeeg@gmail.com",
        address: "Mz- A cs-20 Las Violetas",
        celphone: "30524483292",
        password: "admin123",
        type_vehicle: "Camioneta",
        status: false,
    });

    testConductor.save((err) => {
        if(err) throw err;
        console.log('Conductor guardado exitosamente');
        res.json({
            success: true
        });
    })
});

app.use('/api', apiRoutes);
app.listen(3000, () =>{
    console.log("Servidor Express corriendo 5000");
});



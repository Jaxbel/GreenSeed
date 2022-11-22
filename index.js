
//Modulos que se requieren
const express = require("express");
//Modulo pa los layouts
const ejsLayouts = require("express-ejs-layouts");
//App
const app = express();
const port = process.env.PORT || 8080;
//modulo para que use la carpeta public para lo de SASS
app.use(express.static('public'));

//Motor de Vistas EJS
app.set('view engine', 'ejs');
app.use(ejsLayouts);

//bodyParser
app.use(express.urlencoded({ extended: true }));

//Cargar Modulo de ROUTES
const router = require('./routes/routes');
app.use('/', router);

app.listen(port, ()=>{
    console.log(`Servidor funcionando en puerto ${port}`)
})
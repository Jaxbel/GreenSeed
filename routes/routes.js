//importar modulos 
const express = require('express');
const path = require('path');

//Creamos un objeto de Router Express
const router = express.Router();

//Exportar nuestro modulo ROUTES
module.exports = router;

//AQUI SE HACEN LOS METODOS

//Método para acceder al home
router.get('/', (req, res) => {
    res.render('pages/home');
});

router.get('/directorio', (req, res) => {
    res.render('pages/directorio');
});
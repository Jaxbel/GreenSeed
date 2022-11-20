const express = require("express");
const app = express();
const path = require("path");

//settings
app.set('port', 8080);

//middleware
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.get('/', (req, res)=>{
    res.send('Hola petes')
})

app.listen(app.get('port'), ()=>{
    console.log(`Servidor funcionando en puerto ${app.get('port')}`)
})
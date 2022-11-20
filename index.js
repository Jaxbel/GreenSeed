const express = require("express");
const app = express();
const port = process.env.PORT || 8080;



//routes
app.get('/', (req, res)=>{
    res.send('Hola petes')
})


app.listen(port, ()=>{
    console.log(`Servidor funcionando en puerto ${port}`)
})
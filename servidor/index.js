const express = require("express");
const conectar_DB = require("./config/db");
const cors = require('cors');

//Creamos el servidor
const app = express();

//Conectamos DB
conectar_DB();
app.use(cors());

app.use(express.json());
app.use('/api/productos', require('./routes/producto'));


app.listen(4000, () => {
    console.log("El servidor esta corriendo en el puerto 4000 correctamente")
})
const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectar_DB = async() => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('Base de datos conectada correctamente');

    } catch (error) {
        console.log(error);
        process.exit(1); //Se detiene la APP

    }
}

module.exports = conectar_DB;
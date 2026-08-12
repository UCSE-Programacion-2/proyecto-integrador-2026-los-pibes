const dns = require('dns');
dns.setServers(['8.8.8.8']);



const mongoose = require('mongoose');
require('dotenv').config(); // Permite leer las variables del archivo .env

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("¡Conexión a MongoDB exitosa!");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
        process.exit(1); // Detiene la aplicación si hay un error crítico
    }
};

module.exports = { connectDB };
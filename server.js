const express = require('express');
const { connectDB } = require('./src/mongoose');
require('dotenv').config();

const app = express();
app.use(express.json()); // Permite recibir datos en formato JSON en tus endpoints

const PORT = process.env.PORT || 3000;

// Primero nos conectamos a la base de datos, y si es exitoso, levantamos el servidor
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
    });
});
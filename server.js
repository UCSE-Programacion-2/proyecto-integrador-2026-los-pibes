const express = require('express');
const { connectDB } = require('./src/mongoose');
const productRoutes = require('./src/routes/productRoutes'); // 1. AGREGAR ESTA LÍNEA (Importar rutas)
require('dotenv').config();

const app = express();
app.use(express.json()); 

app.use('/api/products', productRoutes); // 2. AGREGAR ESTA LÍNEA (Conectar rutas)

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
    });
});
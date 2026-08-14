const express = require('express');
const router = express.Router();

// Importamos las funciones desde el controlador
// (Asegúrate de que la ruta hacia productController sea correcta según tus carpetas)
const { 
    getProducts, 
    createProduct, 
    updateProduct, 
    deleteProduct 
} = require('../../backend/controllers/productController');

// Definimos las rutas exactas del CRUD
router.get('/', getProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);


module.exports = router;
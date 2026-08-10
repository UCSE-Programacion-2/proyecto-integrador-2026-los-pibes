const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('./src/models/Product'); // Asegúrate de que esta ruta apunte al archivo que creamos en el Paso 1

const productosCafeteria = [
  { name: "Espresso Doble", price: 1500, category: "Cafe", description: "Dos shots intensos de nuestro café de especialidad.", image: "espresso.jpg" },
  { name: "Latte Vainilla", price: 2200, category: "Cafe", description: "Espresso con leche vaporizada y un toque de sirope de vainilla.", image: "latte.jpg" },
  { name: "Flat White", price: 2000, category: "Cafe", description: "Doble ristretto con una fina capa de leche texturizada.", image: "flat-white.jpg" },
  { name: "Iced Caramel Macchiato", price: 2600, category: "Frio", description: "Leche fría, hielo, espresso y abundante salsa de caramelo.", image: "iced-caramel.jpg" },
  { name: "Frappé de Mocha", price: 2900, category: "Frio", description: "Café licuado con hielo, chocolate y crema batida.", image: "frappe.jpg" },
  { name: "Limonada con Menta", price: 1800, category: "Frio", description: "Limonada fresca exprimida en el momento con hojas de menta.", image: "limonada.jpg" },
  { name: "Medialuna de Manteca", price: 800, category: "Dulce", description: "Clásica medialuna dulce, esponjosa y recién horneada.", image: "medialuna.jpg" },
  { name: "Porción de Chocotorta", price: 3500, category: "Dulce", description: "Capas de galletas de chocolate intercaladas con dulce de leche y queso crema.", image: "chocotorta.jpg" },
  { name: "Roll de Canela", price: 2100, category: "Dulce", description: "Masa dulce con canela, coronada con glaseado de queso crema.", image: "cinnamon-roll.jpg" },
  { name: "Tostado Clásico", price: 3000, category: "Salado", description: "Sándwich tostado de jamón y queso en pan de miga.", image: "tostado.jpg" }
];

const seedDB = async () => {
  try {
    // 1. Conectarnos a la base de datos usando tu URL del .env
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado a la base de datos.");

    // 2. Limpiar la colección para no duplicar datos si corres el script varias veces
    await Product.deleteMany({});
    console.log("Colección de productos limpiada.");

    // 3. Insertar los 10 productos
    await Product.insertMany(productosCafeteria);
    console.log("¡Los 10 productos fueron insertados con éxito!");

    // 4. Salir del script correctamente
    process.exit(0);
  } catch (error) {
    console.error("Error al correr el seed:", error);
    process.exit(1);
  }
};

// Ejecutamos la función
seedDB();
require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Product = require('./models/Product');

const products = [
  // Café y Bebidas Calientes
  { name: 'Espresso Double', price: 2200, category: 'cafe', description: 'Extracción doble de café de especialidad', stock: 100 },
  { name: 'Flat White', price: 2800, category: 'cafe', description: 'Doble shot de espresso con leche vaporizada sedosa', stock: 80 },
  { name: 'Cappuccino Krass', price: 3000, category: 'cafe', description: 'Espresso, leche vaporizada, espuma fina y cacao en polvo', stock: 80 },
  { name: 'Latte', price: 2700, category: 'cafe', description: 'Espresso con abundante leche vaporizada', stock: 80 },
  { name: 'Cold Brew', price: 2900, category: 'bebidas', description: 'Café infusionado en frío por 18 horas', stock: 40 },

  // Pastelería y Dulces
  { name: 'Croissant', price: 1800, category: 'pasteleria', description: 'Croissant clásico hojaldrado con manteca', stock: 50 },
  { name: 'Pain au Chocolat', price: 2100, category: 'pasteleria', description: 'Hojaldre relleno de chocolate semi-amargo', stock: 35 },
  { name: 'Cinnamon Roll', price: 2400, category: 'pasteleria', description: 'Roll de canela glaseado', stock: 30 },
  { name: 'Avocado Toast', price: 4200, category: 'salado', description: 'Pan de masa madre, palta, huevo pochado y semillas', stock: 25 },
  { name: 'Tostado de Jamón y Queso', price: 3800, category: 'salado', description: 'En pan de masa madre con queso tybo y jamón cocido', stock: 40 }
];

const run = async () => {
  try {
    await connectDB();

    await Product.deleteMany({});
    console.log('Productos anteriores eliminados');

    await Product.insertMany(products);
    console.log(`${products.length} productos de Krass cargados con éxito`);

  } catch (error) {
    console.error('Error al insertar productos en Krass:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Conexión a la base de datos cerrada');
  }
};

run();
const mongoose = require('mongoose');

// Definimos la estructura exacta que acordamos en tu rol de Product Owner
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);
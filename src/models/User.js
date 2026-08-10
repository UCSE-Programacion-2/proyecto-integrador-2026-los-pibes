const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'El nombre es obligatorio'] 
  },
  email: { 
    type: String, 
    required: [true, 'El email es obligatorio'],
    unique: true, // No pueden haber dos usuarios con el mismo email
    match: [/.+\@.+\..+/, 'Por favor ingresa un correo válido'] // Validación de formato de email
  },
  password: { 
    type: String, 
    required: [true, 'La contraseña es obligatoria'],
    minlength: [6, 'La contraseña debe tener al menos 6 caracteres'] // Validación de longitud mínima
  }
}, {
  timestamps: true // Esto agrega automáticamente la fecha de creación y actualización
});


module.exports = mongoose.model('User', userSchema);

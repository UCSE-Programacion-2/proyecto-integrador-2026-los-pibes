require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const User = require('./models/User');

const run = async () => {
  await connectDB();

  const testUser = await User.create({
    name: 'Usuario de Prueba',
    email: 'prueba@test.com',
    password: '123456'
  });

  console.log('Usuario creado:', testUser);
  mongoose.connection.close();
};

run();
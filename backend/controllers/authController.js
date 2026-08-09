const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateToken = (user) => jwt.sign(
  { id: user._id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: '7d' }
);

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: { code: 'BAD_REQUEST', message: 'El email ya está registrado' } });
    }

    const user = await User.create({ name, email, password });
    const token = generateToken(user);

    return res.status(201).json({
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
      token
   });
  } catch (err) {
    return res.status(400).json({ error: { code: 'BAD_REQUEST', message: err.message } });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: { code: 'UNAUTHORIZED', message: 'Credenciales inválidas' } });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: { code: 'UNAUTHORIZED', message: 'Credenciales inválidas' } });
    }

    const token = generateToken(user);

    return res.status(200).json({
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
      token
    });
  } catch (err) {
    return res.status(400).json({ error: { code: 'BAD_REQUEST', message: err.message } });
  }
};

module.exports = { register, login };
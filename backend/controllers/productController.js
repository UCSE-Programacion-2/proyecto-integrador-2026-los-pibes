const Product = require('../models/Product');

const getProducts = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const items = await Product.find(filter);
    return res.status(200).json({ items });
  } catch (err) {
    return res.status(400).json({ error: { code: 'BAD_REQUEST', message: err.message } });
  }
};

const getProductById = async (req, res) => {
  try {
    const item = await Product.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: { code: 'NOT_FOUND', message: 'Producto no encontrado' } });
    }
    return res.status(200).json({ item });
  } catch (err) {
    return res.status(400).json({ error: { code: 'BAD_REQUEST', message: err.message } });
  }
};

const createProduct = async (req, res) => {
  try {
    const item = await Product.create(req.body);
    return res.status(201).json({ item });
  } catch (err) {
    return res.status(400).json({ error: { code: 'BAD_REQUEST', message: err.message } });
  }
};

const updateProduct = async (req, res) => {
  try {
    const item = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) {
      return res.status(404).json({ error: { code: 'NOT_FOUND', message: 'Producto no encontrado' } });
    }
    return res.status(200).json({ item });
  } catch (err) {
    return res.status(400).json({ error: { code: 'BAD_REQUEST', message: err.message } });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const item = await Product.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ error: { code: 'NOT_FOUND', message: 'Producto no encontrado' } });
    }
    return res.status(200).json({ message: 'Producto eliminado' });
  } catch (err) {
    return res.status(400).json({ error: { code: 'BAD_REQUEST', message: err.message } });
  }
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
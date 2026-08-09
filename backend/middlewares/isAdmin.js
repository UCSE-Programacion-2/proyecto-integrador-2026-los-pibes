const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: { code: 'FORBIDDEN', message: 'Requiere permisos de administrador' } });
  }
  return next();
};

module.exports = isAdmin;
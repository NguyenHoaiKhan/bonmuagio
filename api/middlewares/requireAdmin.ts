export function requireAdmin(req, res, next) {
  if (req.session.user.role !== 'admin') {

    res.status(400).json({state: 'error', error: 'Permission deny'});
  }
  next();
}


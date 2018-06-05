export function requireLogin(req, res, next) {
  if (!req.session.user) {

    res.status(400).json({state: 'error', error: 'Please login first'});
  }
  next();
}

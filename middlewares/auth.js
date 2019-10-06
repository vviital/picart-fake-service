const jwt = require('jsonwebtoken');

const { secret } = require('../config');

module.exports = (req, res, next) => {
  const auth = req.headers['authorization'];
  const token = (auth || '').replace('Bearer ', '');

  try {
    const obj = jwt.verify(token, secret);
    req.user = obj;

    next();
  } catch (err) {
    res.status(401).json({ message: 'Wrong auth token' });
  }
};

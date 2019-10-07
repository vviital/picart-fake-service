const { Router } = require('express');
const jwt = require('jsonwebtoken');

const profiles = require('../db/profiles');

const router = new Router();

const secret = 'secret';

router.post('/', (req, res) => {
  const { email, login, password } = req.body;

  const p1 = profiles.find(x => x.email === email);
  const p2 = profiles.find(x => x.login === login);

  const profile = p1 || p2;

  if (!profile) {
    return res.status(404).json({ message: 'Profile not found' });
  }

  if (profile.password !== password) {
    return res.json(401).json({ message: 'Password is wrong' });
  }

  const token = jwt.sign({
    id: profile.id,
    email: profile.email,
    login: profile.login,
    roles: profile.roles,
  }, secret, { expiresIn: '12h' });

  res.json({ token });
});

module.exports = router;

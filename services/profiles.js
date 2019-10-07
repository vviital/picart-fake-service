const { Router } = require('express');

const profiles = require('../db/profiles');
const auth = require('../middlewares/auth');
const utils = require('../utils');

const router = new Router();

router.use(auth);

router.get('/', (req, res) => {
  res.json(utils.toCollection(profiles));
});

router.post('/', (req, res) => {
  const { body = {} } = req;

  if (!body.email) {
    return res.status(400).json({ message: 'email is missing' });
  }

  if (!body.password) {
    return res.status(400).json({ message: 'password is missing' });
  }

  body.id = profiles.length;
  profiles.push(body);

  res.json(body);
});

router.get('/:id', (req, res) => {
  const { params } = req;
  const id = params.id;

  if (id !== undefined && profiles[id]) {
    return res.json(profiles[id]);
  }

  res.status(404).json({ message: 'Profile not found' });
});

router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const { body } = req;

  if (id !== undefined && profiles[id]) {
    profiles[id] = Object.assign({}, profiles[id], body);
    return res.json(profiles[id]);
  }

  res.status(404).json({ message: 'Profile not found' });
});

router.put('/:id/email', (req, res) => {
  const id = req.params.id;
  const { body } = req;

  const { email, confirmationPassword } = body;
  const profile = profiles[id];
  
  if (!profile) {
    return res.status(404).json({ message: 'Profile not found' });
  }

  if (!body.email) {
    return res.status(400).json({ message: 'Email is missing' });
  }

  if (confirmationPassword !== profile.password) {
    return res.status(400).json({ message: 'Confirmation password does not match profile password' });
  }

  profile.email = email;

  res.json(profile);
});

router.put('/:id/password', (req, res) => {
  const id = req.params.id;
  const { body } = req;

  const { password, confirmationPassword } = body;
  const profile = profiles[id];
  
  if (!profile) {
    return res.status(404).json({ message: 'Profile not found' });
  }

  if (!body.password) {
    return res.status(400).json({ message: 'Password is missing' });
  }

  if (confirmationPassword !== profile.password) {
    return res.status(400).json({ message: 'Confirmation password does not match profile password' });
  }

  profile.password = password;

  res.json(profile);
});


module.exports = router;

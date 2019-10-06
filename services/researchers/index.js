const { Router } = require('express');

const { collection } = require('../../db/researches');
const auth = require('../../middlewares/auth');

const router = new Router();

router.use(auth);

router.get('/researches', (req, res) => {
  res.json(collection);
});

router.get('/researches/:id', (req, res) => {
  const { params } = req;
  const id = params.id;

  if (id !== undefined && collection[id]) {
    return res.json(collection[id]);
  }

  res.status(404).json({ message: 'Research not found' });
});

// router.get('/researches/:id/files', (req, res) => {
//   const { params } = req;
//   const id = params.id;

//   if (id !== undefined && collection[id]) {
//     return res.json(collection[id].files);
//   }

//   res.status(404).json({ message: 'Research not found' });
// });

router.post('/researches', (req, res) => {
  const { body } = req;
  body.id = collection.id;
  body.ownerID = req.user.id;
  body.type = body.type || 'zaidel';

  collection.push(body);

  res.json(body);
});

module.exports = router;

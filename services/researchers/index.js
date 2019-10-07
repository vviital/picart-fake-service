const { Router } = require('express');

const { collection } = require('../../db/researches');
const auth = require('../../middlewares/auth');
const utils = require('../../utils');

const router = new Router();

console.log('--- utils ---', utils);

router.use(auth);

router.get('/', (req, res) => {
  res.json(utils.toCollection(collection));
});

router.get('/:id', (req, res) => {
  const { params } = req;
  const id = params.id;

  if (id !== undefined && collection[id]) {
    return res.json(collection[id]);
  }

  res.status(404).json({ message: 'Research not found' });
});

router.post('/', (req, res) => {
  const { body } = req;
  body.id = collection.id;
  body.ownerID = req.user.id;
  body.type = body.type || 'zaidel';

  collection.push(body);

  res.json(body);
});

module.exports = router;

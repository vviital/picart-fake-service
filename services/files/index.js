const { Router } = require('express');

const { files, createFile } = require('../../db/files');
const utils = require('../../utils');
const auth = require('../../middlewares/auth');

const router = new Router();

router.use(auth);

router.get('/', (req, res) => {
  res.json(utils.toCollection(files));
});

router.get('/:id', (req, res) => {
  const { params } = req;
  const id = params.id;

  if (id !== undefined && files[id]) {
    return res.json(files[id]);
  }

  res.status(404).json({ message: 'File not found' });
});

// Emulating file upload.
router.post('/', (req, res) => {
  const file = createFile(files.length, req.user.id);
  files.push(file);

  res.status(201).json(file);
});

module.exports = router;

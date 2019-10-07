const fs = require('fs');
const path = require('path');

const { Router } = require('express');

const router = new Router();

router.get('/:id', (req, res) => {
  const filepath = path.join(__dirname, 'image.png')
  fs.createReadStream(filepath).pipe(res);
});

module.exports = router;

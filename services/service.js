const { Router } = require('express');

const router = new Router();

router.get('/health', (req, res) => {
  res.json({ ok: true });
});

module.exports = router;

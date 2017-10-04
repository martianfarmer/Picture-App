const express = require('express'),
      router  = express.Router(),
      controller = require('./controller');

module.exports = router;

router.get('/', controller.showHome);
router.get('/submit', controller.submit);


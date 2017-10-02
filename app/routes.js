const express = require('express'),
      router  = express.Router();

module.exports = router;

router.get('/', (req,res) => {
    res.send('');
});


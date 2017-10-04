const express = require('express'),
      path    = require('path');
      app     = express();


app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./app/routes'));


app.listen(8080, () => {
   console.log('app is running');
});
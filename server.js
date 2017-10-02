const express = require('express'),
      app     = express();

app.use(require('./app/routes'));


app.listen(8080, () => {
   console.log('app is running');
});
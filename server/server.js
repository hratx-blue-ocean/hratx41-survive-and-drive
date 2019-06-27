const createError = require('http-errors');
// const logger = require('morgan');
const express = require('express');
const app = express();

const path = require('path');
const port = process.env.PORT || 8000;
=======
const routers = require('./routes/routes');





// open up CORS 
app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.use(logger('dev'));

app.use(express.static('./client/public'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })



//Routes to get JSON data from PostgreSQL DB.  
app.use('/api/users/survivors', routers.survivors);
app.use('/api/users/drivers', routers.drivers);
app.use('/api/appointments', routers.appointments);



app.listen(port, () => console.log(`Example app listening on port ${port}!`));


module.exports = app;
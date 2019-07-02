const createError = require('http-errors');
// const logger = require('morgan');
const express = require('express');
const app = express();

const path = require('path');
const port = process.env.PORT || 8000;

const routers = require('./routes/routers');


// open up CORS 
app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.use(logger('dev'));

app.use(express.static('./client/public'));


//Express routes using routers -- Crew / Will
app.use('/api/users/survivors/', routers.survivors);
app.use('/api/users/drivers/', routers.drivers);
app.use('/api/appointments/', routers.appointments);
app.use('/api/login/', routers.login);


//React routing -- Brent
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })




app.use('api/users/drivers', routers.drivers);



app.listen(port, () => console.log(`Example app listening on port ${port}!`));


// You can place your routes here, feel free to refactor:
// const { example } = require('./routes');
// app.use('/api/example', example)

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

module.exports = app;
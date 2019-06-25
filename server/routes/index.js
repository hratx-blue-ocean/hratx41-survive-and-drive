//Note from Crew: I tried to get the boiler plate set up for this, but there may very well be some errors

const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const PORT = 3005;
const db = require('../database/index.js');

app.use(express.static('public'))
app.use(bodyParser.json())


//add appointment
app.post('/', (req, res) => {
  db.addAppointment(req.body.appointmentInfo, (err, items) => {
      if(err) {
          console.log('There was an error invoking app.post.');
          res.status(401).send(err);
      } else {
        console.log('Success! Posted appointment.');
        res.status(201).send(items);
      }
  })
})

//get appointment

//update appointment

//delete appointment

//add driver

//get driver

//update driver

//delete driver

//add survivor

//get all survivors

//get survivor

//update survivor

//delete survivor


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = { app }
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
app.get('/', (req, res) => {
    db.getAppointment(req.body.appointmentId, (err, items) => {
        if (err) {
            console.log(`Error finding items w/ category ${req.body.appointmentId}:`);
            res.status(401).send(err);
        } else {
            console.log(`Success! Found results for ${req.body.appointmentId}.`);
            res.status(201).send(items);
        }
    });
});

//update appointment return driver
app.put('/', (req, res) => {
    db.updateAppointmentReturnDriver(req.body.appointmentId, req.body.driverId, (err, items) => {
        if(err) { 
            console.log('Error updating return driver.');
            res.status(401).send(err);
        } else {
            console.log(`Success.  Updated return driver for appointment ${req.body.appointmentId}`);
            res.status(201).send(items);
        }
    })
  })

//update appointment destination driver
app.put('/', (req, res) => {
    db.updateAppointmentReturnDriver(req.body.appointmentId, req.body.driverId, (err, items) => {
        if(err) { 
            console.log('Error updating return driver.');
            res.status(401).send(err);
        } else {
            console.log(`Success.  Updated return driver for appointment ${req.body.appointmentId}`);
            res.status(201).send(items);
        }
    })
  })

//delete appointment
app.delete('/', (req, res) => {
    db.deleteAppointment(req.body.appointmentId, (err, items) => {
      if(err) {
          console.log(`Error deleting appointment: ${req.body.appointmentId}.`);
          res.status(401).send(err);
      } else {
          console.log(`Success.  Deleted appointment: ${req.body.appointmentId}.`);
          res.status(201).send(items);
      }
    })
  })

//add driver
app.post('/', (req, res) => {
    db.addDriver(req.body, (err, items) => {
        if(err) {
          console.log('There was an error invoking app.post to add a driver.');
          res.status(401).send(err);
        } else {
          console.log('Success! Added driver.');
          res.status(201).send(items);
        }
    })
  })

//get driver
app.get('/', (req, res) => {
    db.getDriver(req.body.driverId, (err, items) => {
        if (err) {
            console.log(`Error finding driver: ${req.body.driverId}:`);
            res.status(401).send(err);
        } else {
            console.log(`Success! Found driver: ${req.body.driverId}.`);
            res.status(201).send(items);
        }
    });
});

//update driver


//delete driver

//add survivor

//get all survivors

//get survivor

//update survivor

//delete survivor


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = { app }
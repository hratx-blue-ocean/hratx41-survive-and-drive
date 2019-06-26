/* eslint-disable no-console */
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
app.put('/', (req, res) => {
    db.updateDriver(req.body.driverId, (err, items) => {
        if(err) { 
            console.log('Error updating driver.');
            res.status(401).send(err);
        } else {
            console.log(`Success.  Updated driver: ${req.body.driverId}`);
            res.status(201).send(items);
        }
    })
})


//delete driver
app.delete('/', (req, res) => {
    db.deleteDriver(req.body.driverId, (err, items) => {
      if(err) {
          console.log(`Error deleting driver: ${req.body.driverId}.`);
          res.status(401).send(err);
      } else {
          console.log(`Success.  Deleted driver: ${req.body.driverId}.`);
          res.status(201).send(items);
      }
    })
})

//add survivor
app.post('/', (req, res) => {
    db.addSurvivor(req.body, (err, items) => {
        if(err) {
          console.log('There was an error invoking app.post to add a survivor');
          res.status(401).send(err);
        } else {
          console.log('Success! Added survivor.');
          res.status(201).send(items);
        }
    })
})

//get all survivors
app.get('/', (req, res) => {
    db.getAllSurvivors(req.body, (err, items) => {
        if (err) {
            console.log(`Error finding all survivors`);
            res.status(401).send(err);
        } else {
            console.log(`Success! Found all survivors.`);
            res.status(201).send(items);
        }
    });
});

//get survivor
app.get('/', (req, res) => {
    db.getSurvivor(req.body.survivorId, (err, items) => {
        if (err) {
            console.log(`Error finding driver: ${req.body.survivorId}:`);
            res.status(401).send(err);
        } else {
            console.log(`Success! Found driver: ${req.body.survivorId}.`);
            res.status(201).send(items);
        }
    });
});

//update survivor
app.put('/', (req, res) => {
    db.updateSurvivor(req.body.survivorId, (err, items) => {
        if(err) { 
            console.log('Error updating survivor.');
            res.status(401).send(err);
        } else {
            console.log(`Success.  Updated survivor: ${req.body.survivorId}`);
            res.status(201).send(items);
        }
    })
})

//delete survivor
app.delete('/', (req, res) => {
    db.deleteSurvivor(req.body.survivorId, (err, items) => {
      if(err) {
          console.log(`Error deleting survivor: ${req.body.survivorId}.`);
          res.status(401).send(err);
      } else {
          console.log(`Success.  Deleted survivor: ${req.body.survivorId}.`);
          res.status(201).send(items);
      }
    })
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = { app }
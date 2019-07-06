const express = require('express');
const router = express.Router();
const db = require('../../database/queries.js');
const bodyParser = require('body-parser')


router.use(express.json()); 

//add appointment
router.post('/', (req, res) => {
    db.addAppointment(req.body, (err, items) => {
        if(err) {
            res.status(401).send(err);
        } else {
          console.log('Success! Posted appointment.');
          res.status(201).send(items);
        }
    })
  })
  
  //get appointment
router.get('/', (req, res) => {
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

  //get appointment by driver ID
router.get('/:id', (req, res) => {
  db.getAppointmentByDriver(req.body.driver_id, (err, items) => {
    if (err) {
      console.log(`Error finding appointments for driver:  ${req.body.driver_id}:`);
      res.status(401).send(err);
    } else {
      console.log(`Success! Found appointments for driver:  ${req.body.driver_id}.`);
      res.status(201).send(items);
    }
  })
});

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getAppointmentBySurvivor(id, (err, items) => {
    if (err) {
      console.log(`Error finding appointments for survivor: ${id}:`);
      res.status(401).send(err);
    } else {
      console.log(`Success! Found appointments for survivor: ${id}.`);
      res.status(201).send(items.rows);
    }
  });

});
  
  //get appointment by appointment id
//   router.get('/', (req, res) => {
//       db.getAppointment(req.body.appointmentId, (err, items) => {
//           if (err) {
//               console.log(`Error finding items w/ category ${req.body.appointmentId}:`);
//               res.status(401).send(err);
//           } else {
//               console.log(`Success! Found results for ${req.body.appointmentId}.`);
//               res.status(201).send(items);
//           }
//       });
//   });
  
  //update appointment return driver
  router.put('/', (req, res) => {
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
  
//   IGNORE FOR MVP
//   //update appointment destination driver
//   router.put('/', (req, res) => {
//       db.updateAppointmentReturnDriver(req.body.appointmentId, req.body.driverId, (err, items) => {
//           if(err) { 
//               console.log('Error updating return driver.');
//               res.status(401).send(err);
//           } else {
//               console.log(`Success.  Updated return driver for appointment ${req.body.appointmentId}`);
//               res.status(201).send(items);
//           }
//       })
//   })
  
//   //delete appointment
//   router.delete('/', (req, res) => {
//       db.deleteAppointment(req.body.appointmentId, (err, items) => {
//         if(err) {
//             console.log(`Error deleting appointment: ${req.body.appointmentId}.`);
//             res.status(401).send(err);
//         } else {
//             console.log(`Success.  Deleted appointment: ${req.body.appointmentId}.`);
//             res.status(201).send(items);
//         }
//       })
//   })

  module.exports = router;
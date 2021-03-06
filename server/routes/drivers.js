const express = require('express');
const router = express.Router();
const db = require('../../database/queries.js');


router.use(express.json());
//add driver
router.post('/', (req, res) => {
    db.addDriver(req.body, (err, items) => {
        if(err) {
          console.log('There was an error invoking router.post to add a driver.');
          res.status(401).send(err);
        } else {
          console.log('Success! Added driver.');
          res.status(201).send(items);
        }
    })
})

//get driver
router.get('/:id', (req, res) => {
    const id = req.params.id;
    db.getDriver(id, (err, items) => {
        if (err) {
            console.log(`Error finding driver: ${req.body.driverId}:`);
            res.status(401).send(err);
        } else {
            console.log(`Success! Found driver: ${req.body.driverId}.`);
            res.status(201).send(items.rows[0]);
        }
    });
});

//update driver    IGNORE FOR MVP
// router.put('/', (req, res) => {
//     db.updateDriver(req.body.driverId, (err, items) => {
//         if(err) { 
//             console.log('Error updating driver.');
//             res.status(401).send(err);
//         } else {
//             console.log(`Success.  Updated driver: ${req.body.driverId}`);
//             res.status(201).send(items);
//         }
//     })
// })


// //delete driver
// router.delete('/', (req, res) => {
//     db.deleteDriver(req.body.driverId, (err, items) => {
//       if(err) {
//           console.log(`Error deleting driver: ${req.body.driverId}.`);
//           res.status(401).send(err);
//       } else {
//           console.log(`Success.  Deleted driver: ${req.body.driverId}.`);
//           res.status(201).send(items);
//       }
//     })
// })

module.exports = router;
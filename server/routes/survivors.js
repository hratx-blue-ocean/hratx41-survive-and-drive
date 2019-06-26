const express = require('express');
const router = express.Router();
const db = require('../../database/queries.js');


router.use(express.json());

router.post('/', (req, res) => {
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

router.get('/', (req, res) => {
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

router.get('/all', (req, res) => {
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


//update survivor  IGNORE FOR MVP
// router.put('/', (req, res) => {
//     db.updateSurvivor(req.body.survivorId, (err, items) => {
//         if(err) { 
//             console.log('Error updating survivor.');
//             res.status(401).send(err);
//         } else {
//             console.log(`Success.  Updated survivor: ${req.body.survivorId}`);
//             res.status(201).send(items);
//         }
//     })
// })

// //delete survivor
// router.delete('/', (req, res) => {
//     db.deleteSurvivor(req.body.survivorId, (err, items) => {
//       if(err) {
//           console.log(`Error deleting survivor: ${req.body.survivorId}.`);
//           res.status(401).send(err);
//       } else {
//           console.log(`Success.  Deleted survivor: ${req.body.survivorId}.`);
//           res.status(201).send(items);
//       }
//     })
// })


module.exports = router;
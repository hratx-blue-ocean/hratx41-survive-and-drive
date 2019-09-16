const express = require('express');
const router = express.Router();
const db = require('../../database/queries.js');
const bodyParser = require('body-parser')


router.use(express.json()); 

router.get('/:type/:email', (req, res) => {
    const type = req.params.type;
    const email = req.params.email;
    console.log(type, email);
    db.getLoginId(type, email, (err, items) => {
        if (err) {
            console.log(`Error logging in fix code`);
            res.status(401).send(err);
        } else {
            console.log(`Success! We 'logged in' ;^)`);
            res.status(201).send(items.rows[0]);
        }
    });
});

module.exports = router;
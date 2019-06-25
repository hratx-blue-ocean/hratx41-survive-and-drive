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
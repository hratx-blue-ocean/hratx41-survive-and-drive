//This page basically just takes all the Routers and adds them to one module.export
const drivers = require('./drivers');
const appointments = require('./appointments');
const survivors = require('./appointments');





module.exports = { drivers, 
    appointments, 
    survivors
}
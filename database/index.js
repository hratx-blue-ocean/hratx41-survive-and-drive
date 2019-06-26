const { Client } = require('pg');


//Client will need to have an object argument when working in deployment.  Need to create a local postgress database for now.
const client = new Client({
  database: 'uplift'
});  

client.connect();


module.exports = client;

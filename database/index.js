const { Client } = require('pg');
const URL_STRING = require('./asdf');


//Client will need to have an object argument when working in deployment.  Need to create a local postgress database for now.
const client = new Client({
  connectionString: URL_STRING,
  ssl: true
});  

client.connect();


module.exports = client;

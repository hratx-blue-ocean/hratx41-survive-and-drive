const { Client } = require('pg');
const URL_STRING = require('./asdf');


//Client will need to have an object argument when working in deployment.  Need to create a local postgress database for now.
const client = new Client({
  user: 'WilliamYang',
  database: 'uplift',
  port: 5432
});  

client.connect(() => console.log('Connected to PSQL!'));

module.exports = client;

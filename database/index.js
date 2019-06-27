const { Client } = require('pg');



//Client will need to have an object argument when working in deployment.  Need to create a local postgress database for now.
const client = new Client({
  user: 'brent',
  password: 'password',
  database: 'uplift',
  port: 5432
});  

client.connect(() => console.log('Connected to PSQL!'));

module.exports = client;

/* eslint-disable no-console */
const { Client } = require('pg');


//Client will need to have an object argument when working in deployment.  Need to create a local postgress database for now.
const client = new Client({
  user: 'WilliamYang',
  database: 'uplift'
});

client.connect(() => { 
  console.log(`connected to PSQL!`);
}); 

module.exports = client;

/* eslint-disable no-console */
const { Client } = require('pg');


//Client will need to have an object argument when working in deployment.  Need to create a local postgress database for now.
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
}) 

client.connect(() => { 
  console.log(`connected to Heroku!`);
}); 

module.exports = client;

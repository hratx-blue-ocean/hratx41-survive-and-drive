const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL || postgres://dyqifpnlhonkbj:5031818abefcf438a1da741674c259040e8b2c924cc3e93b9711949e991fc6ae@ec2-23-21-109-177.compute-1.amazonaws.com:5432/d7eojmbc8en3lg,
  ssl: true
});

client.connect();

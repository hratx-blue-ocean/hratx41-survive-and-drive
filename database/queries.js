const { Client } = require('pg')
require('dotenv').config();

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})

client.connect()

const addAppointment = (request, cb) => { 

}

const getAppointment = (request, cb) => {

} 

const updateAppointment = (request, cb) => { 

} 

const deleteAppointment = (request, cb) => { 

} 

const addDriver = (request, cb) => { 
  client.query(`INSERT INTO driver (firstName, lastName, email, phoneNumber, addressLineOne, addressLineTwo, addressZipCode, addressState, photoLink, vehicleTypes) VALUES (${request.body.firstName}, ${request.body.lastName}, ${request.body.email}, ${request.body.phoneNumber}, ${request.body.addressLineOne}, ${request.body.LineTwo}, ${request.body.addressZipCode}, ${request.body.addressState}, ${request.body.photoLink}, ${request.body.vehicleTypes})`, (err, res) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, res);
    }
  })
}

const getDriver = (request, cb) => {

} 

const updateDriver = (request, cb) => { 

} 

const deleteDriver = (request, cb) => { 

} 

const addSurvivor = (request, response) => { 
  client.query(`INSERT INTO survivor ( firstName,  ) VALUES ( * )`)
}


const getSurvivor = (request, cb) => { 

}

const updateSurvivor = (request, cb) => { 

} 

const deleteSurvivor = (request, cb) => { 

}

module.exports = { getAppointment, addDriver, addSurvivor }
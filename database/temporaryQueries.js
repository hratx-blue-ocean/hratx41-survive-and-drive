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
    client.query(`INSERT INTO appointment (destination_driver, return_driver, survivor_id, locationName, addressLineOne, addressLineTwo, addressZipCode, addressState, appoinmentTime, pickupTime, date, toFromBoth) VALUES (${request.body.destination_driver}, ${request.body.return_driver}, ${request.body.survivor_id}, ${request.body.locationName}, ${request.body.addressLineOne}, ${request.body.addressLineTwo}, ${request.body.addressZipCode}, ${request.body.addressState}, ${request.body.appoinmentTime}, ${request.body.pickupTime}, ${request.body.date}, ${request.body.toFromBoth})`, (err, res) => {
        if(err) {
          cb(err, null);
        } else {
          cb(null, res);
        }
      })
}

//have to confirm how we will track currentSurvivor in state
const getAppointment = (request, cb) => {
  client.query(`SELECT * FROM appointment WHERE survivor_id = ${request.body.currentSurvivor}`, (err, res) => {
    if(err) {
        cb(err, null);
    } else {
        cb(null, err);
    }
  })
} 

//need to figure out how we will track which appointment is clicked
const updateAppointment = (request, cb) => { 
    client.query(`UPDATE appointment SET destination_driver = ${request.body.destination_driver}, return_driver = ${request.body.return_driver} WHERE appointment_id = ${request.body.currentAppt}`, (err, res) => {
        if(err) {
          cb(err, null);
        } else {
          cb(null, res);
        }
      })
} 

//need to confirm how we are tracking appointment clicked in state
const deleteAppointment = (request, cb) => { 
    client.query(`DELETE FROM appointment WHERE appointment_id = ${request.body.currentAppointment}`, (err, res) => {
        if(err) {
            cb(err, null);
        } else {
            cb(null, err);
        }
    })
} 

const addDriver = (request, cb) => { 
  client.query(`INSERT INTO driver (firstName, lastName, email, phoneNumber, addressLineOne, addressLineTwo, addressZipCode, addressState, photoLink, vehicleTypes) VALUES (${request.body.firstName}, ${request.body.lastName}, ${request.body.email}, ${request.body.phoneNumber}, ${request.body.addressLineOne}, ${request.body.addressLineTwo}, ${request.body.addressZipCode}, ${request.body.addressState}, ${request.body.photoLink}, ${request.body.vehicleTypes})`, (err, res) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, res);
    }
  })
}

//have to figure out how we will track driver who was clicked in state
const getDriver = (request, cb) => {
  client.query(`SELECT * FROM driver WHERE driver_id = ${request.body.currentDriver}`, (err, res) => {
    if(err) {
        cb(err, null);
    } else {
        cb(null, err);
    }
  })
} 

const getAllDrivers = (request, cb) => {
  client.query(`SELECT * FROM driver`, (err, res) => {
    if(err) {
        cb(err, null);
    } else {
        cb(null, err);
    }
  })
}

module.exports = { addAppointment, getAppointment, addDriver, updateAppointment, deleteAppointment, getDriver, getAllDrivers}
const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL || postgres://dyqifpnlhonkbj:5031818abefcf438a1da741674c259040e8b2c924cc3e93b9711949e991fc6ae@ec2-23-21-109-177.compute-1.amazonaws.com:5432/d7eojmbc8en3lg,
  ssl: true
});

client.connect()

const addAppointment = (appointmentInfo, cb) => { 
  client.query(`INSERT INTO appointment (
    destination_driver, return_driver, survivor_id, locationName, 
    addressLineOne, addressLineTwo, addressZipCode, addressState, 
    appoinmentTime, pickupTime, date, toFromBoth) VALUES ( 
      ${appointmentInfo.destination_driver}, ${appointmentInfo.return_driver}, ${appointmentInfo.survivor_id}, 
      ${appointmentInfo.locationName}, ${appointmentInfo.addressLineOne}, ${appointmentInfo.addressLineTwo}, 
      ${appointmentInfo.addressZipCode}, ${appointmentInfo.addressState}, ${appointmentInfo.appoinmentTime}, 
      ${appointmentInfo.pickupTime}, ${appointmentInfo.date}, ${appointmentInfo.toFromBoth})`, 
      (err, res) => {
      if(err) {
        cb(err, null);
      } else {
        cb(null, res);
      }
    })
}

//have to confirm how we will track currentSurvivor in state
const getAppointment = (appointmentId, cb) => {
  client.query(`SELECT * FROM appointment WHERE survivor_id = ${appointmentId}`, 
  (err, appointmentInfo) => {
    if(err) {
        cb(err, null);
    } else {
        cb(null, appointmentInfo);
    }
  })
} 

//need to figure out how we will track which appointment is clicked
const updateAppointmentReturnDriver = (appointmentId, driverId, cb) => { 
  client.query(`UPDATE appointment SET return_driver = ${driverId} 
  WHERE appointment_id = ${appointmentId}`, 
  (err, res) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, res);
    }
  })
} 

const updateAppointmentDestinationDriver = (appointmentId, driverId, cb) => { 
  client.query(`UPDATE appointment SET destination_driver = ${driverId} 
  WHERE appointment_id = ${appointmentId}`, 
  (err, res) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, res);
    }
  })
} 

const updateAppointment = (appointmentInfo, cb) => { 
  client.query(`INSERT INTO appointment (
    destination_driver, return_driver, survivor_id, locationName, 
    addressLineOne, addressLineTwo, addressZipCode, addressState, 
    appoinmentTime, pickupTime, date, toFromBoth) VALUES ( 
      ${appointmentInfo.destination_driver}, ${appointmentInfo.return_driver}, ${appointmentInfo.survivor_id}, 
      ${appointmentInfo.locationName}, ${appointmentInfo.addressLineOne}, ${appointmentInfo.addressLineTwo}, 
      ${appointmentInfo.addressZipCode}, ${appointmentInfo.addressState}, ${appointmentInfo.appoinmentTime}, 
      ${appointmentInfo.pickupTime}, ${appointmentInfo.date}, ${appointmentInfo.toFromBoth})`, 
      (err, res) => {
      if(err) {
        cb(err, null);
      } else {
        cb(null, res);
      }
    })
} 

//need to confirm how we are tracking appointment clicked in state
const deleteAppointment = (appointmentId, cb) => { 
  client.query(`DELETE FROM appointment WHERE appointment_id = ${appointmentId}`, 
  (err, res) => {
    if(err) {
        cb(err, null);
    } else {
        cb(null, res);
    }
  })
} 

const addDriver = (driverInfo, cb) => { 
  client.query(`INSERT INTO driver ( 
    firstName, lastName, email, phoneNumber, addressLineOne, addressLineTwo, addressZipCode, 
    addressState, photoLink, vehicleTypes) VALUES ( 
      ${driverInfo.firstName}, ${driverInfo.lastName}, ${driverInfo.email}, 
      ${driverInfo.phoneNumber}, ${driverInfo.addressLineOne}, ${driverInfo.addressLineTwo}, 
      ${driverInfo.addressZipCode}, ${driverInfo.addressState}, ${driverInfo.photoLink}, 
      ${driverInfo.vehicleTypes})`, 
      (err, res) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, res);
    }
  })
}

//have to figure out how we will track driver who was clicked in state
const getDriver = (driverId, cb) => {
  client.query(`SELECT * FROM driver WHERE driver_id = ${driverId}`, 
  (err, driverInfo) => {
    if (err) {
        cb(err, null);
    } else {
        cb(null, driverInfo);
    }
  })
} 

const getAllDrivers = (cb) => {
  client.query(`SELECT * FROM driver`, (err, allDrivers) => {
    if(err) {
        cb(err, null);
    } else {
        cb(null, allDrivers);
    }
  })
}

const getDriverSchedule = (driverId ,cb) => {
  client.query(`SELECT * FROM appointment WHERE driver_id = ${driverId}`, 
  (err, schedule) => {
    if(err) {
        cb(err, null);
    } else {
        cb(null, schedule);
    }
  })
}

module.exports = { addAppointment, getAppointment, addDriver, updateAppointment, deleteAppointment, getDriver, getAllDrivers, getDriverSchedule}
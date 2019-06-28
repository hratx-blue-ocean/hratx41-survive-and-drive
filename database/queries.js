/* eslint-disable no-console */
const client = require('./index');
require('dotenv').config();



const addAppointment = (appointmentInfo, cb) => { 
  client.query(`INSERT INTO appointment (survivor_id, locationName, 
    addressLineOne, addressLineTwo, addressZipCode, addressCity, addressState, 
    appoinmentTime, pickupTime, date, toFromBoth) VALUES (${appointmentInfo.survivor_id}, '${appointmentInfo.locationName}', '${appointmentInfo.addressLineOne}', '${appointmentInfo.addressLineTwo}', ${appointmentInfo.addressZipCode}, '${appointmentInfo.addressCity}', '${appointmentInfo.addressState}', '${appointmentInfo.appoinmentTime}', '${appointmentInfo.pickupTime}', '${appointmentInfo.date}', '${appointmentInfo.toFromBoth}')`, 
      (err, res) => {
      if(err) {
        console.log('here is your error: ', err);
        cb(err, null);
      } else {
        cb(null, res);
      }
    })
}

const getAppointmentBySurvivor = (survivorId, cb) => {
  client.query(`SELECT * FROM appointment WHERE survivor_id = ${survivorId}`, 
  (err, appointmentInfo) => {
    if(err) {
        cb(err, null);
    } else {
        cb(null, appointmentInfo);
    }
  })
} 

const getAppointment = (appointmentId, cb) => {
  client.query(`SELECT * FROM appointment WHERE appointment_id = ${appointmentId}`, 
  (err, appointmentInfo) => {
    if(err) {
        cb(err, null);
    } else {
        cb(null, appointmentInfo);
    }
  })
}

const getAppointmentBySurvivor = (survivorId, cb) => {
  client.query(`SELECT * FROM appointment WHERE survivor_id = ${survivorId}`, 
  (err, appointmentInfo) => {
    if(err) {
        cb(err, null);
    } else {
        cb(null, appointmentInfo);
    }
  })
}

const getAppointmentByDriver = ()=> {
  client.query(`SELECT * FROM appointment WHERE destination_driver || return_driver = ${driverId}`, 
  (err, appointmentInfo) => {
    if(err) {
        cb(err, null);
    } else {
        cb(null, appointmentInfo);
    }
  })
} 

const updateAppointment = (appointmentId, appointmentInfo, cb) => { 
  client.query(`UPDATE appointment SET (
    destination_driver, return_driver, survivor_id, locationName, 
    addressLineOne, addressLineTwo, addressZipCode, addressState, 
    appoinmentTime, pickupTime, date, toFromBoth) VALUES ( 
      ${appointmentInfo.destination_driver}, ${appointmentInfo.return_driver}, ${appointmentInfo.survivor_id}, 
      ${appointmentInfo.locationName}, ${appointmentInfo.addressLineOne}, ${appointmentInfo.addressLineTwo}, 
      ${appointmentInfo.addressZipCode}, ${appointmentInfo.addressState}, ${appointmentInfo.appoinmentTime}, 
      ${appointmentInfo.pickupTime}, ${appointmentInfo.date}, ${appointmentInfo.toFromBoth}) 
      WHERE appointment_id = ${appointmentId}`, 
      (err, res) => {
      if(err) {
        cb(err, null);
      } else {
        cb(null, res);
      }
    }); 
}  

const updateAppointmentReturnDriver = (appointmentId, driverId, cb) => { 
  client.query(`UPDATE appointment SET return_driver = ${driverId} 
  WHERE appointment_id = ${appointmentId}`, 
  (err, res) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, res);
    }
  }); 
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
  }); 
} 

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
  let query = `INSERT INTO driver ( 
    firstName, lastName, email, phoneNumber, addressLineOne, addressLineTwo, addressZipCode, addressState, 
    addressCity, photoLink) VALUES ( 
    '${driverInfo.firstName}',  '${driverInfo.lastName}', '${driverInfo.email}', 
    '${driverInfo.phoneNumber}', '${driverInfo.addressLineOne}', '${driverInfo.addressLineTwo}', 
    ${driverInfo.addressZipCode}, '${driverInfo.addressState}', '${driverInfo.addressCity}', '${driverInfo.photoLink}' )`;
  client.query(query, (err, res) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, res);
    }
  })
}

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

const updateDriver = (driverId, driverProfile, cb) => { 
  client.query(`UPDATE driver SET ( 
    firstName,  lastName, email, phoneNumber, addressLineOne, addressLineTwo, addressZipCode, addressState, 
    photoLink, healthEquipmentID) = ( 
      ${driverProfile.firstName},  ${driverProfile.lastName}, ${driverProfile.email}, 
      ${driverProfile.phoneNumber}, ${driverProfile.addressLineOne}, ${driverProfile.addressLineTwo}, 
      ${driverProfile.addressZipCode}, ${driverProfile.addressState}, ${driverProfile.photoLink}, 
      ${driverProfile.healthEquipmentID} ) 
      WHERE driver_id = ${driverId}`, (err, updatedDriver) => { 
        if (err) { 
          console.log(err);
          cb(err, null) 
        } else { 
          cb(null, updatedDriver)
        }
      }
  ); 
} 

const deleteDriver = (driverId, cb) => { 
  client.query(`DELETE FROM driver WHERE driver_id = ${driverId}`, (err, res) => { 
    if (err) { 
      console.log(err);
      cb(err, null)
    } else { 
      cb(null, `Driver with ID: ${driverId}, deleted`)
    }
  }); 
} 

//REMOVED THE HANDICAP ACCECCIBLE BOOLEANS BECAUSE IT WAS BREAKING THE QUERY.  ADD BACK LATER.
const addSurvivor = (survivorProfile, cb) => { 
  let query = `INSERT INTO survivor ( 
    firstName, lastName, email, phoneNumber, addressLineOne, addressLineTwo, addressZipCode, addressState, 
    addressCity, photoLink) VALUES ( 
    '${survivorProfile.firstName}',  '${survivorProfile.lastName}', '${survivorProfile.email}', 
    '${survivorProfile.phoneNumber}', '${survivorProfile.addressLineOne}', '${survivorProfile.addressLineTwo}', 
    ${survivorProfile.addressZipCode}, '${survivorProfile.addressState}', '${survivorProfile.addressCity}', '${survivorProfile.photoLink}' )`;

  client.query(query, (err, results) => { 
        if (err) { 
          console.log(err)
          cb(err, null) 
        } else { 
          cb(null, results)
        }
      }
  ); 
} 

const getAllSurvivors = (cb) => { 
  client.query(`SELECT * FROM survivor`, (err, allSurvivors) => { 
    if (err) { 
      cb(err,null) 
    } else { 
      cb(null, allSurvivors);
    }
  }); 
}

const getSurvivor = (survivorId, cb) => { 
  client.query(`SELECT * FROM survivor WHERE survivor_id = ${survivorId}`, 
  (err, driverInfo) => { 
    if (err) { 
      console.log(err);
      cb(err, null) 
    } else { 
      cb(null, driverInfo)
    }
  }); 
}

const updateSurvivor = (survivorId, driverInfo, cb) => { 
  client.query(`UPDATE survivor SET ( 
    firstName,  lastName, email, phoneNumber, addressLineOne, addressLineTwo, addressZipCode, addressState, 
    photoLink, healthEquipmentID) = ( 
      ${driverInfo.firstName},  ${driverInfo.lastName}, ${driverInfo.email}, 
      ${driverInfo.phoneNumber}, ${driverInfo.addressLineOne}, ${driverInfo.addressLineTwo}, 
      ${driverInfo.addressZipCode}, ${driverInfo.addressState}, ${driverInfo.photoLink}, 
      ${driverInfo.healthEquipmentID} ) 
      WHERE survivor_id = ${survivorId}`, (err, updatedSurvivor) => { 
        if (err) { 
          console.log(err);
          cb(err, null) 
        } else { 
          cb(null, updatedSurvivor)
        }
      }
  ); 
} 

const deleteSurvivor = (survivorId, cb) => { 
  client.query(`DELETE FROM survivor WHERE survivor_id = ${survivorId}`, (err, res) => { 
    if (err) { 
      console.log(err);
      cb(err, null)
    } else { 
      cb(null, `Survivor with ID: ${survivorId}, deleted`)
    }
  });
}



module.exports = { addAppointment, getAppointment, updateAppointment, 
  updateAppointmentDestinationDriver, updateAppointmentReturnDriver, 
  deleteAppointment, addDriver, getAllSurvivors, getDriver, updateDriver, deleteDriver, 
  addSurvivor, getSurvivor, updateSurvivor, deleteSurvivor, getAppointmentBySurvivor, getAppointmentByDriver }

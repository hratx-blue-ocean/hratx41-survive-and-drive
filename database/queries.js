const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL || postgres://dyqifpnlhonkbj:5031818abefcf438a1da741674c259040e8b2c924cc3e93b9711949e991fc6ae@ec2-23-21-109-177.compute-1.amazonaws.com:5432/d7eojmbc8en3lg,
  ssl: true
});

client.connect()

const addAppointment = (request, cb) => { 

}

const getAppointment = (request, cb) => {

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
    })
} 

const deleteAppointment = (request, cb) => { 

} 

const addDriver = (request, cb) => { 
}

const getDriver = (request, cb) => {

} 

const updateDriver = (driverProfile, cb) => { 
  client.query(`UPDATE driver SET ( 
    firstName,  lastName, email, phoneNumber, addressLineOne, addressLineTwo, addressZipCode, addressState, 
    photoLink, healthEquipmentID) = ( 
      ${driverProfile.firstName},  ${driverProfile.lastName}, ${driverProfile.email}, 
      ${driverProfile.phoneNumber}, ${driverProfile.addressLineOne}, ${driverProfile.addressLineTwo}, 
      ${driverProfile.addressZipCode}, ${driverProfile.addressState}, ${driverProfile.photoLink}, 
      ${driverProfile.healthEquipmentID} )`, (err, updatedDriver) => { 
        if (err) { 
          console.log(err);
          cb(err, null) 
        } else { 
          cb(null, updatedDriver)
        }
      }
  ); 
} 

const deleteDriver = (id, cb) => { 
  client.query(`DELETE FROM driver WHERE driver_id = ${id}`, (err, res) => { 
    if (err) { 
      console.log(err);
      cb(err, null)
    } else { 
      cb(null, `Driver with ID: ${id}, deleted`)
    }
  }); 
} 

const addSurvivor = (survivorProfile, cb) => { 
  client.query(`INSERT INTO survivor ( 
    firstName,  lastName, email, phoneNumber, addressLineOne, addressLineTwo, addressZipCode, addressState, 
    photoLink, healthEquipmentID) VALUES ( 
      ${survivorProfile.firstName},  ${survivorProfile.lastName}, ${survivorProfile.email}, 
      ${survivorProfile.phoneNumber}, ${survivorProfile.addressLineOne}, ${survivorProfile.addressLineTwo}, 
      ${survivorProfile.addressZipCode}, ${survivorProfile.addressState}, ${survivorProfile.photoLink}, 
      ${survivorProfile.healthEquipmentID} )`, (err, results) => { 
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
  client.query(`SELECT * FROM survivor`, (err, allDrivers) => { 
    if (err) { 
      console.log(err);
      cb(err,null) 
    } else { 
      cb(null, allDrivers)
    }
  }); 
}

const getSurvivor = (id, cb) => { 
  client.query(`SELECT * FROM survivor WHERE survivor_id = ${id}`, 
  (err, survivorProfile) => { 
    if (err) { 
      console.log(err);
      cb(err, null) 
    } else { 
      cb(null, survivorProfile)
    }
  }); 
}

const updateSurvivor = (id, cb) => { 
  client.query(`UPDATE survivor SET ( 
    firstName,  lastName, email, phoneNumber, addressLineOne, addressLineTwo, addressZipCode, addressState, 
    photoLink, healthEquipmentID) = ( 
      ${survivorProfile.firstName},  ${survivorProfile.lastName}, ${survivorProfile.email}, 
      ${survivorProfile.phoneNumber}, ${survivorProfile.addressLineOne}, ${survivorProfile.addressLineTwo}, 
      ${survivorProfile.addressZipCode}, ${survivorProfile.addressState}, ${survivorProfile.photoLink}, 
      ${survivorProfile.healthEquipmentID} )`, (err, updatedSurvivor) => { 
        if (err) { 
          console.log(err);
          cb(err, null) 
        } else { 
          cb(null, updatedSurvivor)
        }
      }
  ); 
} 

const deleteSurvivor = (id, cb) => { 
  client.query(`DELETE FROM survivor WHERE survivor_id = ${id}`, (err, res) => { 
    if (err) { 
      console.log(err);
      cb(err, null)
    } else { 
      cb(null, `Survivor with ID: ${id}, deleted`)
    }
  }); 
}

module.exports = { addAppointment, getAppointment, updateAppointment, 
  deleteAppointment, addDriver, getAllSurvivors, getDriver, updateDriver, deleteDriver, 
  addSurvivor, getSurvivor, updateSurvivor, deleteSurvivor }
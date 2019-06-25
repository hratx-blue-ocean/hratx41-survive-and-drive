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

const updateAppointment = (request, cb) => { 

} 

const deleteAppointment = (request, cb) => { 

} 

const addDriver = (request, cb) => { 

}

const getDriver = (request, cb) => {

} 

const updateDriver = (request, cb) => { 

} 

const deleteDriver = (request, cb) => { 

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


const getSurvivor = (id, cb) => { 
  client.query('')
}

const updateSurvivor = (request, cb) => { 

} 

const deleteSurvivor = (request, cb) => { 

}

module.exports = { getAppointment}
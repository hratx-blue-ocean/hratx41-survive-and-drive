DROP DATABASE IF EXISTS uplift;

CREATE DATABASE uplift;

SELECT uplift;

DROP TABLE IF EXISTS healthEquipment;

CREATE TABLE healthEquipment (
  equip_id SERIAL PRIMARY KEY, 
  wheelChair BOOLEAN DEFAULT false, 
  oxygen BOOLEAN DEFAULT false 
);

DROP TABLE IF EXISTS survivor;

CREATE TABLE survivor (
  survivor_id SERIAL PRIMARY KEY,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL, 
  email VARCHAR(255) NOT NULL, 
  phoneNumber VARCHAR(15) NOT NULL, 
  addressLineOne VARCHAR(255) NOT NULL, 
  addressLineTwo VARCHAR(255), 
  addressZipCode INTEGER NOT NULL, 
  addressCity VARCHAR(255) NOT NULL, 
  addressState CHAR(2) NOT NULL, 
  photoLink VARCHAR(255), 
  healthEquipmentID INTEGER REFERENCES healthEquipment(equip_id) DEFAULT NULL 
);

DROP TABLE IF EXISTS driver;

DROP TABLE IF EXISTS vehicle; 

CREATE TABLE vehicle ( 
  vehicleID SERIAL PRIMARY KEY, 
  truck BOOLEAN NOT NULL, 
  van BOOLEAN NOT NULL 
); 

CREATE TABLE driver (
  driver_id SERIAL PRIMARY KEY,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL, 
  email VARCHAR(255) NOT NULL, 
  phoneNumber VARCHAR(15), 
  addressLineOne VARCHAR(255) NOT NULL, 
  addressLineTwo VARCHAR(255), 
  addressZipCode INTEGER NOT NULL, 
  addressCity VARCHAR(255) NOT NULL, 
  addressState CHAR(2) NOT NULL, 
  photoLink VARCHAR(255), 
  vehicleTypes INTEGER REFERENCES vehicle(vehicleID) 
);


DROP TABLE IF EXISTS appointment;

CREATE TABLE appointment (
  appointment_id SERIAL PRIMARY KEY, 
  destination_driver INTEGER REFERENCES driver(driver_id) DEFAULT null, 
  return_driver INTEGER REFERENCES driver(driver_id) DEFAULT null, 
  survivor_id INTEGER REFERENCES survivor(survivor_id), 
  locationName VARCHAR(255) NOT NULL, 
  addressLineOne VARCHAR(255) NOT NULL, 
  addressLineTwo VARCHAR(255), 
  addressZipCode INTEGER NOT NULL, 
  addressCity VARCHAR(255) NOT NULL, 
  addressState VARCHAR(12) NOT NULL, 
  appoinmentTime VARCHAR(10) NOT NULL, 
  pickupTime VARCHAR(10) NOT NULL,
  date VARCHAR(12) NOT NULL, 
  toFromBoth VARCHAR (20) NOT NULL 
); 

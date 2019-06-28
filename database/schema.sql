-- psql -U brent -d uplift -a -f database/schema.sql
--^^^from root folder of survive/drive

DROP TABLE IF EXISTS appointment;
DROP TABLE IF EXISTS survivor;
DROP TABLE IF EXISTS vehicle; 
DROP TABLE IF EXISTS driver;


CREATE TABLE vehicle ( 
  vehicleID SERIAL PRIMARY KEY, 
  truck BOOLEAN NOT NULL, 
  van BOOLEAN NOT NULL 
); 


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
  wheelChair BOOLEAN DEFAULT false, 
  oxygen BOOLEAN DEFAULT false
); 

DROP TABLE IF EXISTS vehicle; 

CREATE TABLE vehicle ( 
  vehicleID SERIAL PRIMARY KEY, 
  year INTEGER NOT NULL, 
  make VARCHAR(12) NOT NULL, 
  model VARCHAR(20) NOT NULL, 
  licensePlate VARCHAR(12) NOT NULL, 
  truck BOOLEAN DEFAULT NULL, 
  van BOOLEAN DEFAULT NULL 
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
  addressState CHAR(2) NOT NULL, 
  appoinmentTime TIME NOT NULL, 
  pickupTime TIME NOT NULL, 
  endTime TIME NOT NULL, 
  date VARCHAR(12) NOT NULL, 
  toFromBoth VARCHAR (20) NOT NULL 
); 

INSERT INTO driver ( 
    firstName, lastName, email, phoneNumber, addressLineOne, addressZipCode, addressState, 
    addressCity, photoLink) VALUES ( 
    'Steve',  'Yang', 'steve.yang@hmail.com', 
    '3617791010', '119 Nueces St', 
    78701, 'TX', 'Austin', 'https://randomuser.me/api/portraits/thumb/men/65.jpg'
);

INSERT INTO driver ( 
    firstName, lastName, email, phoneNumber, addressLineOne, addressZipCode, addressState, 
    addressCity, photoLink) VALUES ( 
    'Crew',  'Spence', 'css@hotmail.url', 
    '1234561234', '119 Nueces St', 
    78701, 'TX', 'Austin', 'https://randomuser.me/api/portraits/thumb/men/68.jpg'
);

INSERT INTO survivor ( 
    firstName, lastName, email, phoneNumber, addressLineOne, addressZipCode, addressState, 
    addressCity, photoLink, wheelChair, oxygen) VALUES ( 
    'Brent',  'Rusnell', 'brssssss@neopets.url', 
    '1236541234', '119 Nueces St', 
    78701, 'TX', 'Austin', 'https://randomuser.me/api/portraits/thumb/men/2.jpg', 'TRUE', 'FALSE'
);

INSERT INTO survivor ( 
    firstName, lastName, email, phoneNumber, addressLineOne, addressZipCode, addressState, 
    addressCity, photoLink, wheelChair, oxygen) VALUES ( 
    'Kent',  'Rusnell', 'krssssss@neopets.url', 
    '1236541234', '119 Nueces St', 
    78701, 'TX', 'Austin', 'https://randomuser.me/api/portraits/thumb/men/3.jpg', 'TRUE', 'FALSE'
);

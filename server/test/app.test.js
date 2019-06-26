const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
// Tests can also be written with 'expect' rather than 'should' if desired
// const expect = chai.expect;

chai.use(chaiHttp); 

/********** TEST OBJECTS  *************/


const testProfile = { 
  firstName: 'test',
  lastName: 'testerson', 
  email: 'test@testing.com', 
  phoneNumber: 2531112222, 
  addressLineOne: '119 Nueces St', 
  addressZipCode: 78701, 
  addressCity: 'Austin', 
  addressState: 'TX', 
  photoLink: 'www.picpic.com/12424343', 
}

const testModifiedProfile = { 
  driver_id: 1,
  firstName: 'mod',
  lastName: 'modded', 
  email: 'mod@testing.com', 
  phoneNumber: 2532345678, 
  addressLineOne: '818 N 8th St', 
  addressZipCode: 98406, 
  addressCity: 'Tacoma', 
  addressState: 'WA', 
  photoLink: 'www.picpic.com/newpic', 
}

const testAppointment = {  
  survivor_id: 1, 
  locationName: 'Baylor, Scott & White', 
  addressLineOne: '900 E Whitestone Blvd', 
  addressZipCode: 78613, 
  addressCity: 'Cedar Park', 
  addressState: 'TX', 
  appoinmentTime: '12:30', 
  pickupTime: '11:45', 
  endTime: '14:00',
  date: '2019-06-28', 
  toFromBoth: 'BOTH' 
} 

const testModifiedAppnt = {  
  survivor_id: 1, 
  locationName: 'Emergency Room', 
  addressLineOne: 'Somwhere fast', 
  addressZipCode: 78701, 
  addressCity: 'Austin', 
  addressState: 'TX', 
  appoinmentTime: '09:00', 
  pickupTime: '08:15', 
  endTime: '10:45',
  date: '2019-06-30', 
  toFromBoth: 'BOTH' 
} 

const testVehicle = { 
  year: 2012, 
  make: 'Mini', 
  model: 'Clubman S', 
  licensePlate: '1234-TX1'
} 

const testModifiedVehicle = { 
  year: 1991, 
  make: 'Volkswagen', 
  model: 'Corrado', 
  licensePlate: '54321-WA'
} 

/********** GET TESTS  *************/

describe('GET all driver request', () => {
  it('it should GET all drivers', (done) => {
    chai
      .request(`http://localhost:9000`)
      .get('/api/drivers')
      .then((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200);
        res.body.should.be.a('object')
        done();
      })
      .catch(err => err);
  });
});

describe('GET individual passenger request', (done) => {
  it('it should GET an individual passenger', () => {
    chai
      .request(`http://localhost:9000`)
      .get('/api/drivers/1')
      .then((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      })
      .catch(err => err);
  });
}); 

describe('GET all appointments request', (done) => {
  it('it should GET all appointments', () => {
    chai
      .request(`http://localhost:9000`)
      .get('/api/appointments')
      .then((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      })
      .catch(err => err);
  });
}); 

describe('GET an appointment request', (done) => {
  it('it should GET an appointment', () => {
    chai
      .request(`http://localhost:9000`)
      .get('/api/appointments/1')
      .then((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      })
      .catch(err => err);
  });
}); 

describe('GET a vehicle request', (done) => {
  it('it should GET a vehicle', () => {
    chai
      .request(`http://localhost:9000`)
      .get('/api/vehicles/1')
      .then((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      })
      .catch(err => err);
  });
}); 

/********** POST TESTS  *************/

describe('POST add driver request', () => {
  it('it add a driver to db', () => {
    chai
      .request(`http://localhost:9000`)
      .post('/api/drivers') 
      .send(testProfile)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
     });
  });
}); 

describe('POST  a new appointment', () => {
  it('it should add an appointment to the schedule', () => {
    chai
      .request(`http://localhost:9000`)
      .post('/api/appointment/')
      .send(testAppointment)
      .end((err, res) => { 
        expect(err).to.be.null;
        expect(res).to.have.status(200);
      }); 
  });
}); 

describe('POST  a new vehicle', () => {
  it('it should add a vehicle to the db', () => {
    chai
      .request(`http://localhost:9000`)
      .post('/api/vehicles/')
      .send(testVehicle)
      .end((err, res) => { 
        expect(err).to.be.null;
        expect(res).to.have.status(200);
      }); 
  });
}); 


/********** PUT TESTS  *************/

describe('PUT driver request', () => {
  it('it should update a drivers record', () => {
    chai
      .request(`http://localhost:9000`)
      .put('/api/drivers/1') 
      .send(testModifiedProfile)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
     });
  });
}); 

describe('Put appointment request', () => {
  it('it should update an existing appointment', () => {
    chai
      .request(`http://localhost:9000`)
      .post('/api/appointment/1')
      .send(testModifiedAppnt)
      .end((err, res) => { 
        expect(err).to.be.null;
        expect(res).to.have.status(200);
      }); 
  });
}); 

describe('PUT vehicle request', () => {
  it('it should update a vehicle in the db', () => {
    chai
      .request(`http://localhost:9000`)
      .post('/api/vehicles/1')
      .send(testModifiedVehicle)
      .end((err, res) => { 
        expect(err).to.be.null;
        expect(res).to.have.status(200);
      }); 
  });
}); 


/********** DELETE REQ TESTS  *************/
// Not sure id chai tests delete requests. 

describe('PUT vehicle request', () => {
  it('it should update a vehicle in the db', () => {
    chai
      .request(`http://localhost:9000`)
      .post('/api/vehicles/1')
      .send(testModifiedVehicle)
      .end((err, res) => { 
        expect(err).to.be.null;
        expect(res).to.have.status(200);
      }); 
  });
}); 





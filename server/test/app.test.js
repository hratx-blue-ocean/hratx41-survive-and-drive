const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
// Tests can also be written with 'expect' rather than 'should' if desired
// const expect = chai.expect;

chai.use(chaiHttp);

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

const testVehicle = { 
  year: 2012, 
  make: 'Mini', 
  model: 'Clubman S', 
  licensePlate: '1234-TX1'
}

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

describe('POST add driver request', () => {
  it('it add a driver to db', () => {
    chai
      .request(`http://localhost:9000`)
      .post('/api/appointments') 
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



yyyy-mm-dd


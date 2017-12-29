const assert = require('assert');
const index = require('./../../index');;
const request = require('supertest');
const timeSlipHelper = require('../../helpers/timeSlips');
const TimeSlip = require('./../../models/timeSlip');
const ObjectID = require('mongodb').ObjectID;

const timeSlips = [
  {
    _id: new ObjectID(),
    language: 'language1',
    description: 'description1'
  }, 
  {
    _id: new ObjectID(),
    language: 'language2',
    description: 'description2'
  }
]

beforeEach((done) => {
  TimeSlip.remove({}).then(() => {
    return TimeSlip.insertMany(timeSlips);
  }).then(() => done());
});

describe('User get requests', () => {
  it('should GET /api/timeSlips result', (done) => {
    request(index)
      .get('/api/timeSlips/')
      .end((err, response) => {
        assert(response.status === 200);
        done();
      })
  });
});

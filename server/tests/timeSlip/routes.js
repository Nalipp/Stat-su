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
    url: 'http://www.url1.com',
    description: 'description1'
  }, 
  {
    _id: new ObjectID(),
    language: 'language2',
    url: 'http://www.url2.com',
    description: 'description2'
  }
]

beforeEach((done) => {
  TimeSlip.remove({}).then(() => {
    return TimeSlip.insertMany(timeSlips);
  }).then(() => done());
});

describe('TimeSlipHelper page GET requests', () => {
  it('should GET /api/timeSlips result', (done) => {
    request(index)
      .get('/api/timeSlips/')
      .end((err, res) => {
        assert(res.status === 200);
        done();
      })
  });
});

describe('TimeSlipHelper database CRUD requests', () => {
  it('should GET all TimeSlips from database', (done) => {
    request(index)
      .get('/api/timeSlips/')
      .end((err, res) => {
        assert(res.body.length === 2);
        done();
      });
  });

  it('should GET a TimeSlip by id from database', (done) => {
    request(index)
      .get(`/api/TimeSlips/${timeSlips[0]._id}`)
      .end((err, res) => {
        assert(timeSlips[0]._id.equals(res.body._id));
        assert(res.body.language === timeSlips[0].language);
        done();
      });
  });

  it('should POST a new TimeSlip to the database', (done) => {
    let newTimeSlip = new TimeSlip({
      language: 'langauge3', 
      url: 'http://www.url3.com',
      description: 'description3',
      completed: false
    })
    request(index)
      .post('/api/timeSlips/')
      .send(newTimeSlip)
      .end((err, res) => {
        assert(res.body.language === newTimeSlip.language);
        assert(res.body.url === newTimeSlip.url);
        assert(res.body.description === newTimeSlip.description);
        assert(res.body.created_date !== null);
        assert(res.body.completed === newTimeSlip.completed);
        done()
      })
  });

  it('should DELETE a TimeSlip by id from database', (done) => {
    request(index)
      .delete(`/api/timeSlips/${timeSlips[1]._id}`)
      .end((err, res) => {
        request(index)
          .get('/api/TimeSlips/')
          .end((err, res) => {
            assert(res.body.length === 1);
            done();
          });
      })
  });

});


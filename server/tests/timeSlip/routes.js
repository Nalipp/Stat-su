const assert = require('assert');
const index = require('./../../index');;
const request = require('supertest');
const timeSlipHelper = require('../../helpers/timeSlips');
const TimeSlip = require('./../../models/timeSlip');
const ObjectID = require('mongodb').ObjectID;

const date = Date.now();
const timeSlips = [
  {
    _id: new ObjectID(),
    language: 'language1',
    url: 'http://www.url1.com',
    description: 'description1',
    completed: false,
    last_update: Date.now(),
  }, 
  {
    _id: new ObjectID(),
    language: 'language2',
    url: 'http://www.url2.com',
    description: 'description2',
    totalTime: 8000,
    completed: false,
    last_update: Date.now(),
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

  it('should PUT toggleArchive on TimeSlip.completed', (done) => {
    let status = !timeSlips[1].completed;
    request(index)
      .put(`/api/timeSlips/${timeSlips[1]._id}`)
      .send({completed: status})
      .end((err, res) => {
        request(index)
          .get(`/api/TimeSlips/${timeSlips[1]._id}`)
          .end((err, res) => {
            assert(res.body.completed === !timeSlips[1].completed);
            done();
          });
      })
  });

  it('should PUT update to TimeSlip.total_time', (done) => {
    let total_time = 800;

    request(index)
      .put(`/api/timeSlips/${timeSlips[0]._id}`)
      .send({total_time})
      .end((err, res) => {
        request(index)
          .get(`/api/TimeSlips/${timeSlips[0]._id}`)
          .end((err, res) => {
            assert(res.body.total_time === 800);
            done();
          });
      })
  });

  it('should PUT update to TimeSlip.last_update', (done) => {
     let dateNow = Date.now();
     var newDate = new Date(null);
     newDate.setMilliseconds(dateNow);
     let last_update = newDate;

    request(index)
      .put(`/api/timeSlips/${timeSlips[1]._id}`)
      .send({last_update})
      .end((err, res) => {
        request(index)
          .get(`/api/TimeSlips/${timeSlips[0]._id}`)
          .end((err, res) => {
            let resString = res.body.last_update.slice(0, 16);
            let dateString = newDate.toISOString().slice(0, 16);
            assert(resString === dateString);
            done();
          });
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


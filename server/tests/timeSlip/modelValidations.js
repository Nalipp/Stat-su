const assert = require('assert');
const TimeSlip = require('../../models/timeSlip');

describe('Validates timeSlip records', () => {
  it('requires a language length less than 1000 characters', () => {
    const timeSlip = new TimeSlip({language: 'n'.repeat(1000)});
    const validationResult = timeSlip.validateSync();
    const { message } = validationResult.errors.language
    assert(message === 'Language must be valid length');
  });

  it('requires a description', () => {
    const timeSlip = new TimeSlip({description: null});
    const validationResult = timeSlip.validateSync();
    const message = validationResult.errors.description.message;
    assert(message === 'Description is required');
  });

  it('requires a description length greater than 2 characters', () => {
    const timeSlip = new TimeSlip({description: 'no'});
    const validationResult = timeSlip.validateSync();
    const { message } = validationResult.errors.description
    assert(message === 'Description must be valid length');
  });

  it('requires a description length less than 30000 characters', () => {
    const timeSlip = new TimeSlip({description: 'n'.repeat(30000)});
    const validationResult = timeSlip.validateSync();
    const { message } = validationResult.errors.description
    assert(message === 'Description must be valid length');
  });

  it('disallows invalid records from being saved', (done) => {
    const timeSlip = new TimeSlip({description: 'no'});
    timeSlip.save()
      .then(() => timeSlip.findOne({description: 'no'}))
      .catch((validationResult) => {
        const { message } = validationResult.errors.description;  
        assert(message === 'Description must be valid length');
        done();
      });
  });
});

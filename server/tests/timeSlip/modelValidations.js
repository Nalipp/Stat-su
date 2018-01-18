const assert = require('assert');
const TimeSlip = require('../../models/timeSlip');

describe('Validates timeSlip records', () => {
  it('requires a language length less than 31 characters', () => {
    const timeSlip = new TimeSlip({language: 'n'.repeat(31)});
    const validationResult = timeSlip.validateSync();
    const { message } = validationResult.errors.language
    assert(message === 'Language must be valid length');
  });

  it('requires a description length less than 201 characters', () => {
    const timeSlip = new TimeSlip({description: 'n'.repeat(201)});
    const validationResult = timeSlip.validateSync();
    const { message } = validationResult.errors.description
    assert(message === 'Description must be valid length');
  });

  it('requires a url length less than 10000 characters', () => {
    const timeSlip = new TimeSlip({url: 'n'.repeat(10000)});
    const validationResult = timeSlip.validateSync();
    const { message } = validationResult.errors.url
    assert(message === 'Url must be valid length');
  });

  it('disallows invalid records from being saved', (done) => {
    const timeSlip = new TimeSlip(
      {language: 'ruby', description: 'n'.repeat(201)}
    );
    timeSlip.save()
      .then(() => timeSlip.findOne({language: 'ruby'}))
      .catch((validationResult) => {
        const { message } = validationResult.errors.description;  
        assert(message === 'Description must be valid length');
        done();
      });
  });
});

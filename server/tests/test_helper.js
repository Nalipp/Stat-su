const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

beforeEach((done) => {
  const { timeslips } = mongoose.connection.collections;
  timeslips.drop(() => done());
});

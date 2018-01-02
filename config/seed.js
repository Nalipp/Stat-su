var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost/tStudy-api", function (err, database) {
  if(err) throw err;

  database.db('tStudy-api').collection('timeslips', function (err, collection) {
    collection.drop();
    collection.insertMany(
      [
        {language: 'JavaScript', description: 'YDKJS'},
        {language: 'React', description: 'Udacity'},
        {language: 'Node.js', description: 'Advanced Web Developer Bootcamp'},
        {language: 'Sql', description: 'Launch School'},
        {language: 'Ruby', description: 'The Pickax Book'},
        {language: 'Sinatra', description: 'Project'},
      ]
    );
    console.log('Seeding complete!');
  });
});

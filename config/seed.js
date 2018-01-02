var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost/tStudy-api", function (err, database) {
  if(err) throw err;

  database.db('tStudy-api').collection('timeslips', function (err, collection) {
    collection.drop();
    collection.insertMany(
      [
        {
          language: 'JavaScript', 
          description: 'You Don"t Know JavaScript book series, Scope and Closures Chapter 5'},
        {
          language: 'React', 
          description: 'The Advanded Web Developer Bootcamp Udemy course, created by Rithm Bootcamp in San Francisco exploring modern frontend technologies including React, Node, ES6 and D3'
        },
        {
          language: 'Node.js', 
          description: 'Complete Web Developer Bootcamp course, taught by former Galvanize Bootcamp instructor Colt Steele covering the fundamentals of web development including html, css, javaScript, jQuery, Node.js, MongoDb, mongoose'},
        {
          language: 'Sql', 
          description: 'Launch School online web developer traning school, Programming and Back-end Development section 180 SQL and Relational Databases'
        },
        {
          language: 'Ruby', 
          description: 'Udacity Nano Degree, exploring the fundamentals of writing and reading from a database using the ruby language'
        },
        {
          language: 'Sinatra',
          description: 'Project exploring web development through the sinatra framework'
        },
      ]
    );
    console.log('Seeding complete!');
  });
});

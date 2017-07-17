//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if (err) {

    return console.log('Unable to connect to MongoDB Server');

  }

  console.log('Connected to MongoDB Server');

  // db.collection('Todos').insertOne({
  //
  //   text: 'Something to do',
  //   completed: false
  //
  // }, (err, result) => {
  //
  //   if(err) {
  //
  //     return console.log('Unable to insert ToDo', err);
  //
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //
  // });

  // Insert new doc into Users (name, age, location)

  // db.collection('Users').insertOne({
  //
  //   name: 'Martin',
  //   age: 36,
  //   location: 'Slough'
  //
  // }, (err, result) => {
  //
  //   if(err) {
  //
  //     return console.log('Unable to insert User', err);
  //
  //   }
  //
  //   console.log(result.ops);
  //
  // });

  db.close();

});

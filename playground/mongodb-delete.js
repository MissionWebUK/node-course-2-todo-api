//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if (err) {

    return console.log('Unable to connect to MongoDB Server');

  }

  // deleteMany

  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //
  //   console.log(result);
  //
  // });

  //deleteOne

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //
  //   console.log(result);
  //
  // });

  // findOneAndDelete

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //
  //   console.log(result);
  //
  // });

  //delete many name

  db.collection('Users').deleteMany({name: 'Martin'}).then((result) => {

    console.log(result);

  });

  //findOneAndDelete by id

  db.collection('Users').findOneAndDelete({

    _id: new ObjectID('596d347409a9b235e6854990')

  }).then((result) => {

    console.log(result);

  });

  //db.close();

});

const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//
//   console.log(result);
//
// });

// Todo.findOneAndRemove

Todo.findOneAndRemove({_id: '597344a6fdc173bc02b87def'}).then((todo) => {

  

});

// Todo.findByIdAndRemove

Todo.findByIdAndRemove('597344a6fdc173bc02b87def').then((todo) => {

  console.log(todo);

});

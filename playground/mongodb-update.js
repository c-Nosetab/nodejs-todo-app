// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');  

  //! findOneAndUpdate

  // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5c60d36155289ef01078b1ee') }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then(
  //   res => console.log(res),
  //   err => console.log('unable to load Todos', err)
  // );

  db.collection('Users').findOneAndUpdate({ _id: new ObjectID('5c5e00a401bbf51fe16932f3')}, {
      $set: {name: 'Chris'},
      $inc: {age: 1}
    },{
      returnOriginal: false
  }).then(
    res => console.log(res)
  )


//  db.close();
}); //first arg is the URL to where the db exists, second is the cb()
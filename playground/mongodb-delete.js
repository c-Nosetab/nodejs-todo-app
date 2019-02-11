// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  //!deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
  //   console.log(res);
  // }, (err) => {
  //   console.log('Unable to find entries', err);
  // })

  // db.collection('Users').deleteMany({name: 'Chris Bateson'}).then(
  //   (res) => console.log(res),
  //   (err) => console.log('Unable to load Users', err)
  // );

  //!deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
  //   console.log(res);
  // }, (err) => {
  //   console.log('Unable to find entries', err);
  // })



  //!findOneAndDelete
  // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((res) => {
  //   console.log(res);
  // }, (err) => {
  //   console.log('Unable to find entries', err);
  // })

  db.collection('Users').findOneAndDelete({ _id: new ObjectID('5c608e2953c2af11b8429d55')}).then(
    res => console.log(res),
    err => console.log('Unable to load users', err)
  )

//  db.close();
}); //first arg is the URL to where the db exists, second is the cb()
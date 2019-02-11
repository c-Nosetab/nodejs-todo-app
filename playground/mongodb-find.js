// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({ completed: false}).toArray().then((docs) => {
  // db.collection('Todos').find({
  //   _id: new ObjectID('5c5dfcbc7fee1e1f1faa2136')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));

  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // })

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // })

  db.collection('Users').find({name: 'Chris Bateson'}).count().then((count) => {
    console.log(`User count: ${count}`)
  }, (err) => {
    console.log('Unable to fetch users', err)
  })

//  db.close();
}); //first arg is the URL to where the db exists, second is the cb()
// const express = require('express');
// const app = express();

// // // define a GET endpoint for retrieving a list of users
// // app.get('/users', (req, res) => {
// //   // retrieve a list of users from the database or other data source
// //   const users = [
// //     { id: 1, name: 'John Doe' },
// //     { id: 2, name: 'Jane Smith' }
// //   ];

// //   // send the list of users as a JSON response
// //   res.json(users);
// // });



// ///correct get methord
// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb+srv://sreelekha:sreelekha1@cluster0.xhibn.mongodb.net/proj';

// // define a GET endpoint for retrieving data from the database
// app.get('/data', (req, res) => {
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     const dbo = db.db('mydb');
//     dbo.collection('mycollection').find({}).toArray(function(err, result) {
//       if (err) throw err;
//       db.close();
//       res.json(result);
//     });
//   });
// });


// // // define a POST endpoint for creating a new user
// // app.post('/users', (req, res) => {
// //   // parse the request body to extract the user data
// //   const { name } = req.body;

// //   // create a new user in the database or other data source
// //   const user = { id: 3, name };

// //   // send the new user as a JSON response
// //   res.json(user);
// // });










// // const MongoClient = require('mongodb').MongoClient;
// // const url = 'mongodb://localhost:27017/mydb';

// app.post('/messages', (req, res) => {
//   // parse the request body to extract the user data
//   const { name } = req.body;

//   // create a new user object
//   const user = { name };

//   // connect to the database
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     const dbo = db.db('proj');

//     // insert the new user document into the users collection
//     dbo.collection('users').insertOne(user, function(err, result) {
//       if (err) throw err;

//       // assign an ID to the new user document based on the MongoDB _id field
//       const newUser = { id: result.insertedId, ...user };

//       db.close();

//       // send the new user document as a JSON response
//       res.json(newUser);
//     });
//   });
// });


// // start the server and listen for incoming requests
// app.listen(3000, () => {
//   console.log('Server started on port 3009');
// });

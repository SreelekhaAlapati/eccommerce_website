import mongoose from 'mongoose';

// const Connection = async (username, password) => {
//     const URL = `mongodb://${username}:${password}@crud-app-shard-00-00.fyf2n.mongodb.net:27017,crud-app-shard-00-01.fyf2n.mongodb.net:27017,crud-app-shard-00-02.fyf2n.mongodb.net:27017/CRUD-APPLICATION?ssl=true&replicaSet=atlas-rz0rvg-shard-0&authSource=admin&retryWrites=true&w=majority`

//     try {
//         // 1 - Current URL string parser is deprecated, and will be removed in a future version. 
//         // 2 - Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.

//         await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
//         console.log('Database Connected Succesfully');
//     } catch(error) {
//         console.log('Error: ', error.message);
//     }
// }


import { MongoClient } from 'mongodb';

const url = "mongodb+srv://sreelekha:sreelekha1@cluster0.xhibn.mongodb.net/proj";
const dbName = "proj";

const Connection = async () => {
  try {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    return client.db(dbName);
  } catch (error) {
    console.error(error);
  }
}


export default Connection;



// mongoose.connect('mongodb+srv://sreelekha:sreelekha1@cluster0.xhibn.mongodb.net/proj',{
// useNewUrlParser: true,
//   useUnifiedTopology: true
// }, (err) => {
//   if (!err) {
//     console.log('MongoDB Connection Succeeded.');
//   } else {
//     console.log('Error in DB connection : ' + err);
//   }
// });

// export default Connection;
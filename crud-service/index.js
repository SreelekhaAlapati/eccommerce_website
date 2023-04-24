import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import { ObjectId } from "bson"
import Routes from './server/route.js';
import Connection from './database/db.js';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
// import Message from './controller/Messages';
const app = express();
app.use(morgan('combined'));
dotenv.config();

// const swaggerJSDoc=require('swagger-jsdoc')
// const swaggerUi =require('swagger-ui-express')
// To handle HTTP POST requests in Express.js version 4 and above, 
// you need to install the middleware module called body-parser.
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.use('/', Routes);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const PORT = '8080';
//Connection(USERNAME, PASSWORD);
const db=await Connection()
// app.use('/wait', Routes);
const options={
  definition:{
    openapi: '3.0.0',
    info:{
      title:'messages Api using REst api and storing and retrieving from mongodb',
      version:'1.0.0'
    },
    servers:[
      {
        url:'http://localhost:8080/'
      }
    ]
  },
  apis:['./index.js','../backend/server.js']
}

const swaggerSpec=swaggerJSDoc(options)
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec))

/**
 * @swagger
 *  components:
 *    schemas:
 *      Messages:
 *        type: object
 *        properties:
 *            id:
 *                type: string
 *            name:
 *                type: string
 *            email:
 *                type: string
 *            phonenumber:
 *                type: string
 *            message:
 *                type: string
 */


/**
 * @swagger
 * /datacheck:
 *  get:
 *    summary: Get all messages from database
 *    description: This API is used to fetch records from MongoDB
 *    responses:
 *      '200':
 *        description: This API is used to fetch data from MongoDB
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Messages'
 */




app.get("/datacheck", (req, res) => {
     db.collection('messages').find({}).toArray(function(err, result) {
       if (err) throw err;
       res.status(200).json(result);
       console.log(res);
       return res;
   });
  });


  app.get("/allproducts",(req,res)=>{
    db.collection('products').find({}).toArray(function(err, result) {
      if (err) throw err;
      res.status(200).json(result);
      console.log(res);
      return res;
  });
  })  

/**
 *  @swagger
 * /datacheck/{id}:
 *   get:
 *     summary: To get records of a particular id
 *     description: This api is used to fetch unique record using id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Object ID required
 *         schema:
 *           type: string
 *           format: ObjectId
 *     responses:
 *       200:
 *         description: this api is used for fetching
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Messages'
 */


  app.get('/datacheck/:id', (req, res) => {
    const resourceId = req.params.id;
    console.log(resourceId)
    // const resourceId='641aff4e67596aca4cd9ea36';
    db.collection('messages').findOne({_id: ObjectId(resourceId)}, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else if (result) {
        res.status(200).json(result);
        console.log(result);
        return result;
      } else {
        res.status(404).send('Resource not found');
      }
    });
  });





  


/**
 * @swagger
 * /datacheck:
 *  post:
 *    summary: used to insert data to mongodb
 *    description: This API is used to post records to MongoDB
 *    requestBody:
 *      required: true
 *      content:
 *         application/json:
 *            schema:
 *               $ref: '#/components/schemas/Messages'
 *    responses:
 *      '200':
 *        description: Added Successfully
 */


  
  app.post('/datacheck', (req, res) => {
    const { id, name, email, phonenumber, message } = req.body;

      const collection = db.collection('messages');
      const document = {
        id,
        name,
        email,
        phonenumber,
        message
      };
  
      collection.insertOne(document, (err, result) => {
        if (err) throw err;
        console.log(`Inserted document with _id: ${result.insertedId}`);

        res.status(200).json({ message: 'Data inserted successfully!' });
      });
    });
 



/**
 * @swagger
 * /datacheck/{id}:
 *   delete:
 *     summary: this api is used to delete a record from mongodb database
 *     description: this api is used to fetch data from mongodb
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ObjectId required
 *         schema:
 *           type: string
 *           format: ObjectId
 *     responses:
 *       200:
 *         description: data is deleted
 */


app.delete('/datacheck/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(userId)
    // validate that the id parameter is a valid MongoDB ObjectID
    if (!ObjectId.isValid(userId)) {
      return res.status(400).send('Invalid user ID');
    }

    const result = await db.collection('messages').deleteOne({ _id: new ObjectId(userId) });

    if (result.deletedCount === 0) {
      res.status(404).send('User not found');
    } else {
      res.sendStatus(204); 
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to delete user');
  }
});







// app.delete('/resources/:id', (req, res) => {
//   const resourceId = req.params.id;
//   db.collection('resources').findOneAndDelete({_id: ObjectId(resourceId)}, function(err, result) {
//     if (err) {
//       res.status(500).send(err);
//     } else if (result.value) {
//       res.status(200).send('Resource deleted successfully');
//     } else {
//       res.status(404).send('Resource not found');
//     }
//   });
// });


  
  
  
 
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
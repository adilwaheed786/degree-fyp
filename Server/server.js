const express = require('express');
// const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors= require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const certificateDoc = require('./documents');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//POST - Generating pdf and fetching the data
app.post('/create-pdf',async (req,res)=>{
    console.log('yai mai post ki API mai aai hoon')
    const { firstname, lastname, program, cgpa, dateofgraduation } = req.body;
    console.log(req)
    console.log(res)
    let temp = certificateDoc(firstname, lastname, program, cgpa, dateofgraduation)
    //let temp = certificateDoc(req.body).toString()
    console.log(temp)
    console.log('create pdf log');
    pdf.create(temp,{}).toFile('result.pdf',(err)=>{
        if(err){
            res.send(Promise.reject())
            
        }else{
            res.send(Promise.resolve());
        }
    })
})

//GET -  Send the Generated pdf TO THE client
app.get('/fetch-pdf',(req,res) =>{
    console.log('fetch pdf log');
    res.sendFile(`${__dirname}/result.pdf`)
    
})

//MongoDb For Save Transaction Data Into Db
// Connection URL
//const url = 'mongodb://localhost:27017';
//const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const url =`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.lw3ikvg.mongodb.net/`;
// Database Name
const dbName = process.env.DB_NAME;

// Collection Name
const collectionName = process.env.DB_COLLECTION_NAME;

// Middleware to parse JSON body
app.use(express.json());

// Endpoint to handle saving data
app.post('/saveData', async (req, res) => {
    debugger;
  const {uniqueId, transactionHash, blockNumber,blockHash, timestamp } = req.body;

  try {
    // Connect to MongoDB
    console.log(url);
    const client = await MongoClient.connect(url);
    console.log('Connected to MongoDB');

    // Select the database
    const db = client.db(dbName);

    // Select the collection
    const collection = db.collection(collectionName);

    // Create a document with the data
    const document = {
      uniqueId:uniqueId,
      transactionHash: transactionHash,
      blockNumber: blockNumber,
      blockHash:blockHash,
      timestamp: timestamp
    };

    // Insert the document into the collection
    const result = await collection.insertOne(document);
    console.log('Data saved to MongoDB');

    // Close the connection
    client.close();

    res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving data to MongoDB:', error);
    res.status(500).json({ error: 'Failed to save data' });
  }
});

app.listen(port, () => console.log(`listen on port ${port}`))

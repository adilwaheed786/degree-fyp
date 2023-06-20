const express = require('express');
// const bodyParser = require('body-parser');
const QRCode = require('qrcode');
const pdf = require('html-pdf');
const cors= require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const certificateDoc = require('./documents');
require('dotenv').config();
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Generate QR Code Data URL
const generateQRCodeDataUrl = async (data) => {
  try {
    const dataUrl = await QRCode.toDataURL(data);
    return dataUrl;
  } catch (error) {
    console.error('Error generating QR code:', error);
    return null;
  }
};

function generateSHA256Hash(fileContent) {
  const hash = crypto.createHash('sha256');
  hash.update(fileContent);
  return hash.digest('hex');
}

// const qrCodeData = QRCode.toString(uniqueId, {
//   errorCorrectionLevel: 'H',
//   type: 'svg'
// })

//POST - Generating pdf and fetching the data
app.post('/create-pdf',async (req,res)=>{
  try{
      console.log('yai mai post ki API mai aai hoon')
      const { firstname, lastname, program, cgpa, dateofgraduation,uniqueId,enrollment} = req.body;
      
      console.log(req)
      console.log(res)
      let temp =await  certificateDoc(firstname, lastname, program, cgpa, dateofgraduation,uniqueId)
      //let temp = certificateDoc(req.body).toString()
      const options = {
          format: 'Letter', // Set the PDF format to A4 size
          // Add any additional options as needed
        };
      
      console.log(temp)
      console.log('create pdf log');
      // pdf.create(temp, options).toBuffer((err, pdfBuffer) => {
      //   if (err) {
      //     console.error('Error generating PDF:', err);
      //     res.status(500).json({ error: 'Error generating PDF' });
      //     return;
      //   }
  
      //   res.setHeader('Content-Type', 'application/pdf');
      //   res.send(pdfBuffer);
      //   console.log(pdfBuffer)
      // });
      pdf.create(temp, options).toBuffer(async (err, pdfBuffer) => {
        if (err) {
          console.error('Error generating PDF:', err);
          res.status(500).json({ error: 'Error generating PDF' });
          return;
        }
        
        const hash = generateSHA256Hash(pdfBuffer);
        console.log('SHA256 Hash:', hash);
        // Generate hash using IPFS
        try {

      
          const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
              user: 'developingpurpose2222@gmail.com',
              pass: 'zmpyxdnylkkqlozt',
            },
          });
      
          const mailOptions = {
            from: 'developingpurpose2222@gmail.com',
           // to: `${enrollment}@student.bahria.edu.pk`,
            to: `adilwaheed2222.com@gmail.com`,
            subject: 'Email with PDF attachment',
            text: 'Please find attached PDF file.',
            attachments: [
              {
                filename: `${enrollment}.pdf`,
                content: pdfBuffer,
              },
            ],
          };
      
          console.log(mailOptions)
          try {
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent:', info.messageId);
            res.status(200).json({ message: 'Email sent successfully',hash });
           // res.send(hash);
          } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'An error occurred while sending the email' });
          }
        } catch (error) {
          console.error('Error adding PDF to IPFS:', error);
          res.status(500).json({ error: 'Error adding PDF to IPFS' });
        }
      });
  }
  catch (error) {
      console.error('Error generating PDF:', error);
      res.status(500).send('Error generating PDF');
    }

})




//GET -  Send the Generated pdf TO THE client
app.get('/fetch-pdf',async (req,res) =>{
    console.log('fetch pdf log');
    res.sendFile(`${__dirname}/result.pdf`)
    
})

//MongoDb For Save Transaction Data Into Db
// Connection URL
//For Local Db
const url = 'mongodb://127.0.0.1:27017';
//For Cloud Atlas Db
//const url =`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.lw3ikvg.mongodb.net/`;
// Database Name
const dbName = process.env.DB_NAME;

// Collection Name
const collectionName = process.env.DB_COLLECTION_NAME;

// Middleware to parse JSON body
app.use(express.json());
// Endpoint to retrieve data by unique ID
app.get('/getdata/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Connect to MongoDB
    const client = await MongoClient.connect(url);
    console.log('Connected to MongoDB');
    const db = client.db(dbName);

    // Select the collection
    const collection = db.collection(collectionName);
    console.log('Fetching data for ID:', id);
    const result = await collection.findOne({ uniqueId: id });

    // Close the MongoDB connection
    client.close();
    console.log('Disconnected from MongoDB');

    // Check if data exists
    if (!result) {
      console.log('Data not found for ID:', id);
      return res.status(404).json({ error: 'Data not found' });
    }

    // Log the retrieved data
    console.log('Retrieved data:', result);

    // Return the data
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});




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
// Fetch PDF and send email with attachment
app.post('/send-email', async (req, res) => {
  try {
    const { pdfdata, senderEmail } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'developingpurpose2222@gmail.com',
        pass: 'zmpyxdnylkkqlozt',
      },
    });

    // Define the email options
    const mailOptions = {
      from: 'developingpurpose2222@gmail.com',
      to: senderEmail,
      subject: 'Email with PDF attachment',
      text: 'Please find attached PDF file.',
      attachments: [
        {
          filename: 'Test.pdf',
          content: pdfdata,
        },
      ],
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
});

app.listen(port, () => console.log(`listen on port ${port}`))

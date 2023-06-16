const express = require('express');
// const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors= require('cors');
const bodyParser = require('body-parser');

const {certificateDoc} = require('./documents');


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//POST - Generating pdf and fetching the data
app.post('/create-pdf',async (req,res)=>{
    const { firstname, lastname, program, cgpa, dateofgraduation } = req.body;
    let temp = certificateDoc({ firstname, lastname, program, cgpa, dateofgraduation}).toString()
    //let temp = certificateDoc(req.body.state).toString()
    console.log(temp)
    console.log('create pdf log');
    pdf.create(temp,{}).toFile('result.pdf',(err)=>{
        if(err){
            res.send(Promise.reject())
            debugger
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


app.listen(port, () => console.log(`listen on port ${port}`))
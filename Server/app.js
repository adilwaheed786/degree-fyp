require("dotenv").config();
const express =require('express');
const app =express();
const cors =require('cors');
const db =require('./db/conn');
const PORT = 4002;

//middleware
app.use(express.json());
app.use(cors());

// app.get("/", (req,res) => {
//     res.status(200).json("Server start")
// })

app.listen(PORT,()=>{
    console.log(`Server Start at Port No :${PORT}`)
})
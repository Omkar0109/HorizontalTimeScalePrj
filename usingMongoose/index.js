const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel =require ('./Models/data')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/sample_data')

// app.get('/get',(req,res)=>{
//     TodoModel.find()
//     .then(result => res.json(result.machine_status))
//     .catch(err => console.log(err))
     
// })

app.get('/get', async (req, res) => {
    try {
        // Use Mongoose's find method to retrieve all documents from the 'data' collection
        const data = await TodoModel.find();

        // Send the retrieved data as JSON response
        res.json(data);
    } catch (error) {
        // If an error occurs, send an error response
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.listen(3002,()=>{
    console.log("Server is Running")
})
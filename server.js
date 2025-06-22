const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoutes')
const app = express();

//connect mongoDb 

mongoose.connect('mongodb://localhost:27017/me-crud',{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('MongoDB connected')) 
.catch((err) => console.log('MongoDB connection error: ', err)); 


// middleware 

app.use(bodyParser.urlencoded({ extended: true })); 
app.set('view engine', 'ejs'); 
app.use(express.static('views')); 


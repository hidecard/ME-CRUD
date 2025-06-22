const express = require('express'); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 
const userRoutes = require('./routes/userRoutes'); 
const app = express(); 
  
// MongoDB connection 
mongoose.connect('mongodb://localhost:27017/me-crud', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}) 
  .then(() => console.log('MongoDB connected')) 
  .catch((err) => console.log('MongoDB connection error: ', err)); 
  
// Middlewares 
app.use(bodyParser.urlencoded({ extended: true })); 
app.set('view engine', 'ejs'); 
app.use(express.static('views')); 
  
// Routes 
app.use('/', userRoutes); 
  
// Start server 
const PORT = 3000; 
app.listen(PORT, () => { 
  console.log(`Server running on http://localhost:${PORT}`); 
}); 
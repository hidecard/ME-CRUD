const express = require('express'); 
const User = require('../models/userModel'); 
const router = express.Router(); 

// for data get 

router.get('/',async(req,res)=>{
    try { 
    const users = await User.find(); 
    res.render('home', { users }); 
  } catch (err) { 
    console.error(err); 
    res.send('Error fetching users'); 
  }
})

// for post data

router.post('/add' ,async (req , res)=>{
    const { name, email, age } = req.body;
    const user = new User({ name, email, age });
    try { 
    await user.save(); 
    res.redirect('/'); 
    } catch (err) { 
    console.error(err); 
    res.send('Error adding user'); 
  } 
})

// get data for edit
router.get('/edit/:id', async (req, res) => { 
  const user = await User.findById(req.params.id); 
  res.render('edit', { user }); 
}); 

// for update data

router.post('/edit/:id', async (req, res) => { 
  const { name, email, age } = req.body; 
  try { 
    await User.findByIdAndUpdate(req.params.id, { name, email, age }); 
    res.redirect('/'); 
  } catch (err) { 
    console.error(err); 
    res.send('Error updating user'); 
  } 
}); 

// for delete data 

router.get('/delete/:id', async (req, res) => { 
  try { 
    await User.findByIdAndDelete(req.params.id); 
    res.redirect('/'); 
  } catch (err) { 
    console.error(err); 
    res.send('Error deleting user'); 
  } 
}); 

module.exports = router; 
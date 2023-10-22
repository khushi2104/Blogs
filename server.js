const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const blogsRoute = require('./routes/blogs');
const path= require('path');
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());
app.use('/api/blogs', blogsRoute);
// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/blogs-db",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connection successful")
}).catch((e)=>{
    console.log(e);
})
// Routes




// Start the server
const staticPath = path.join(__dirname, "../pages");
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.send("Yess");
})

app.post('/CreateBlog',async (req, res) => {
    try {
      const { usertoken } = req.body;
      console.log(req.body);
      let note = await Blogs.create(req.body);
  
      res.status(201).json({ success: true, message: 'Blog post created successfully', savedBlog });

    } catch (error) {
      console.error('Error creating note:', error);
      res.status(500).json({ success: false, error: 'Failed to create note.' });
    }
  })
  
  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


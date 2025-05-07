 const express = require('express');
 const app = express()


 app.use(express.json()) // Middleware to parse JSON bodies

//  Rounting with Express

// First one 
app.get('/students-read',(req, res)=>{
    res.send('Helo From student read')
})

// Second Post 

app.post('/students-create',(req, res)=>{
    res.send("Helo from student Create ");
    
})

// Sever running on port 8000
const PORT = 8000; // Port number

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

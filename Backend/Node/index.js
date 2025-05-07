const express = require("express");
const mongoose = require("mongoose"); // Importing mongoose for MongoDB connection
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
// Middleware
app.use(express.urlencoded({ extended: false }));

//  Connect MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/mongoDB-students")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("Error from MongoDB connection", err);
  });

//   create a Schema

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
},{timestamps:true});

// Use this schema for model | model name always captial first letter

const Students = mongoose.model("students", studentSchema);

//  Rounting with Express

// First one
app.get("/students-read", (req, res) => {
  res.send("Helo From student read");
});

// Second Post

app.post("/students-create", async (req, res) => {
  //   res.send("Helo from student Create ");
  const body = req.body;
  if (!body || !body.name || !body.email) {
    return res.status(400).json({ msg: "All field are required...." });
  }

  const result = await Students.create({
    name: body.name,
    email: body.email,
  });
  console.log("result", result);
  return res.status(201).json({ msg: "success" });
});

// Sever running on port 8000
const PORT = 8000; // Port number

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

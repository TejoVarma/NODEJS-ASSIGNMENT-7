const express = require('express');
const mongoose = require("mongoose");
const app = express();
const port = 8080
const studentRouter = require("../src/routes/student");

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// your code goes here

mongoose.connect("mongodb://localhost/SchoolDB")
.then((res)=>console.log("connected to DB"));

app.use('/api', studentRouter);

app.listen(port, () => console.log(`App listening on port ${port}!`))

// module.exports = app; 
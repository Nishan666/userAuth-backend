const express = require("express");
const authRoute = require("./routes/authRoute");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require('mongoose')
// defining the port
const PORT = 5000 || process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());

//main route
app.use("/",authRoute)

mongoose
.connect(process.env.db)
.then(()=>console.log("Sucessfully connected to mongodb"))
.catch((err)=>{console.log(err)})

app.listen(PORT,()=>console.log(`Listening to port ${PORT}`));
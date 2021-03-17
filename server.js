// importing files

// import express from "express";
// import dotenv from "dotenv";
// import morgan from "morgan";
// import colors from "colors";
const path = require("path")
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");

const connectDB = require('./congif/DB');


const transections = require('./routes/transections');
//calling db fuction
connectDB();


// config file

dotenv.config({path:'./congif/config.env'});

//initialise

const app = express();

//Routing 

// app.get('/',(req,res) => res.status(200).send('Hello this is from backend server'));


//middleware
app.use(express.json());
app.use('/api/v1/transections',transections);

// if(process.env.NODE_ENV === "production"){
//     app.use(express.static('client/build'));

//     app.get("*",(req,res)=>res.sendFile(path.resolve(__dirname,"client","build","index.html")));
// }

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//port config

const PORT = process.env.PORT || 8080;

const NODE_ENV = process.env.NODE_ENV;

app.listen(PORT,console.log(`this server is runing ${NODE_ENV} and listening to ${PORT}`.blue.bold));
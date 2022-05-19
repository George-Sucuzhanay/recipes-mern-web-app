const moongoose = require("mongoose")
const express = require("express")
const { default: mongoose } = require("mongoose")

let MONGODB_URL = process.env.PROD_MONGODB || process.env.MONGODB_URL || 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.z7zi6.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URL, 
    {
        useUnifiedTopology: true, 
        useNewUrlParser: true
    })
    .then(() => {
        console.log("Successfully connected to MongoDB")
    })
    .catch((e) => {
        console.error("Connection error", e.message)
    })

const db = mongoose.connection

module.exports = db


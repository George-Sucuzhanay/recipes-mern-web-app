const moongoose = require("mongoose")
const express = require("express")
const { default: mongoose } = require("mongoose")

require("dotenv").config()
let MONGODB_URL = process.env.PROD_MONGODB || process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/recipieDB"


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


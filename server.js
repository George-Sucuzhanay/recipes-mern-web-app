const app = require("./app.js")
const db = require("./db")
const path = require("path")
const express = require("express")

const PORT = process.env.PORT || 3000

if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/client/build")))
    app.get("*", (req,res) => {
        res.sendFile(path.join(__dirname, "client", "build" , "index.html"))
    })
}else{
    app.get("/" , (req,res) => {
        res.send("Api running")
    })
}

db.on("error", console.error.bind(console, "MongoDB connection error"))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
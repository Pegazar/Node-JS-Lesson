const express = require("express");
const app = express();

const fs = require("fs");
let rawdata = fs.readFileSync('data.json');

let data = JSON.parse(rawdata)

app.get("/",(req,res)=> {
    console.log(req)
    res.send("Hello Users")
})

app.get("/users", (req,res) => {
    res.json(data)
})

app.listen(8080,() => {
    console.log("Server loading...")
})

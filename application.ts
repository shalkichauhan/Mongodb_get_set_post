// make express API end point
// make HTML to serve at the root
//make mongo db database code to access data base
// make a file to receive all function calls and manuplate the data 


import {callingJSONdataOnServerSide} from "./manplate";

const express = require('express')
const app = express();

const path = require('path')
const pathJoin = path.join(__dirname,'/public')

app.use(express.static(pathJoin))
app.use(express.json());

app.post('/details',(req:any,res:any)=>{
    let receivedJSONdataOnServerSide = req.body.sendJSONdataToServerSide;

    callingJSONdataOnServerSide(receivedJSONdataOnServerSide)

})



app.listen(3000,()=>{
    console.log("Listening!")
})
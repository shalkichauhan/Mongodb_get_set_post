import { receiveUserData, RequestData} from "./manplate";

const express = require('express')
const app = express();

const path = require('path');
const pathjoin= path.join(__dirname,'/public')

app.use(express.static(pathjoin))
app.use(express.json());

app.post('/details',(req:RequestData,res:any)=>{
const myUserdata = req.body.email
    receiveUserData(req.body.email)

   console.log(" The User Data is :", myUserdata )
    res.send({
        message:" Successfully received!"
    })
})


app.listen(3000,()=>{
    console.log(" server is running!")
});


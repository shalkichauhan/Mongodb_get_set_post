import { receiveUserData, RequestData} from "./manplate";

const express = require('express')
const app = express();

const path = require('path');
const pathjoin= path.join(__dirname,'/public')

app.use(express.static(pathjoin))
app.use(express.json());

app.post('/details',async (req:RequestData,res:any)=>{
const myUserdata = req.body.email
    const dataToPrint = await receiveUserData(req.body.email)

   console.log(" The User Data is :", myUserdata )

    console.log(" The object that I created today ", dataToPrint)
    if(typeof dataToPrint === "string")
        res.send({message: 'user not found'})
    else{

        res.send({
            firstname:dataToPrint.firstName,
            lastName:dataToPrint.lastName,
            email:dataToPrint.email,
            teamID:dataToPrint.teamID
        })
    }
})


app.listen(3000,()=>{
    console.log(" server is running!")
});


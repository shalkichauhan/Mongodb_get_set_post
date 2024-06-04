import { receiveUserData, RequestData} from "./manplate";
import {DataToPrint} from "./types";

const express = require('express')
const app = express();

const path = require('path');
const pathjoin= path.join(__dirname,'/public')

app.use(express.static(pathjoin))
app.use(express.json());

app.post('/details',async (req:RequestData,res:any)=>{
const myUserdata = req.body.email
    myUserdata.trim();

    const arr:string[]= myUserdata.split(',')


    const dataToPrint :DataToPrint[] | string = await receiveUserData(arr)


    //console.log(" The object that I created today ", dataToPrint)
    if(typeof dataToPrint === "string")
        res.send({message: 'user not found'})
    else{



        res.send()



    }


})


app.listen(3000,()=>{
    console.log(" server is running!")
});

// const str= dffhg,shfhrjuhfr,hsdhufd,edhfda
//let arr = []
// arr.push(str.slice())'
// const arr = str.split()
//
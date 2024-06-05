// import {getUserData} from "./mongodbData";
// import {DataToPrint, UserObject} from "./types";
//
// export type RequestData = {
//     body:{
//      email:string,
// } }
//
// export async function receiveUserData(emails:string[]){
//
//
//         const userData:UserObject[] = await getUserData(emails)
//
//     console.log('-----',userData)
//
//     if(userData.length!==0)
//
//         return extractData(userData)
// //
// else{
//     return 'user not found'
//     }
//
// }
//
//
//  function extractData(userData):DataToPrint[]{
//    // console.log(userData, " This is my userData that has 2 objects in an array")
// let ArrayObject = [];
//
// let printingWHoleData;
//
// for(let value in userData){
//     printingWHoleData ={
//         firstName: userData[value].properties.profile.name.first,
//         lastName: userData[value].properties.profile.name.last,
//         email: userData[value].email,
//         teamID: userData[value].properties._tid
//
//     }
//     ArrayObject.push(printingWHoleData)
// }
//
//  return ArrayObject
//
// }

import {getUserDataForMongobdChecks} from "./mongodbData";
import {DataToSend, UserObject} from "./types";


export async function getDataFromEndPointsInApplicationFile(receiveDataEnteredByUser: string[]) {

    const userObjectData: UserObject[] | string = await getUserDataForMongobdChecks(receiveDataEnteredByUser)

    const myDataReceivedFromExtrachDataFromUserObj = extractDataFromUserObject(userObjectData)
     console.log(myDataReceivedFromExtrachDataFromUserObj)


}


function extractDataFromUserObject(data): DataToSend[] | string {
    let dataObj = {
        name: '',
        _tid: ''
    }
let arrayOfInfo=[]

if (typeof (data) === 'string') {
    return " Email doesn't exist "

}
//
for (let i = 0; i < data.length; i++) {
    dataObj.name = data[i].properties.profile.name.first
    dataObj._tid = data[i].properties._tid
    arrayOfInfo.push(dataObj)
}
    return arrayOfInfo


}
import {getUserData} from "./mongodbData";

export type RequestData = {
    body:{
     email:string,
} }

export async function receiveUserData(email:string){

  const userData =  await getUserData(email)

    extractData(userData)

}


async function extractData(userData){

console.log("The first name is :", userData[0].properties.profile.name.first)
console.log("The last name is :", userData[0].properties.profile.name.last)

}

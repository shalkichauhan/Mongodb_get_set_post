import {getUserData} from "./mongodbData";

export type RequestData = {
    body:{
     email:string,
} }

export async function receiveUserData(email:string){

  const userData =  await getUserData(email)

    return extractData(userData)

}


async function extractData(userData){

    return {
        firstName : userData[0].properties.profile.name.first,
        lastName : userData[0].properties.profile.name.last,
        email: userData[0].email,
        teamID : userData[0].properties._tid
    };



}

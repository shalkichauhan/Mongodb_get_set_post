import {getUserData} from "./mongodbData";

export type RequestData = {
    body:{
     email:string,
} }

export async function receiveUserData(email:string){


        const userData = await getUserData(email)
    console.log('user data--??',userData)
    if(userData.length!==0)

        return extractData(userData)
//
else{
    return 'user not found'
    }

}


async function extractData(userData){

    return {
        firstName : userData[0].properties.profile.name.first,
        lastName : userData[0].properties.profile.name.last,
        email: userData[0].email,
        teamID : userData[0].properties._tid
    };



}

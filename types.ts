// //all our types
const ObjectId = require('mongodb')
//
//
type Properties= {
    platformManaged:boolean,
    _tid:string,
    inviteSource:string,
    profile:Profile

}
type Profile=
    {
    isComplete:boolean
    hasI18nBeenSet:boolean,
    name:Name

}
type Name={
    first:string,
    middle?:string,
    last:string
}
//
//
//
export type UserObject  = Array< {
    _id : typeof ObjectId,
    status:string,
    properties: Properties,
    roles:Array<string>,
    resetTokens:[],
    email:string,
    _originalEmail:string

}>
//
// export type DataToPrint = {
//     firstName:string,
//     lastName:string,
//     email:string,
//     teamID:string
// }
export type DataToSend={
    name:{
        first:string
    },
    _tid:string
}






export type Request={
    body:{
    sendDataToApplicationPage: string

}
}















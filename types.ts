//all our types
const ObjectId = require('mongodb')


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



export type UserObject  = {
    _id : typeof ObjectId,
    status:string,
    properties: Properties,
    roles:Array<string>,
    resetTokens:[],
    email:string,
    _originalEmail:string

}

export type DataToPrint = {
    firstname:string,
    lastName:string,
    email:string,
    teamID:string
}
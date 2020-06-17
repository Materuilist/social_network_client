export enum MessageType{
    Alert,
    Error,
    Info
}

export class Message{
    constructor(public message:string, public type:MessageType = MessageType.Info){}
}
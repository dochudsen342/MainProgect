import { Country, Currency } from "shared/const/comon";


export interface ProfileSchema {
    data?:Profile,
    isLoading:boolean,
    error?:string,
    readonly:boolean  
}


export interface Profile {
    firstname: string,
    lastname:string,
    age:number,
    currency:Currency,
    country:Country,
    city:string,
    username:string
}



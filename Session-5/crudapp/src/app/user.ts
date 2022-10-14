export class User{
    id:number;
    name:string;
    username:string;
    email:string;
    address:Address;
}

export class Address{
    street:string;
    suite:string;
    city:string;
    zipcode:string;
    geo:Geo;
}
export class Geo{
    lat:string;
    lng:string;
}

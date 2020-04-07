import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class User{
   constructor(
    public id:string,
    public email:string,
    public login:string
    ) {}
}
export class Meetroom{
  constructor(
    public id:string,
    public name:string,
    public location:string
  ){}
}
export class Reservation{
  constructor(
    public id:string,
    public datetime:string,
    public duration:string,
    public users:User[],
    public meetroom:Meetroom,
  ) {}
}


@Injectable({
  providedIn: 'root'
})


export class HttpClientService {

  constructor(private httpClient:HttpClient) { }

  getReservations(){
     return this.httpClient.get<Reservation[]>('http://localhost:8080/calendar');
  }
}



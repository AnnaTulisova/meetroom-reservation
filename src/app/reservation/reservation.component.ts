import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private httpClientService:HttpClientService) { }

  reservations:string[];
  users:string[];

  ngOnInit() {
    console.log(sessionStorage.getItem('token'));
   // sessionStorage.getItem('username')
      this.httpClientService.getReservations().subscribe(
       response =>this.handleSuccessfulResponse(response),
      );
    }
  handleSuccessfulResponse(response)
  {
      this.reservations = response;
  }

}

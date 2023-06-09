import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Event } from './event'; // assuming you have an Event model in your Angular app

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private baseUrl = 'https://workwaveback.azurewebsites.net'; 

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/events`);
  }

  getEventsInRange(start: string, end: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/events/${start}/${end}`);
  }

  addEvent(body: any) {
    return this.http.post("https://workwaveback.azurewebsites.net" + '/event', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

 /* updateEvent(event: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/event`, event);
  }*/
  updateEvent(body: any) {
    return this.http.put("https://workwaveback.azurewebsites.net" + '/event', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }


  removeEventById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/event/${id}`);
  }

  removeEvent(id: number) {
    return this.http.delete(`https://workwaveback.azurewebsites.net/event/${id}`, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  

}

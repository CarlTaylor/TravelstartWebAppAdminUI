import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Airline } from '../model/Airline';
import { Airplane } from '../model/Airplane';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  baseAirlineUrl = 'http://localhost:8080/admin/airline';
  baseAirplaneUrl = 'http://localhost:8080/admin/airplane';

  getAirlines() {
    return this.http.get<Airline[]>(this.baseAirlineUrl);
  }

  getAirlineById(id: number) {
    return this.http.get<Airline>(this.baseAirlineUrl + '/' + id);
  }

  saveAirline(airline: Airline) {
    return this.http.post(this.baseAirlineUrl, airline);
  }

  editAirline(airline: Airline) {
    return this.http.put(this.baseAirlineUrl + '/' + airline.id, airline);
  }

  deleteAirline(id: number) {
    return this.http.delete(this.baseAirlineUrl + '/' + id);
  }

  getAirplanes() {
    return this.http.get<Airplane[]>(this.baseAirplaneUrl);
  }

  getAirplaneById(id: number) {
    return this.http.get<Airplane>(this.baseAirplaneUrl + '/' + id);
  }

  saveAirplane(airplane: Airplane) {
    return this.http.post(this.baseAirplaneUrl, airplane);
  }

  editAirplane(airplane: Airplane) {
    return this.http.put(this.baseAirplaneUrl + '/' + airplane.id, airplane);
  }

  deleteAirplane(id: number) {
    return this.http.delete(this.baseAirplaneUrl + '/' + id);
  }
}

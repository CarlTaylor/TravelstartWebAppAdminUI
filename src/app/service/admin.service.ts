import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Airline} from '../model/Airline';
import {Airplane} from '../model/Airplane';
import {Airport} from '../model/Airport';
import {Extra} from '../model/Extra';
import {Taxes} from '../model/Taxes';
import {Class} from '../model/Class';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  baseAirlineUrl = 'http://localhost:8080/admin/airline';
  baseAirplaneUrl = 'http://localhost:8080/admin/airplane';
  baseAirportUrl = 'http://localhost:8080/admin/airport';
  baseClassUrl = 'http://localhost:8080/admin/class';
  baseExtraUrl = 'http://localhost:8080/admin/extra';
  baseTaxesUrl = 'http://localhost:8080/admin/taxes';

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

  getAirports() {
    return this.http.get<Airport[]>(this.baseAirportUrl);
  }

  getAirportById(id: number) {
    return this.http.get<Airport>(this.baseAirportUrl + '/' + id);
  }

  saveAirport(airport: Airport) {
    return this.http.post(this.baseAirportUrl, airport);
  }

  editAirport(airport: Airport) {
    return this.http.put(this.baseAirportUrl + '/' + airport.id, airport);
  }

  deleteAirport(id: number) {
    return this.http.delete(this.baseAirportUrl + '/' + id);
  }

  getExtras() {
    return this.http.get<Extra[]>(this.baseExtraUrl);
  }

  getExtraById(id: number) {
    return this.http.get<Extra>(this.baseExtraUrl + '/' + id);
  }

  saveExtra(extra: Extra) {
    return this.http.post(this.baseExtraUrl, extra);
  }

  editExtra(extra: Extra) {
    return this.http.put(this.baseExtraUrl + '/' + extra.id, extra);
  }

  deleteExtra(id: number) {
    return this.http.delete(this.baseExtraUrl + '/' + id);
  }

  getTaxes() {
    return this.http.get<Taxes[]>(this.baseTaxesUrl);
  }

  getTaxesById(id: number) {
    return this.http.get<Taxes>(this.baseTaxesUrl + '/' + id);
  }

  saveTaxes(taxes: Taxes) {
    return this.http.post(this.baseTaxesUrl, taxes);
  }

  editTaxes(taxes: Taxes) {
    return this.http.put(this.baseTaxesUrl + '/' + taxes.id, taxes);
  }

  deleteTaxes(id: number) {
    return this.http.delete(this.baseTaxesUrl + '/' + id);
  }

  getClasses() {
    return this.http.get<Class[]>(this.baseClassUrl);
  }

  getClassById(airplaneId: number, className: string) {
    return this.http.get<Class>(this.baseClassUrl + '/' + airplaneId + '/' + className);
  }

  saveClass(_class: Class) {
    return this.http.post(this.baseClassUrl, _class);
  }

  editClass(_class: Class) {
    return this.http.put(this.baseClassUrl + '/' + _class.classId.airplaneId + '/' + _class.classId.className, _class);
  }

  deleteClass(airplaneId: number, className: string) {
    return this.http.delete(this.baseClassUrl + '/' + airplaneId + '/' + className);
  }
}

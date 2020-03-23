import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfectionData } from '../interfaces/infection-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  endpoint1 = 'https://covid19.soficoop.com/country/tn';
  // https://github.com/javieraviles/covidAPI
  // https://novel-coronavirus-reports.netlify.com/
  endpoint2 = 'https://coronavirus-19-api.herokuapp.com/countries/TUNISIA';
  endpoint3 = 'https://covid19.mathdro.id/api';
  
  constructor(private http: HttpClient) { }

  getInfectionData(){
    return this.http.get(this.endpoint2);
  }
  getStatsData(){
    return this.http.get(this.endpoint1);
  }
}

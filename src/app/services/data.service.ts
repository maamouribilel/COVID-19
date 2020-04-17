import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  endpoint1 = 'https://covid19.soficoop.com/country/tn';
  // https://github.com/javieraviles/covidAPI
  // https://novel-coronavirus-reports.netlify.com/
  // ==========  https://github.com/NovelCOVID/API
  endpoint2 = 'https://coronavirus-19-api.herokuapp.com/countries/TUNISIA';
  endpoint3 = 'https://covid19.mathdro.id/api';
  worldEndpoint='https://coronavirus-19-api.herokuapp.com/countries';
  testEndpoint = 'https://corona.lmao.ninja/v2/countries';  

  
  constructor(private http: HttpClient) { }

  getInfectionData(){
    return this.http.get(this.endpoint2);
  }
  getStatsData(){
    return this.http.get(this.endpoint1);
  }
  getWorldInfo(){
    return this.http.get(this.testEndpoint);
  }
  getFlags(){
    return this.http.get(this.testEndpoint);
  }
}

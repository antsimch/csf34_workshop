import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = ''; 

  readonly apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apiKey);

    return this.http.get<Weather>(this.apiUrl, { params: params }); 
  }
}

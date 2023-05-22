import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherURL: string = "http://localhost:3000/weathers";
  constructor(private httpClient: HttpClient) { }

  search(city: any) {
    return this.httpClient.post<{ result: any }>(this.weatherURL, city);
  }
}

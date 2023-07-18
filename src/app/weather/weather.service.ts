import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'eab98340c0734a2a9e6205855231607';
  private apiUrl = 'https://api.weatherapi.com/v1/forecast.json'
  constructor(private http: HttpClient) { }

  getWeatherForecast(city: string): Observable<any> {
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${city}&days=5`;
    return this.http.get<any>(url);
  }
}

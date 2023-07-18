import { Component, OnInit } from '@angular/core';
import { WeatherModule } from './weather.module';
import { WeatherService } from './weather.service';

@Component({
  selector: 'pm-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  todayMainImg: string = '';
  todayTemp: string = '';
  todayDate: string = '';
  todaySituation: string = '';
  todaySituationTwo: string = '';
  todayLocation: string = '';
  todayDay: string = '';
  cityPic: string = '/assets/images/cityPic.jpg';

  tomrwName: string= '';
  tomrwIcon: string= '';
  tomrwTemp: string= '';

  thirdDayName: string= '';
  thirdDayIcon: string= '';
  thirdDayTemp: string= '';

  fourthDayName: string= '';
  fourthDayIcon: string= '';
  fourthDayTemp: string= '';

  fifthDayName: string= '';
  fifthDayIcon: string= '';
  fifthDayTemp: string= '';

  weatherForecast: any;
  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {
    this.getWeatherForecast('Chicago');
  }
  getWeatherForecast(city: string): void {
    this.weatherService.getWeatherForecast(city)
      .subscribe(data => {

        this.weatherForecast = data.forecast.forecastday;
        this.todayMainImg = data.forecast.forecastday[0].day.condition.icon;
        this.todayTemp = data.forecast.forecastday[0].day.avgtemp_f;
        this.todayDate = data.forecast.forecastday[0].date;
        this.todaySituation = data.forecast.forecastday[0].day.condition.text;
        this.todayLocation = data.forecast.forecastday.location;
        this.todaySituationTwo = data.forecast.forecastday[0].day.daily_chance_of_rain;
        this.todayDay = this.getDayName(this.todayDate);

        this.tomrwName = this.getDayName(data.forecast.forecastday[1].date);
        this.tomrwIcon = data.forecast.forecastday[1].day.condition.icon;
        this.tomrwTemp = data.forecast.forecastday[1].day.avgtemp_f;

        this.fourthDayName = this.getDayName(data.forecast.forecastday[3].date);
        this.fourthDayIcon = data.forecast.forecastday[3].day.condition.icon;
        this.fourthDayTemp = data.forecast.forecastday[3].day.avgtemp_f;

        this.thirdDayName = this.getDayName(data.forecast.forecastday[2].date);
        this.thirdDayIcon = data.forecast.forecastday[2].day.condition.icon;
        this.thirdDayTemp = data.forecast.forecastday[2].day.avgtemp_f;

        this.fifthDayName = this.getDayName(data.forecast.forecastday[4].date);
        this.fifthDayIcon = data.forecast.forecastday[4].day.condition.icon;
        this.fifthDayTemp = data.forecast.forecastday[4].day.avgtemp_f;

        console.log(this.weatherForecast);
      })
  }
  getDayName(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  }
}

import { Component, OnInit } from '@angular/core';
import { WeatherModule } from './weather.module';
import { WeatherService } from './weather.service';

@Component({
  selector: 'pm-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  location: string = '';
  locationName: string = '';
  locationRegion: string = '';

  todayMainImg: string = '';
  todayTemp: string = '';
  todayDate: string = '';
  todayTime: string = '';
  lat: string = '';
  lon: string = '';
  todaySituation: string = '';
  todaySituationTwo: string = '';
  todayLocation: string = '';
  todayDay: string = '';

  cityPic: string = '/assets/images/cityPic.jpg';
  uvPic: string = '/assets/images/uvIndex.jpg';
  windStatusPic: string ='/assets/images/wind.png';
  sunPic: string = '/assets/images/sun.png';
  humidityPic: string = '/assets/images/humidity.png';
  visibilityPic: string = '/assets/images/visibility.jpg';
  snowPic: string = '/assets/images/snow.png';

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

  uvIndex: string = '';
  windStatus: string = '';
  sunRise: string = '';
  sunSet: string = '';
  humidity: string ='';
  visibility: string = '';
  snowChance: string = '';

  weatherForecast: any;
  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {
    this.getWeatherForecast('Matadi');
  }
  OnClick(location: string){
    this.getWeatherForecast(location);
  }
  getWeatherForecast(city: string): void {
    this.weatherService.getWeatherForecast(city)
      .subscribe(data => {

        this.weatherForecast = data.forecast.forecastday;

        this.locationName = data.location.name;
        this.locationRegion = data.location.region;
        //this.locationRegion = JSON.stringify(data.location.localtime);
        console.log("location name: " + this.locationRegion);

        this.todayMainImg = data.forecast.forecastday[0].day.condition.icon;
        this.todayTemp = data.forecast.forecastday[0].day.avgtemp_f;
        this.todayDate = data.forecast.forecastday[0].date;
        this.todaySituation = data.forecast.forecastday[0].day.condition.text;
        this.todayLocation = data.forecast.forecastday.location;
        this.todaySituationTwo = data.forecast.forecastday[0].day.daily_chance_of_rain;
        this.todayDay = this.getDayName(this.todayDate);
        this.todayTime = new Date().toLocaleString('en-US', { timeZone: data.location.tz_id });
        this.todayTime = this.todayTime.substring(this.todayTime.indexOf(',') + 1).trim();

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

        this.uvIndex = data.forecast.forecastday[0].day.uv;
        this.windStatus = data.forecast.forecastday[0].day.maxwind_mph;
        this.sunRise = data.forecast.forecastday[0].astro.sunrise;
        this.sunSet = data.forecast.forecastday[0].astro.sunset;
        this.humidity = data.forecast.forecastday[0].day.avghumidity;
        this.visibility = data.forecast.forecastday[0].day.avgvis_miles;
        this.snowChance = data.forecast.forecastday[0].day.daily_chance_of_snow;

        this.lat = data.location.lat;
        this.lon = data.location.lon;
        //this.todayTime =  new Date().toLocaleTimeString('en-US', { timeZone: `Etc/GMT+${this.lon}` });
        

        console.log(this.weatherForecast);
      })
  }
  getDayName(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  }
}

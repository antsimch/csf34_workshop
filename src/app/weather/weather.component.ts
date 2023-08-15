import { Component, OnDestroy } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnDestroy {

  weather = {
    city: 'Singapore',
    description: '',
    temperature: 0,
    pressure: 0,
    humidity: 0
  };
  sub$!: Subscription;

  constructor(
    private weatherSvc: WeatherService) {}

  onSubmit(city: string) {
    console.log(city);

    this.sub$ = this.weatherSvc
      .getWeather(city)
      .subscribe((result: any) => {
          this.weather.city = result.name;
          this.weather.description = 
              `${result.weather[0].main}, 
              ${result.weather[0].description}`;
          this.weather.temperature = result.main.temp;
          this.weather.pressure = result.main.pressure;
          this.weather.humidity = result.main.humidity;
        }
    );
    
    console.log(this.weather);
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}

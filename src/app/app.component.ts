import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Forecast} from './components/model/forecast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pba-front';
  // forecasts = [
  //   {id: null,
  //     temp: 4.02,
  //     tempFeelsLike: -2.66,
  //     pressureAtSeaLevelhPa: 1025,
  //     pressureAtGroundLevelhPa: 1023,
  //     relativeHumidity: 66,
  //     weatherDescription: 'bezchmurnie',
  //     cloudiness: 0,
  //     windSpeed: 6.36,
  //     windDegree: 256,
  //     rainPrecipitation: null,
  //     snowPrecipitation: null,
  //     visibility: 10000,
  //     probabilityOfPrecipitation: 0.0,
  //     dateAndTime: '2021-03-06 12:00:00'},
  //   {id: null,
  //     temp: 4.02,
  //     tempFeelsLike: -2.66,
  //     pressureAtSeaLevelhPa: 1025,
  //     pressureAtGroundLevelhPa: 1023,
  //     relativeHumidity: 66,
  //     weatherDescription: 'bezchmurnie',
  //     cloudiness: 0,
  //     windSpeed: 6.36,
  //     windDegree: 256,
  //     rainPrecipitation: null,
  //     snowPrecipitation: null,
  //     visibility: 10000,
  //     probabilityOfPrecipitation: 0.0,
  //     dateAndTime: '2021-03-06 12:00:00'}
  // ];
  forecasts: Forecast[];

  constructor(private httpclient: HttpClient) {
  }

  ngOnInit(): void {
      this.httpclient.get<Forecast[]>( 'http://localhost:8080/forecast' )
        .subscribe(response => this.forecasts = response);
    }
  }






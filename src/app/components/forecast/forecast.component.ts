import { Component, OnInit } from '@angular/core';
import {Forecast} from '../model/forecast';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  forecasts: Forecast[];

  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
    this.httpclient.get<Forecast[]>( 'http://localhost:8080/forecast' )
      .subscribe(response => this.forecasts = response);
  }

}

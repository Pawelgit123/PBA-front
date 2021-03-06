export class Forecast{
  id?: any;
  temp: number;
  tempFeelsLike: number;
  pressureAtSeaLevelhPa: number;
  pressureAtGroundLevelhPa: number;
  relativeHumidity: number;
  weatherDescription: string;
  cloudiness: number;
  windSpeed: number;
  windDegree: number;
  rainPrecipitation?: number;
  snowPrecipitation?: number;
  visibility: number;
  probabilityOfPrecipitation: number;
  dateAndTime: string;
}

import { WeatherService, WeatherReport } from "./WeatherService";
import { MeasuringSystem } from "../common/MeasuringSystem";

export class OpenWeatherMapWeatherService implements WeatherService {
    constructor(private baseUrl = 'https://api.openweathermap.org/data/2.5/weather', private appId = '95f0ce6cf2f400dc7e0d4514e382ca59') {

    }

    requestWeatherReport(lat: number, lon: number, measuringSystem: MeasuringSystem): Promise<WeatherReport> {
        let url = `${this.baseUrl}?lat=${lat}&lon=${lon}&units=${measuringSystem}&APPID=${this.appId}`;
        return fetch(url, {
            method: 'GET'
        }).then(function(response: Response) {
            // the JSON should be in the weather report format
            return response.json();
        });
    }
}
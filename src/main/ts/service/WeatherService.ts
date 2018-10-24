import { MeasuringSystem } from "../common/MeasuringSystem";

export interface WeatherReport {
    main: {
        temp: number
    }, 
    wind: {
        speed: number, 
        deg: number
    }, 
    weather: {
        icon: string
    }[],
    name: string
}

export interface WeatherService {
    requestWeatherReport(lat: number, lon: number, measuringSystem: MeasuringSystem): Promise<WeatherReport>;
}
import { WeatherService } from "./WeatherService";
import { GeoLocationService } from "./GeoLocationService";

export interface Services {
    weatherService: WeatherService;
    geoLocationService: GeoLocationService;
}
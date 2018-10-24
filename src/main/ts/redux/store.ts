import { createStore, Store, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducer, { State } from "./reducers/index";
import { OpenWeatherMapWeatherService } from "../service/OpenWeatherMapWeatherService";
import { WeatherService } from "../service/WeatherService";
import { Services } from "../service/Services";
import { GeoLocationService } from "../service/GeoLocationService";
import { NavigatorGeoLocationService } from "../service/NavigatorGeoLocationService";

export interface SamplePageStore extends Store<State> {
    
}

const weatherService: WeatherService = new OpenWeatherMapWeatherService();
const geoLocationService: GeoLocationService = new NavigatorGeoLocationService();
const services: Services = {
    weatherService, 
    geoLocationService
}

let store: SamplePageStore = createStore(
    reducer, 
    // basic dependency injection
    applyMiddleware(thunk.withExtraArgument(services))
);

export default store;
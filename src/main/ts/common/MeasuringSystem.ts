import { TemperatureUnits } from "./TemperatureUnits";

export enum MeasuringSystem {
    Metric = 'metric', 
    Imperial = 'imperial'
}

export function getMeasuringSystem(temperatureUnits: TemperatureUnits): MeasuringSystem {
    switch(temperatureUnits) {
        case TemperatureUnits.Celcius:
            return MeasuringSystem.Metric;
        case TemperatureUnits.Farenheit:
            return MeasuringSystem.Imperial
    }
}
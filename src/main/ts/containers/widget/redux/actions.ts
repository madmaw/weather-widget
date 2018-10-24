import { Action, Dispatch } from "redux";
import { MeasuringSystem } from "../../../common/MeasuringSystem";
import { Services } from "../../../service/Services";
import { GeoLocation } from "../../../service/GeoLocationService";
import { WeatherReport } from "../../../service/WeatherService";
// NOTE: this is a break in our modularisation! Should be the local state, not the global one
import { State } from "../../../redux/reducers";

export enum ActionTypes {
    SetTitle = 'widget-set-title', 
    SetMeasuringSystem = 'widget-set-measuing-system',
    SetDisplayWind = 'widget-set-display-wind',
    SetProgressLoading = 'widget-progress-loading', 
    SetProgressSuccess = 'widget-progress-success', 
    SetProgressError = 'widget-progress-error'
}

export interface SetTitleAction extends Action<ActionTypes> {
    type: ActionTypes.SetTitle;
    title: string;
}

export interface SetDisplayWindAction extends Action<ActionTypes> {
    type: ActionTypes.SetDisplayWind;
    displayWind: boolean;
}

export interface SetMeasuringSystemAction extends Action<ActionTypes> {
    type: ActionTypes.SetMeasuringSystem;
    measuringSystem: MeasuringSystem;
}

export interface SetProgressLoadingAction extends Action<ActionTypes> {
    type: ActionTypes.SetProgressLoading;
}

export interface SetProgressSuccessAction extends Action<ActionTypes> {
    type: ActionTypes.SetProgressSuccess;
    wind?: string;
    location: string;
    temperature: string;
    iconId: string;
}

export interface SetProgressErrorAction extends Action<ActionTypes> {
    type: ActionTypes.SetProgressError;
    error?: any;
}

export type Action = SetTitleAction | SetMeasuringSystemAction | SetDisplayWindAction | SetProgressLoadingAction | SetProgressSuccessAction | SetProgressErrorAction;

export function setTitle(title: string): SetTitleAction {
    return {
        type: ActionTypes.SetTitle, 
        title: title
    };
}


export function setDisplayWind(displayWind: boolean): SetDisplayWindAction {
    return {
        type: ActionTypes.SetDisplayWind, 
        displayWind: displayWind
    }
}

export function setMeasuringSystem(measuringSystem: MeasuringSystem) {
    return function(dispatch: Dispatch, stateSource: () => State, services: Services) {
        dispatch({
            type: ActionTypes.SetMeasuringSystem, 
            measuringSystem: measuringSystem
        });
        // also want to reload the entire thing
        reloadWeatherReport(measuringSystem)(dispatch, stateSource, services);
    }
}

const windDirections = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
const gapWidthDegrees = 360/windDirections.length;

export function reloadWeatherReport(measuringSystem?: MeasuringSystem) {
    return function(dispatch: Dispatch, stateSource: () => State, services: Services ) {
        dispatch({
            type: ActionTypes.SetProgressLoading
        });
        services.geoLocationService.getGeoLocation().then(function(geoLocation: GeoLocation) {
            let state = stateSource();
            let actualMeasuringSystem = measuringSystem?measuringSystem:state.widgetState.measuringSystem;
            return services.weatherService.requestWeatherReport(geoLocation.latitude, geoLocation.longitude, actualMeasuringSystem).then(function(weatherReport: WeatherReport) {
                let units = actualMeasuringSystem == MeasuringSystem.Metric?'km/h':'mph';
                let speed = weatherReport.wind.speed;
                if( actualMeasuringSystem == MeasuringSystem.Metric ) {
                    // want to use km/h according to screenshot
                    speed *= 60*60/1000;
                }
                speed = Math.round(speed);
                let temperature = Math.round(weatherReport.main.temp);
                let angle = weatherReport.wind.deg + gapWidthDegrees/2;
                if( angle < 0 ) {
                    angle += 360;
                }
                let index = Math.floor(angle / gapWidthDegrees);
                let windowDirection = windDirections[index%windDirections.length];

                dispatch({
                    type: ActionTypes.SetProgressSuccess, 
                    wind: `${windowDirection} ${speed}${units}`, 
                    temperature: `${temperature}°`, 
                    location: weatherReport.name, 
                    iconId: weatherReport.weather[0].icon
                })
            });
        }).catch(function(e: any) {
            dispatch({
                type: ActionTypes.SetProgressError, 
                errror: e
            });
        });
    }
}
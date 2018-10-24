import { TemperatureUnits } from "../../../../common/TemperatureUnits";
import { Action, ActionTypes } from "../actions";
import { MeasuringSystem } from "../../../../common/MeasuringSystem";

export interface State {
    title: string;
    displayWind: boolean;
    measuringSystem: MeasuringSystem;
    progress: Progress;        
}

export enum ProgressType {
    None, 
    Loading, 
    Success, 
    Error
}

export interface ProgressNone {
    type: ProgressType.None;
}

export interface ProgressLoading {
    type: ProgressType.Loading;
}

export interface ProgressSuccess {
    type: ProgressType.Success;
    location: string;
    temperature: string;
    wind?: string; 
    iconId: string;
}

export interface ProgressError {
    type: ProgressType.Error;
    error?: any;
}

export type Progress = ProgressNone | ProgressLoading | ProgressSuccess | ProgressError;

export function createInitialState(title: string, displayWind: boolean, measuringSystem: MeasuringSystem): State {
    return {
        title: title, 
        displayWind: displayWind, 
        measuringSystem: measuringSystem,
        progress: {
            type: ProgressType.None
        }
    }
}
  
export default function(initialState: State) {
    return function(state = initialState, action: Action): State {
        switch(action.type) {
            case ActionTypes.SetTitle:
                return {
                    ...state, 
                    title: action.title
                };
            case ActionTypes.SetMeasuringSystem:
                // need to reload using the new units
                return {
                    ...state,
                    measuringSystem: action.measuringSystem,
                    progress: {
                        type: ProgressType.None
                    }
                }
            case ActionTypes.SetDisplayWind:
                return {
                    ...state,
                    displayWind: action.displayWind
                }
            case ActionTypes.SetProgressSuccess:
                return {
                    ...state, 
                    progress: {
                        type: ProgressType.Success, 
                        location: action.location, 
                        temperature: action.temperature, 
                        wind: action.wind, 
                        iconId: action.iconId
                    }
                }
            case ActionTypes.SetProgressError:
                return {
                    ...state, 
                    progress: {
                        type: ProgressType.Error, 
                        error: action.error
                    }
                }
            case ActionTypes.SetProgressLoading:
                return {
                    ...state, 
                    progress: {
                        type: ProgressType.Loading
                    }
                }
            default: 
                return state;
        }
    }
}
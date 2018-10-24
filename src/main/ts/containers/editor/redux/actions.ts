import { Action } from "redux";
import { TemperatureUnits } from "../../../common/TemperatureUnits";

export enum ActionTypes {
    SetTitle = 'editor-set-title', 
    SetDisplayWind = 'editor-display-wind', 
    SetTemperatureUnits = 'editor-set-temperature-units'
}

export interface SetTitleAction extends Action<ActionTypes> {
    type: ActionTypes.SetTitle;
    title: string;
}

export interface SetDisplayWindAction extends Action<ActionTypes> {
    type: ActionTypes.SetDisplayWind;
    displayWind: boolean;
}

export interface SetTemperatureUnitsAction extends Action<ActionTypes> {
    type: ActionTypes.SetTemperatureUnits;
    temperatureUnits: TemperatureUnits;
}

export type Action = 
    SetTitleAction | 
    SetDisplayWindAction | 
    SetTemperatureUnitsAction;


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

export function setTemperatureUnits(temperatureUnits: TemperatureUnits): SetTemperatureUnitsAction {
    return {
        type: ActionTypes.SetTemperatureUnits, 
        temperatureUnits: temperatureUnits
    }
}
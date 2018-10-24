import { TemperatureUnits } from "../../../../common/TemperatureUnits";
import { Action, ActionTypes } from "../actions";

export interface State {
    title: string;
    titleHint: string;
    displayWind: boolean;
    temperatureUnits: TemperatureUnits;  
}

export const initialState: State = {
    title: null, 
    titleHint: 'Title of widget',
    temperatureUnits: TemperatureUnits.Celcius, 
    displayWind: true
};

  
export default function(state = initialState, action: Action): State {
    switch(action.type) {
        case ActionTypes.SetTitle:
            return {
                ...state, 
                title: action.title
            };
        case ActionTypes.SetDisplayWind:
            return {
                ...state, 
                displayWind: action.displayWind
            };
        case ActionTypes.SetTemperatureUnits:
            return {
                ...state, 
                temperatureUnits: action.temperatureUnits
            }
        default: 
            return state;
    }
}
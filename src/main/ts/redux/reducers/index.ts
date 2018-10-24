import { combineReducers } from "redux";

import * as EditorReducers from "../../containers/editor/redux/reducers";
import * as WidgetReducers from "../../containers/widget/redux/reducers";
import { getMeasuringSystem } from "../../common/MeasuringSystem";
import { getFullTitle } from "../../containers/editor/redux/selectors";

export interface State {
    editorState: EditorReducers.State;
    widgetState: WidgetReducers.State;
}

let widgetInitialState = WidgetReducers.createInitialState(
    getFullTitle(EditorReducers.initialState), 
    EditorReducers.initialState.displayWind, 
    getMeasuringSystem(EditorReducers.initialState.temperatureUnits)
);

export default combineReducers({
    editorState: EditorReducers.default,
    // make sure our initial states are in sync
    widgetState: WidgetReducers.default(widgetInitialState)
}); 
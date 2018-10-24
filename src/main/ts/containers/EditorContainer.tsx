import { State } from "../redux/reducers";
import * as EditorComponent from "./editor/components"
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { TemperatureUnits } from "../common/TemperatureUnits";
import { Action } from "../redux/actions";
import { setTitle, setDisplayWind, setMeasuringSystem } from "./widget/redux/actions";
import { getFullTitle } from "./editor/redux/selectors";
import { getMeasuringSystem } from "../common/MeasuringSystem";


function mapStateToProps(state: State) {
    return EditorComponent.mapStateToProps(state.editorState);
}

// map editor actions to widget actions
function mapDispatchToProps(dispatch: Dispatch<Action>): EditorComponent.EditorComponentDispatchProps {
    let originalDispathProps = EditorComponent.mapDispatchToProps(dispatch);
    return {
        setTitle: (title: string) => {
            // thunk gives us access to the state, used to look up default title when null
            dispatch(function(dispatch: Dispatch<Action>, getState: () => State) {
                originalDispathProps.setTitle(title);
                // send to widget
                let fullTitle = getFullTitle(getState().editorState, title);
                dispatch(setTitle(fullTitle));    
            } as any);
            
        }, 
        setDisplayWind(displayWind: boolean) {
            originalDispathProps.setDisplayWind(displayWind);
            // send to widget
            dispatch(setDisplayWind(displayWind));
        }, 
        setTemperatureUnits(temperatureUnits: TemperatureUnits) {
            originalDispathProps.setTemperatureUnits(temperatureUnits);
            // send to widget
            dispatch(setMeasuringSystem(getMeasuringSystem(temperatureUnits)) as any);            
        }
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(EditorComponent.EditorComponent);
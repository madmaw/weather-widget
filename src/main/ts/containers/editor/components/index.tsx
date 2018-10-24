import * as React from "react";
import { State } from "../redux/reducers";
import { TemperatureUnits } from "../../../common/TemperatureUnits";
import { setTitle, setDisplayWind, setTemperatureUnits, Action } from "../redux/actions";
import { Dispatch } from "redux";


export interface EditorComponentDispatchProps {
    setTitle: (title: string) => void;
    setDisplayWind: (displayWind: boolean) => void;
    setTemperatureUnits: (temperatureUnits: TemperatureUnits) => void;
}

export interface EditorComponentStateProps {
    title: string;
    titleHint: string;
    displayWind: boolean;
    temperatureUnits: TemperatureUnits;
}

export type EditorComponentProps = EditorComponentDispatchProps & EditorComponentStateProps;

export function mapStateToProps(state: State): EditorComponentStateProps {
    return {
        title: state.title?state.title:'', 
        titleHint: state.titleHint,
        displayWind: state.displayWind, 
        temperatureUnits: state.temperatureUnits
    }
}

export function mapDispatchToProps(dispatch: Dispatch<Action>): EditorComponentDispatchProps {
    return {
        setTitle: (title: string) => {
            dispatch(setTitle(title));
        },
        setDisplayWind : (displayWind: boolean) => {
            dispatch(setDisplayWind(displayWind));
        },  
        setTemperatureUnits: (temperatureUnits: TemperatureUnits) => {
            dispatch(setTemperatureUnits(temperatureUnits));
        }    
    }
} 

export class EditorComponent extends React.Component<EditorComponentProps> {

    onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let title = e.currentTarget.value;
        this.props.setTitle(title);
    }

    onTemperatureUnitsChange = (temperatureUnits: TemperatureUnits) => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            this.props.setTemperatureUnits(temperatureUnits);
        };
    }

    onDisplayWindChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setDisplayWind(e.currentTarget.value === "true");
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12">Title</div> 
                    <div className="col-12">
                        <input type="text" className="form-control" placeholder={this.props.titleHint} value={this.props.title} onChange={this.onTitleChange}></input>
                    </div>                
                </div>
                <div className="row mt-3">
                    <div className="col-12">Temperature</div> 
                    <div className="col-12 col-sm-6">
                        <label className="form-check-label ml-4">
                            <input type="radio" className="form-check-input" value={TemperatureUnits.Celcius} onChange={this.onTemperatureUnitsChange(TemperatureUnits.Celcius)} checked={this.props.temperatureUnits == TemperatureUnits.Celcius}></input>
                            <span>°C</span>
                        </label>
                    </div>                
                    <div className="col-12 col-sm-6">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" value={TemperatureUnits.Farenheit} onChange={this.onTemperatureUnitsChange(TemperatureUnits.Farenheit)} checked={this.props.temperatureUnits == TemperatureUnits.Farenheit}></input>
                            <span>°F</span>
                        </label>
                    </div>                
                </div>
                <div className="row mt-3">
                    <div className="col-12">Wind</div> 
                    <div className="col-12 col-sm-6">
                        <label className="form-check-label ml-4">
                            <input type="radio" className="form-check-input" value="true" onChange={this.onDisplayWindChange} checked={this.props.displayWind}></input>
                            <span>On</span>
                        </label>
                    </div>                
                    <div className="col-12 col-sm-6">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" value="false" onChange={this.onDisplayWindChange} checked={!this.props.displayWind}></input>
                            <span>Off</span>
                        </label>
                    </div>                
                </div>
            </div>
        );
    }
}

/* not used
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(EditorComponent);
*/
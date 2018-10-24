import * as React from "react";
import { State, ProgressType } from "../redux/reducers";
import { Dispatch } from "redux";
import { Action, reloadWeatherReport } from "../redux/actions";


interface WidgetComponentStateProps {
    title: string;
    displayWind: boolean;
    error?: any;
    loading?: boolean;
    wind?: string;
    temperature?: string;
    location?: string;
    iconId?: string;
}

interface WidgetComponentDispatchProps {
    reloadWeatherReport: () => void;
}

export type WidgetComponentProps = WidgetComponentStateProps & WidgetComponentDispatchProps;

export function mapStateToProps(state: State): WidgetComponentStateProps {
    return {
        title: state.title, 
        displayWind: state.displayWind,
        error: state.progress.type == ProgressType.Error?state.progress.error:null, 
        loading: state.progress.type == ProgressType.Loading, 
        wind: state.progress.type == ProgressType.Success?state.progress.wind:null,
        temperature: state.progress.type == ProgressType.Success?state.progress.temperature:null,
        location: state.progress.type == ProgressType.Success?state.progress.location:null,
        iconId: state.progress.type == ProgressType.Success?state.progress.iconId:null
    }
}

export function mapDispatchToProps(dispatch: Dispatch<Action>): WidgetComponentDispatchProps {
    return {
        reloadWeatherReport: function() {
            dispatch(reloadWeatherReport() as any);
        }
    }
} 

export class WidgetComponent extends React.Component<WidgetComponentProps> {

    componentDidMount() {
        this.props.reloadWeatherReport();
    }

    render() {
        return (
            <div className="container p-2">
                <div className="row">
                    <div className="col-auto p-2 pl-5" style={{textTransform: 'uppercase'}}>{this.props.title}</div>  
                </div>     
                <div className="row justify-content-md-center">
                    {(()=> {
                        if( this.props.loading ) {
                            return (<i className="fa fa-spinner fa-pulse fa-3x fa-fw mt-3"></i>);
                        } else if( this.props.error ) {
                            return (<div className="col-auto alert alert-danger">
                                {this.props.error}
                                <button onClick={this.props.reloadWeatherReport}>Retry</button>
                            </div>);
                        } else if( this.props.temperature ) {
                            return (
                                <div className="col-auto">
                                    <div className="row">
                                        <div className="col-auto" hidden={this.props.iconId == null}>
                                            <img src={`http://openweathermap.org/img/w/${this.props.iconId}.png`} style={{width:'100px', height:'100px'}}/>
                                        </div>       
                                        <div className="col-auto">
                                            <div>{this.props.location}</div>
                                            <div><h2>{this.props.temperature}</h2></div>
                                            <div hidden={!this.props.displayWind}><small><b>Wind</b> {this.props.wind}</small></div>       
                                        </div>       
                                    </div>
                                </div>    
                            );
                        }
                    })()}                             
                </div>
            </div>
        );
    }
}
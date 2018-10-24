import * as React from "react";
import { connect } from "react-redux";
import { State } from "../redux/reducers";
import EditorContainer from "../containers/EditorContainer";
import WidgetContainer from "../containers/WidgetContainer";

interface SamplePageComponentProps {

}

function mapStateToProps(state: State): SamplePageComponentProps {
    return {
        
    }
}

class SamplePageComponent extends React.Component<SamplePageComponentProps> {

    render() {
        return (
            <div className="container mt-5 .bg-light">
                <div className="row  justify-content-md-center">
                    <div className="col-auto mr-5" style={{borderRight: '1px solid #666'}}>
                        <EditorContainer/>
                    </div> 
                    <div className="col-auto .bg-white shadow-lg" style={{minWidth: '25%', minHeight: '100px'}}>
                        <WidgetContainer/>
                    </div>                
                </div> 
            </div>
        );
    }
}


export default connect(
    mapStateToProps, 
    {
    }
)(SamplePageComponent);
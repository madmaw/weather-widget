import { State } from "../redux/reducers";
import * as WidgetComponent from "./widget/components"
import { connect } from "react-redux";



function mapStateToProps(state: State) {
    return WidgetComponent.mapStateToProps(state.widgetState);
}

export default connect(
    mapStateToProps, 
    // use it directly
    WidgetComponent.mapDispatchToProps
)(WidgetComponent.WidgetComponent);
import * as EditorActions from "../containers/editor/redux/actions";
import * as WidgetActions from "../containers/widget/redux/actions";

export type Action = EditorActions.Action | WidgetActions.Action;
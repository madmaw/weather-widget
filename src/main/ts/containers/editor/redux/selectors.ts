import { State } from "./reducers";

export function getFullTitle(state: State, title?: string) {
    return (title!==undefined?title:state.title) || state.titleHint;
}
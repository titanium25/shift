import { combineReducers } from "redux";
import toolReducer from './toolReducer';

export default combineReducers({
    tools: toolReducer,
})

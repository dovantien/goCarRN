import { combineReducers } from 'redux';

let navStage = {};
function navigatorReducer(state = navStage,action) {
    return state;
}

const AppReducer = combineReducers({
   navigatorReducer 
});

export default AppReducer;
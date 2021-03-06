import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import friendsReducer from "./friendsReducer";

let reducers = combineReducers({
    postData: profileReducer,
    dialogsData: dialogsReducer,
    friendsData: friendsReducer
});

let store = createStore(reducers);
window.store = store;
export default store;

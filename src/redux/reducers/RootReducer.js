import {combineReducers} from 'redux';
import cakeReducer from './cake/cakeReducer.js';
import iceCremReducer from './iceCream/iceCreamReducer.js';
import userReducer from './user/userReducer.js';

const RootReducer = combineReducers({
    cakeState: cakeReducer,
    iceCreamState: iceCremReducer,
    userState: userReducer
})

export default RootReducer
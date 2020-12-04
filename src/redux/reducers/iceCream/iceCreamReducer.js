import {BUY_ICE_CREAM} from '../../../constants/ActionTypes.js';

const initialState = {
    category: "Ice Cream",
    numOfIceCreams: 20
}

const iceCremReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - action.payload
        }
    
        default: return state
    }
}

export default iceCremReducer
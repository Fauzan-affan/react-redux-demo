import {BUY_ICE_CREAM} from '../../../constants/ActionTypes.js';

export const buyIceCream = (num = 1) => {
    return {
        type: BUY_ICE_CREAM,
        payload: num
    }
}
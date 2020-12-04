import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyCake } from '../../redux/actions'

function HookCakeContainer() {
    const numOfCake = useSelector(state => state.cakeState.numOfCakes)
    
    const dispatch = useDispatch()
    
    return (
        <div>
            <h1>Number of Cakes - {numOfCake} (Hooks)</h1>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HookCakeContainer

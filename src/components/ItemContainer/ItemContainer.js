import React from 'react'
import {connect} from 'react-redux'
import { buyCake, buyIceCream } from '../../redux/actions'

function ItemContainer({item, func}) {
    return (
        <div>
            <h1>State and Dispatch Based On Props</h1>
            <h3>Reduce 3 Items</h3>
            <p>{item.category} - {item.category === "Cake" ? item.numOfCakes : item.numOfIceCreams}</p>
            <button onClick={() => func(3)}>Buy Items</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cakeState : state.iceCreamState

    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunc = ownProps.cake ?
    num => dispatch(buyCake(num)) : num => dispatch(buyIceCream(num))

    return {
        func: dispatchFunc
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)

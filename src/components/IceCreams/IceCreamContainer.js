import React from 'react'
import {connect} from 'react-redux'
import {buyIceCream} from '../../redux/actions'

function IceCreamContainer({numOfIceCream, buyIceCream}) {
    return (
        <div>
            <h1>Number of Ice Cream - {numOfIceCream}</h1>
            <button onClick={buyIceCream}>Buy Ice Cream</button>
        </div>
    )
}

//  Buat ngambil state di reducer
const mapStateToProps = (state) => {
    return {
        numOfIceCream: state.iceCreamState.numOfIceCream
    }
}

// Buat nembak action
const mapDispacthToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(IceCreamContainer)

import React from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../../redux/actions'

function CakeContainer(props) {
    return (
        <div>
            <h1>Number of Cakes - {props.numOfCakes}</h1>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

//  Buat ngambil state di reducer
const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cakeState.numOfCakes
    }
}

// Buat nembak action
const mapDispacthToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(CakeContainer)

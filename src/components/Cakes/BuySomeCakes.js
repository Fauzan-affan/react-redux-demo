import React from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../../redux/actions'

function BuySomeCakes({numOfCakes, buyCake}) {
    const [number, setNumber] = React.useState(1)
    return (
        <div>
            <h1>Number of Cakes - {numOfCakes} (Payload)</h1>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={() => buyCake(number)}>Buy Cake</button>
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
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(BuySomeCakes)

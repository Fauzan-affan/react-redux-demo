import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../../redux/api/userApi.js'

function UserContainer({userData, fetchUsers}) {
    
    React.useEffect(() => {
        fetchUsers()
    }, [])
    
    return (
        <>
            {userData.loading ? <h2>Loading user datas ...</h2> : ""}
            {userData.error ? <h2>{userData.error}</h2> : ""}
            {
                userData && userData.users ? (
                    <div>
                        <h1>List of Users From Jsonplaceholder</h1>
                        {userData.users.map(user => <p>{user.name}</p>)}
                    </div>
                ) : ""
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.userState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)

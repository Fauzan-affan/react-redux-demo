import axios from 'axios'
import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure
} from '../actions/user/userAction.js'

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            const users = res.data
            dispatch(fetchUserSuccess(users))
        })
        .catch(err => {
            const msgError = err.message
            dispatch(fetchUserFailure(msgError))
        })
    }
}
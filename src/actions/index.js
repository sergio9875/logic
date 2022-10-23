import {GET_JOBS, GET_USERS, JOBS_ERROR, USERS_ERROR} from "./types";
import {httpGetRequest} from '../api/requestAPI'

export const getUsers = () => async dispatch => {

    const url = 'https://jsonplaceholder.typicode.com/users'

    httpGetRequest(url).then((res) => {
        dispatch({
            type: GET_USERS,
            payload: res
        })
    }).catch((error) => {

        dispatch({
            type: USERS_ERROR,
            payload: console.log(error),
        })
    })


}

export const getJobs = () => async dispatch => {
    const url = 'http://localhost:5000/user'

    httpGetRequest(url).then((res) => {
        dispatch({
            type: GET_JOBS,
            payload: res
        })
    }).catch((error) => {

        dispatch({
            type: JOBS_ERROR,
            payload: console.log(error),
        })
    })

}
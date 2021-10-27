import axios from 'axios'
import { baseUrl } from '../shared/baseUrl'
import * as ActionTypes from './actiontypes'


export const loadingServices = () => ({
    type: ActionTypes.SERVICES_LOADING
})

export const servicesFailed = (error) => ({
    type: ActionTypes.SERVICES_FAILED,
    error: error
})

export const fetchOneOff = (services) => {
    return ({
        type: ActionTypes.FETCH_SERVICES,
        payload: services
    })
}




export const fetchServices = () => async (dispatch) => {

    dispatch(loadingServices(true))

    const response = await axios.get(baseUrl + 'service/names');
    const services = response.data.data;
    return dispatch(fetchOneOff(services))
}
import * as ActionTypes from './actiontypes'


export const loadingOneOff = () => ({
    type: ActionTypes.ONEOFF_LOADING
})

export const oneOffFailed = (error) => ({
    type: ActionTypes.oneOffFailed,
    error: error
})

export const fetchOneOff = (projects) => ({
    type: ActionTypes.FETCH_ONEOFF,
    projects: projects
})
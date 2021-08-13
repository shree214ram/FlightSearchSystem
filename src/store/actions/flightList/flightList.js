import axios from 'axios';
import _ from 'lodash';
import axiosInstance from '../../../utils/axios'
import {  SetFlightsSearchAction } from '../../../store/actions/flightSearch/flightSearch'

export const fetchingFlightListAll = "fetchingFlightListAll";
export const fetchingFlightListSuccess = "fetchingFlightListSuccess";
export const fetchingFlightListFailure = "fetchingFlightListFailure";

export const AllFlightAction = (data) => {
    return (
        {
            type: fetchingFlightListAll,
        }
    )
}

export const AllFlightActionSuccess = (data) => {
    return (
        {
            type: fetchingFlightListSuccess,
            data: { ...data }
        }
    )
}

export const AllFlightActionFailure = (data) => {
    return (
        {
            type: fetchingFlightListFailure,
        }
    )
}


export const CompleteAllFlightAction = (token) => {
    const { page, pageSize, listType, searchValues } = token;
    let searchString = ""
    for (let key in searchValues) {
        searchString += `&${key}=${searchValues[key]}`
    }
    let url = `/flights?page=${page}&limit=${pageSize}${searchString}`
    if (listType === true || listType === false) {
        url = url + (listType === true ? `&status=1` : `&status=0`)
    }
    return (dispatch) => {
        dispatch(AllFlightAction());
        return axiosInstance.get(url, { headers: {} })
            .then((data) => {
                if (data.status === 200) {
                    const result = _.get(data, 'data', null)
                    let resultData = _.get(result, 'results', null)
                    result['data'] = resultData;
                    dispatch(SetFlightsSearchAction(searchValues));
                    dispatch(AllFlightActionSuccess(result));
                } else {
                    dispatch(AllFlightActionFailure());
                }

            }).catch((data) => {
                dispatch(AllFlightActionFailure());
            })
    }
}
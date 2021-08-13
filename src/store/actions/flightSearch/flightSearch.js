import axios from 'axios';
import _ from 'lodash';
import axiosInstance from '../../../utils/axios'
import { commonBadRequestMessage, commonFetchSuccessMessage } from '../../../constants/common-constants'
import { getToken, getUser, sessionHeader, getUnitListHeader } from "../../../utils/session";

export const flightSearch = "flightSearch";
export const flightSearchWarning = "flightSearchWarning";
export const flightSearchFailure = "flightSearchFailure";
export const setFlightsSearch = "setFlightsSearch";
export const hideMessage = "hideMessage";
export const resetFlightsSearchData = "resetFlightsSearchData";
export const setFlightsSearchData = "setFlightsSearchData";



export const FlightsSearchAction = (data) => {
    return (
        {
            type: flightSearch,
        }
    )
}

export const FlightsSearchActionWarning = (data) => {
    return (
        {
            type: flightSearchWarning,
            data: { ...data }
        }
    )
}
export const FlightsSearchActionFailure = (data) => {
    return (
        {
            type: flightSearchFailure,
            data: { ...data }
        }
    )
}


export const HideMessageAction = () => {
    return (
        {
            type: hideMessage
        }
    )
}

export const CompleteFlightsSearchAction = (payload, values) => {
    return (dispatch) => {
        dispatch(FlightsSearchAction());
    }
}

export const ResetFlightsSearchAction = () => {
    return (
        {
            type: resetFlightsSearchData,
        }
    )
}

export const SetFlightsSearchAction = (data) => {
    return (
        {
            type: setFlightsSearchData,
            data: { ...data }
        }
    )
}



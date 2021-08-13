import _ from 'lodash';
import {
    flightSearch,
    flightSearchWarning,
    flightSearchFailure,
    hideMessage,
    resetFlightsSearchData,
    setFlightsSearchData
} from '../../actions/flightSearch/flightSearch'
import { alertMessageType, commonBadRequestMessage } from '../../../constants/common-constants'
import {source_destination_cities} from '../../../constants/source_destination_cities'
export const firstState = {
    flightSearch: {
        status: null,
        statusType: null,
        statusMessage: null,
        source_destination_cities,
        values:{
            source_city: "",
            destination_city: "",
            travel_date: "",
            return_date: "",
        }
    }
}

export const FlightsSearchReducers = (state = firstState.flightSearch, action) => {
    let statusMessage = _.get(action, 'data.data.message', commonBadRequestMessage)
    let values = _.get(action, 'data', null)

    switch (action.type) {
        case (flightSearch): {
            return ({
                ...state,
                status: 'fetching',
            })
        }
        
        case (flightSearchWarning): {
            return ({
                ...state,
                status: 'failure',
                statusType: alertMessageType["warning"],
                statusMessage: statusMessage,
                values: values
            })
        }
        case (flightSearchFailure): {
            return ({
                ...state,
                status: 'failure',
                statusType: alertMessageType["error"],
                statusMessage: statusMessage,
                values: values
            })
        }
        case (setFlightsSearchData): {
            return ({
                ...state,
                // status: 'success',
                // statusType: alertMessageType["success"],
                // statusMessage: statusMessage,
                values: values,
            })
        }
        case (hideMessage):
            return ({
                ...state,
                status: null,
                statusType: null,
                statusMessage: null,
            })
        case (resetFlightsSearchData):
            return ({
                ...state,
                status: null,
                statusType: null,
                statusMessage: null,
            })
        default: {
            return ({
                ...state
            })
        }
    }
}

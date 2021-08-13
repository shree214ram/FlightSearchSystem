import { fetchingFlightListAll, fetchingFlightListSuccess, fetchingFlightListFailure } from '../../actions/flightList/flightList'


export const firstState = {
    flightAll: {
        status: null,
        data: {},
    }
}


export const FlightListAllReducer = (state = firstState, action) => {
    switch(action.type) {
        case(fetchingFlightListAll): {
            return({
                ...state.flightAll,
                status: 'fetching',
            })
        }
        case(fetchingFlightListSuccess): {
            return({
                ...state.flightAll,
                data: {...action.data},
                status: 'success'
            })
        }
        case(fetchingFlightListFailure): {
            return({
                ...state.flightsAll,
                status: 'failure'
            })
        }
        default: {
            return({
                ...state.flightsAll
            })
        }
    }
}

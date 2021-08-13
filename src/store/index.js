import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { FlightListAllReducer } from './reducers/flightListReducer/flightList';
import { FlightsSearchReducers } from './reducers/flightSearch/flightSearch';

const rootReducer = combineReducers({
  FlightListAllReducer,
  FlightsSearchReducers
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), composeWithDevTools())
);

export default store;

import React from 'react'
import _ from 'lodash';
import FlightsSearchForm from './SearchFlights'
import {  pageSize, timeToRedirect } from '../../../constants/common-constants'

import { connect } from 'react-redux';
import { CompleteAllFlightAction } from '../../../store/actions/flightList/flightList';
import {  ResetFlightsSearchAction } from '../../../store/actions/flightSearch/flightSearch'

class FlightsSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentWillReceiveProps(newProps) {
    const flightSearchData = newProps.flightSearchData
    if (flightSearchData.statusType &&
      flightSearchData.statusType !== "" &&
      flightSearchData.statusType === "success" &&
      flightSearchData.statusMessage &&
      flightSearchData.statusMessage !== "") {
      setTimeout(() => {
        this.props.hideMessage();
      }, timeToRedirect,
      );
    }
  }
  convertIntoDBFields = (value) => {
    const newValue = value.replace(/_([a-z])/g, function (g) { return g[1].toUpperCase(); });
    return newValue;
  }
  
  saveFlightsSearch = (values) => {
    this.props.flightSearch({ page: 0, pageSize: 10, listType: "all", searchValues: values });
  }
  
  
  toastClosedFn = () => {
    this.props.resetFlightsSearch()
  }
  render() {
    return (<React.Fragment>
      <FlightsSearchForm
        saveFlightsSearch={this.saveFlightsSearch}
        handleChangeStep={this.handleChangeStep}
        handleSpecificStep={this.handleSpecificStep}
        flightSearchData={this.props.flightSearchData}
        vehicleData={this.props.vehicleData}
        toastClosedFn={this.toastClosedFn}
        sourceDestinationCities={this.props.flightSearchData.source_destination_cities}
      />
    </React.Fragment>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    flightSearch: (params, values) => dispatch(CompleteAllFlightAction(params)),
    resetFlightsSearch: () => dispatch(ResetFlightsSearchAction()),
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    flightSearchData: state.FlightsSearchReducers
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightsSearch);

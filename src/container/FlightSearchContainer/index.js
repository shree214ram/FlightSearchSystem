import React from 'react';
import FlightSearchComponent from '../../components/Flights/FlightSearch/index'
import Loader from '../../components/CommonComponents/Loader'
import _ from 'lodash';
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

const styles = (theme) => ({
  content: {
    overflow: 'auto',
  }
});

class FlightSearch extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      vehicle: {
        vehicleId: null,
        vehicleList: null,
        VehicleRegNumber: null
      }
    }
  }

  render() {
    const loaderStyle = { height: '100%', width: '100%', display: 'flex', alignItems: 'center' }
    // const LoaderOn = this.props.vehicleList.status === "fetching";
    // if (LoaderOn) {
    //   return (<div style={loaderStyle}>
    //     <Loader />
    //   </div>)
    // }

    return (
      <div>
        <FlightSearchComponent vehicleData={this.state.vehicle} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    // vehicleList: state.VehicleListAllReducer,
    // FlightSearchData: state.FlightSearchReducers
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(FlightSearch));
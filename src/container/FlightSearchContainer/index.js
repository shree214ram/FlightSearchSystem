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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(FlightSearch));
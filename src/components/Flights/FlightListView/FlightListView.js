import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { CompleteAllFlightAction } from '../../../store/actions/flightList/flightList';
import { useLocation } from 'react-router-dom';
import EnhancedTable from './Ui/Table';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: '#fff',
    borderRadius: '10px',
    paddingBottom: '63px',
  },
  tableHead: {
    '& > *': {
      borderBottom: '2px solid #6c7aa2',
    },
  },
  flightType: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '66px',
    width: '90px',
    padding: '15px',
    textAlign: 'center',
    backgroundColor: '#f1f5f7',
    borderRadius: '10px',
    marginRight: '15px',
  },
  title: {
    flexGrow: 1,
    textTransform: 'capitalize',
  },
  flightName: {
    display: 'flex',
    cursor: 'pointer',
  },
  flightNameDetails: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },
});

const dataStructureMaker = (data, condition) => {
  let flightList = [];
  if (data.length) {
    data.forEach((element) => {
      let flightObject = {};
      flightObject['id'] = element.id;
      flightObject['flight_number'] = element.flight_number;
      flightObject['airline_name'] = element.airline_name;
      flightObject['departure_arrival_time'] = element.departure_arrival_time;
      flightObject['duration'] = element.duration;
      flightObject['no_of_stops'] = element.no_of_stops;
      flightObject['price'] = element.price;
      flightList.push(flightObject);
    });
  }

  return flightList;
};
function FlightListView(props) {
  const location = useLocation().pathname;
  const classes = useStyles();
  const history = useHistory();
  const [allFlightData, setFlightdata] = useState({ data: [] });
  const [totalRows, setTotalRows] = useState(0);
  const [sort, setSortValue] = useState('');

  const handleChange = (event) => {
    setSortValue(event.target.value);
  };
  const listTypeGetter = () => {
    const customFlag = location.split('/');
    if (customFlag.includes('assigned')) {
      return true;
    } else if (customFlag.includes('unassigned')) {
      return false;
    } else {
      return 'all';
    }
  };
  const paginationHandler = (payload) => {
    let { page, pageSize } = payload;
    props.fetchAction({
      page: page,
      pageSize: pageSize,
      listType: listTypeGetter(),
      searchValues: props.FlightsSearchReducers.values
    });
  };

  useEffect(() => {
    if (_.isEmpty(props.FlightListAllReducer) && !allFlightData.data.data) {
      props.fetchAction({ page: 0, pageSize: 10, listType: listTypeGetter(), searchValues: props.FlightsSearchReducers.values });
    } else if (
      !_.isEmpty(props.FlightListAllReducer.data) &&
      _.get(props.FlightListAllReducer, 'status') === 'success' &&
      !allFlightData.data.data
    ) {
      let structuredData = dataStructureMaker(
        props.FlightListAllReducer.data.data,
        'null'
      );
      let totalRowCount = _.get(props, 'FlightListAllReducer.data.totalRows[0].count', 0);
      setFlightdata(() => ({ data: [...structuredData] }));
      setTotalRows(totalRowCount);
    }
  }, [props.FlightListAllReducer.data]);

  let flightArray = [...allFlightData.data];

  const headCells = [
    {
      id: 'flight_number',
      numeric: false,
      disablePadding: false,
      label: 'Flight Number'
    },
    {
      id: 'airline_name',
      numeric: false,
      disablePadding: false,
      label: 'Airline Name',
    },
    {
      id: 'departure_arrival_time',
      numeric: false,
      disablePadding: false,
      label: 'Departure and Arrival Time',
    },
    {
      id: 'duration',
      numeric: false,
      disablePadding: false,
      label: 'Duration',
    },
    {
      id: 'no_of_stops',
      numeric: false,
      disablePadding: false,
      label: 'No. Of Stops'
    },
    {
      id: 'price',
      numeric: false,
      disablePadding: false,
      label: 'Price',
    },
    {
      id: 'detail',
      numeric: false,
      disablePadding: false,
      label: 'Detail',
    }
  ];
  let loaderOn = props.FlightListAllReducer.status === 'fetching';
  return (
    <React.Fragment>
      <EnhancedTable
        headCells={headCells}
        loaderOn={loaderOn}
        data={flightArray}
        typedData={sort}
        paginationHandler={paginationHandler}
        totalRows={totalRows}
        clicked={(id) => {
          history.push(`/detailFlight/${id}`);
        }}
      ></EnhancedTable>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAction: (params) => dispatch(CompleteAllFlightAction(params)),
  };
};
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightListView);

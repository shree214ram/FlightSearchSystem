import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import '../../components/Flights/FlightListView/Styles/styles.css';
import FlightListView from '../../components/Flights/FlightListView/FlightListView';
import FlightSearch from '../FlightSearchContainer/index';


import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  useRouteMatch,
} from 'react-router-dom';

import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

const routesObj = [
  { path: '/all' },
  { path: '/assigned' },
  { path: '/unassigned' },
];
const styles = theme => ({
  //access denied
  content2: {
    overflow: 'auto',
  },
  newClass: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #e2e2e2',
    background: '#e1e1e1',
    color: '#000',
  },
  root2: {
    color: '#000',
    marginRight: '0.5em',
    fontSize: '2.2em',
  },
});

class FlightList extends React.Component {

  render() {
    return (
      <div>
        <FlightListComponent />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return {
    flight: state.FlightLoginReducers,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(FlightList));


//FlightListComponent
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    width: '100%',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(4),
    width: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  rootHeaderButtons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  titleBar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '10px',
  },
  pageTitle: {
    fontSize: 14,
  },
  title: {
    flexGrow: 1,
  },
  titleBarAction: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& > *': {
      marginLeft: '20px',
    },
  },
  tableDataFilter: {
    display: 'flex',
    '& > *': {
      marginRight: '10px',
    },
  },
  radio: {
    '&$checked': {
      color: '#FFF',
      backgroundColor: '#000',
    },
  },
  removeHover: {
    '&:hover': {
      color: 'white',
    },
  },
}));

export function FlightListComponent() {
  const classes = useStyles();
  const { filter } = useParams();
  let { path, url } = useRouteMatch();

  return (
    <main className={classes.content}>
      <div className={classes.titleBar}>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Flights List
        </Typography>
        <div className={classes.titleBarAction}>
        </div>
      </div>

      <div className={classes.tableDataFilter}>
        {/* <FilterButton classes={classes} filter={filter} path={path} url={url} /> */}
        <FlightSearch/>
      </div>
    
      <FlightListView />
      
    </main>
  );
}

export function FilterButton(props) {
  return (
    <div className="vehicleListFilter">
      <Typography className={props.classes.tableDataFilter}>
        <NavLink
          component="a"
          activeClassName="active"
          underline="none"
          to={`${props.url}/all`}
        >
           Source City 
        </NavLink>
        <NavLink
          component="a"
          activeClassName="active"
          underline="none"
          to={`${props.url}/assigned`}
        >
          Destination City
        </NavLink>
        <NavLink
          component="a"
          activeClassName="active"
          underline="none"
          to={`${props.url}/unassigned`}
        >
          Travel Date
        </NavLink>
        <NavLink
          component="a"
          activeClassName="active"
          underline="none"
          to={`${props.url}/unassigned`}
        >
          Return Date
        </NavLink>
      </Typography>
    </div>
  );
}

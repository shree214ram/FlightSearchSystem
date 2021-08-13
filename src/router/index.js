import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../container/HeaderContainer';
import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import { Container, CssBaseline } from '@material-ui/core';
import FlightList from '../container/flightList/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    height: '100vh',
    overflow: 'auto',
    width: '100%',
    position: 'relative',
    background: '#f1f5f7',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    height: '100%',
  },
}));

const App = (props) => {
  const [open, setOpen] = React.useState(true);

  const classes = useStyles();

  const handleDrawerToggle = () => {
    if (open) {
      setOpen(false);
      return;
    }
    setOpen(true);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <BrowserRouter>
        <ToastContainer autoClose={2000} />
        <Navigation
          open={open}
          handleDrawerClose={handleDrawerToggle}
        />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Header open={open} handleDrawerOpen={handleDrawerToggle} />
            <Switch>
              <Route  path="/" component={FlightList} />
            </Switch>
          </Container>
        </main>
      </BrowserRouter>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};
const mapStateToProps = (state) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from "react"
import PropTypes from "prop-types"
import withStyles from "@material-ui/core/styles/withStyles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Paper from "@material-ui/core/Paper"
import RegistrationForm from "./Components/SearchFlights"
import Loader from "../../CommonComponents/Loader"
import Toast from '../../CommonComponents/Toast/Toast';

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginBottom: theme.spacing(8),
      padding: theme.spacing(3)
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paperAlert: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
    },
    flexDirection: "column",
    alignItems: "center",
  }
})

const App = ({ classes, saveFlightsSearch, flightSearchData, sourceDestinationCities, handleChangeStep, toastClosedFn, handleSpecificStep }) => {
  return (
    <div className="App">
      <CssBaseline />
      <main className={classes.layout}>
        {flightSearchData.statusType &&
          flightSearchData.statusType !== "" &&
          flightSearchData.statusMessage &&
          flightSearchData.statusMessage !== "" &&
          <div className={classes.paperAlert}>
            <Toast toastClosedFn={toastClosedFn} statusType={flightSearchData.statusType} statusMessage={flightSearchData.statusMessage} />
          </div>
        }
        <Paper className={classes.paper}>

          {flightSearchData.status === "fetching" ?
            <div><Loader /></div>
            :
            <RegistrationForm
              saveFlightsSearch={saveFlightsSearch}
              handleChangeStep={handleChangeStep}
              handleSpecificStep={handleSpecificStep}
              sourceDestinationCities={sourceDestinationCities}
              values={(flightSearchData.status === "success" && flightSearchData.values) ? flightSearchData.values : null}
              vehicleId={(flightSearchData.vehicleId) ? flightSearchData.vehicleId : null}
              currentStep={(flightSearchData.currentStep) ? flightSearchData.currentStep : 0}
            />
          }
        </Paper>
      </main>
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)

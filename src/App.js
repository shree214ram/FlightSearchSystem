import React from 'react';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import 'typeface-roboto';
import Router from './router';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from './utils/privateRoute';
import PublicRoute from './utils/publicRoute';

function App(props) {
  return (
    <StylesProvider injectFirst>
		<BrowserRouter>
			<Switch>
				<PublicRoute path="/" component={Router} />
				<PrivateRoute path="/" component={Router} />
			</Switch>
		</BrowserRouter>
    </StylesProvider>
  );
}

export default App


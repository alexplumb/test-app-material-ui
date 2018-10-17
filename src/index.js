import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { MuiThemeProvider, createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Theme } from './theme';
import { AppContainer } from './containers/AppContainer';
import rootSaga from './sagas';
import reducers from './reducers';
import configureStore from './store/configureStore';

const sagaMiddleware = createSagaMiddleware();
const history = createHistory();

const middleware = [applyMiddleware(routerMiddleware(history), sagaMiddleware)];

const rootReducer = combineReducers({
  ...reducers,
  router: routerReducer,
});

const store = configureStore(rootReducer, middleware);

sagaMiddleware.run(rootSaga);

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={Theme}>
          <CssBaseline />
          <Route path="/" component={AppContainer} />
        </MuiThemeProvider>
      </JssProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
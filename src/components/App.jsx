import React from 'react';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import moment from 'moment-timezone';
import { withStyles } from '@material-ui/core/styles';
import { NavContainer } from '../containers/NavContainer';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  flexWrap: {
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    [theme.breakpoints.up('md')]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  appBarSpacer: theme.mixins.toolbar,
});

class _App extends React.Component {
  state ={
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error, info) {
    this.setState({
      error,
      errorInfo: info,
    });
  }

  render() {
    const { classes, location } = this.props;

    return (
      <div className={classes.root}>
        <MuiPickersUtilsProvider utils={MomentUtils} moment={moment}>
          <NavContainer location={location} />

          <main className={classes.layout} role="main">
            <div className={classes.appBarSpacer} />
          </main>
        </MuiPickersUtilsProvider>
      </div>
    );
  }
}

export const App = withStyles(styles)(_App);

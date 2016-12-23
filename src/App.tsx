import { Component } from 'react';
import Layout from './Layout';
import { IStore } from "./store/store.interface";
import { connect } from 'react-redux';
import { IInjectedProps } from "react-router";
import { StartupConfiguration } from './AppStartup';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

var injectTapEventPlugin = require('react-tap-event-plugin');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

interface IApp extends IStoreProps, IOwnProps, IActionProps {
}

interface IStoreProps {
  loading: boolean;
}

interface IOwnProps extends IInjectedProps {
}

interface IActionProps {
  actions?: {
  };
}

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "#2196F3",
    disabledColor: "#757575",
    accent1Color: "#EF5350",
  },
  appBar: {
    height: 50,
  },
});

class App extends Component<IApp, void> {

  componentDidMount() {
    StartupConfiguration();
  }

  render() {

    const {loading} = this.props;

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Layout loading={loading}>
          {this.props.children}
        </Layout>
      </MuiThemeProvider>
    );
  }
}


const mapStateToProps = (state: IStore, ownProps: IOwnProps): IStoreProps => {
  return {
    loading: state.ajaxCallsInProgress > 0
  }
}

export default connect(mapStateToProps)(App);

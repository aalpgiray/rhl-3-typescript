import { Component } from 'react';
import Layout from './Layout';
import { IStore } from "./store/store.interface";
import { connect } from 'react-redux';
import { IInjectedProps } from "react-router";
import { StartupConfiguration } from './AppStartup';

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

class App extends Component<IApp, void> {

  componentDidMount() {
    StartupConfiguration();
  }

  render() {

    const {loading} = this.props;

    return (
      <Layout loading={loading}>
        {this.props.children}
      </Layout>
    );
  }
}


const mapStateToProps = (state: IStore, ownProps: IOwnProps): IStoreProps => {
  return {
    loading: state.ajaxCallsInProgress > 0
  }
}

export default connect(mapStateToProps)(App);

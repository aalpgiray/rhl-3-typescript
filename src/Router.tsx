import { Component } from 'react';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory, Router } from 'react-router';
import { store } from './store/store';
import routes from './pages/routes';

const history = syncHistoryWithStore(browserHistory, store);

export default class ProjectRouter extends Component<any, any> {
    render() {
        return <Router history={history} routes={routes} key={Math.random()} />
    }
}
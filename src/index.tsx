import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import Router from './Router';
import { Provider } from 'react-redux';
import { store } from "./store/store";

import "../node_modules/toastr/build/toastr.min.css";
import '../node_modules/react-select/dist/react-select.css';

const rootEl = document.getElementById('root') || document.body;

ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
      <Router />
    </AppContainer>
  </Provider>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./Router', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextRouter = require('./Router').default;
    ReactDOM.render(
      <Provider store={store}>
        <AppContainer>
          <NextRouter />
        </AppContainer>
      </Provider>,
      rootEl
    );
  });
}

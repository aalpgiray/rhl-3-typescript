import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root.reducer';
import { IStore } from './store.interface';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from "redux-thunk";


/// for redux dev tool
interface IChromeWindow extends Window {
    devToolsExtension(): any
}

declare var window: IChromeWindow;


const configureStore = (initialState: IStore) => {
    const store = createStore<IStore>(
        rootReducer,
        initialState,
        compose<any>(
            applyMiddleware(thunk, reduxImmutableStateInvariant()),
            window.devToolsExtension ? window.devToolsExtension() : (f: any) => f
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/root.reducer.ts', () => {
            store.replaceReducer(require('../reducers/root.reducer.ts').default);
        });
    }

    return store;
}


export default configureStore;



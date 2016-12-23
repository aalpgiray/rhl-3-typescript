import configureStoreDev from "./configure.store.dev";
import configureStoreProd from "./configure.store.prod";

import { IStore } from './store.interface';

const initialState: IStore = { supervisors: [], villages: [], towns: [], cities: [], visits: [], courses: [], authors: [], ajaxCallsInProgress: 0 };

export let store: any;

if (process.env.NODE_ENV === 'production') {
  store = configureStoreProd(initialState);
} else {
  store = configureStoreDev(initialState);
}

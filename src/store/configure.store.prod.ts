import {createStore, applyMiddleware} from "redux";
import rootReducer from "../reducers/root.reducer";
import {IStore} from "./store.interface";
import thunk from "redux-thunk";

const configureStore = (initialState: IStore) => {
  const store = createStore<IStore>(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
  );
  return store;
}

export default configureStore;

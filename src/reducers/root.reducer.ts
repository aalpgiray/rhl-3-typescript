import {combineReducers} from 'redux';
import { IStoreDynamic, IStore } from '../store/store.interface';
import ReducersMapObject = Redux.ReducersMapObject;

import {CourseReducer as courses} from './course.reducer';
import {routerReducer as routing} from "react-router-redux";
import {AuthorReducer as authors} from "./author.reducer";
import {AjaxStatusReducer as ajaxCallsInProgress} from "./ajax.status.reducer";

interface IRouteStore extends IStoreDynamic,ReducersMapObject {
  routing: any;
}

const rootReducer: IRouteStore = {
  courses,
  authors,
  ajaxCallsInProgress,

  // this is for time machine to work with routes.
  routing
}

export default combineReducers<IStore>(rootReducer);

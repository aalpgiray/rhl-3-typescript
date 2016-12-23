import { combineReducers } from 'redux';
import { IStoreDynamic, IStore } from '../store/store.interface';
import ReducersMapObject = Redux.ReducersMapObject;

import { CourseReducer as courses } from './course.reducer';
import { routerReducer as routing } from "react-router-redux";
import { AuthorReducer as authors } from "./author.reducer";
import { VisitReducer as visits } from "./visit.reducer"
import { CitiesReducer as cities } from './visit.reducer';
import { TownsReducer as towns } from './visit.reducer';
import { VillagesReducer as villages } from './visit.reducer';
import { SupervisorsReducer as supervisors } from './visit.reducer';

import { AjaxStatusReducer as ajaxCallsInProgress } from "./ajax.status.reducer";

interface IRouteStore extends IStoreDynamic, ReducersMapObject {
  routing: any;
}

const rootReducer: IRouteStore = {
  visits,
  courses,
  authors,
  ajaxCallsInProgress,
  cities,
  towns,
  villages,
  supervisors,
  
  // this is for time machine to work with routes.
  routing
}

export default combineReducers<IStore>(rootReducer);

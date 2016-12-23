import { ILoadVisitsSuccess, ICreateVisitSuccess, IUpdateVisitSuccess, ILoadCitiesSuccess, ILoadTownsSuccess, ILoadVillagesSuccess, ILoadSupervisorSuccess } from '../actions/visit.actions';
import { Dictionary, KeyValuePair } from '../interfaces/common/object.interfaces';

export const ActionTypes = {
  LoadVisitsSuccess: "LOAD_VISITS_SUCCESS",
  CreateVisitSuccess: "CREATE_VISIT_SUCCESS",
  UpdateVisitSuccess: "UPDATE_VISIT_SUCCESS",
  DeleteVisit: "DELETE_VISIT",
  DeleteVisitSuccess: "DELETE_VISIT_SUCCESS",
  RollbackDeleteVisit: "ROLLBACK_DELETE_VISIT",
  LoadCitiesSuccess: "LOAD_CITIES_SUCCESS",
  LoadTownsSuccess: "LOAD_TOWNS_SUCCESS",
  LoadVillagesSuccess: "LOAD_VILLAGES_SUCCESS",
  SearchSupervisorSuccess: "LOAD_SUPERVISOR_SUCCESS",
}

export interface IVisitAction extends ILoadVisitsSuccess, ICreateVisitSuccess, IUpdateVisitSuccess {
}

export interface ICityAction extends ILoadCitiesSuccess {
}

export interface ITownAction extends ILoadTownsSuccess {
}

export interface IVillageAction extends ILoadVillagesSuccess {
}

export interface ISupervisorAction extends ILoadSupervisorSuccess {
}

export interface IVisit {
  idVisit: string,
  visitedCityRef: number,
  visitedCityName: string,
  visitedTownRef: number,
  visitedTownName: string,
  visitedVillageRef: number,
  visitedVillageName: string,
  visitedFirmRef: string,
  visitedFirmName: string,
  idUserRef: string,
  userName: string,
  visitTime: Date,
  visitGroup: string,
  visitDetails: string
}

const defaultState: IVisit[] = [];

export const VisitReducer = (state = defaultState, action: IVisitAction): IVisit[] => {
  switch (action.type) {
    case ActionTypes.LoadVisitsSuccess:
      return [...action.visits];
    case ActionTypes.CreateVisitSuccess:
      return [
        ...state,
        Object.assign({}, action.visit)
      ]
    case ActionTypes.UpdateVisitSuccess:
      return [
        ...state.filter(c => c.idVisit !== action.visit.idVisit),
        Object.assign({}, action.visit)
      ]
    case ActionTypes.DeleteVisit:
      return [
        ...state.filter(c => c.idVisit != action.visit.idVisit)
      ]
    case ActionTypes.RollbackDeleteVisit:
      return [
        ...state,
        Object.assign({}, action.visit)
      ]
    default:
      return state;
  }
}

const defaultCities: KeyValuePair<string, string>[] = [];

export const CitiesReducer = (state = defaultCities, action: ICityAction) => {
  switch (action.type) {
    case ActionTypes.LoadCitiesSuccess:
      return [...action.cities];
    default:
      return state;
  }
}

const defaultTowns: KeyValuePair<string, string>[] = [];

export const TownsReducer = (state = defaultTowns, action: ITownAction) => {
  switch (action.type) {
    case ActionTypes.LoadTownsSuccess:
      return [...action.towns];
    default:
      return state;
  }
}

const defaultVillages: KeyValuePair<string, string>[] = [];

export const VillagesReducer = (state = defaultTowns, action: IVillageAction) => {
  switch (action.type) {
    case ActionTypes.LoadVillagesSuccess:
      return [...action.villages];
    default:
      return state;
  }
}

const defaultSupervisors: KeyValuePair<string, string>[] = [];

export const SupervisorsReducer = (state = defaultTowns, action: ISupervisorAction) => {
  switch (action.type) {
    case ActionTypes.SearchSupervisorSuccess:
      return [...action.supervisors];
    default:
      return state;
  }
}
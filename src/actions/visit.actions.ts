// import mockVisitApi from '../api/mockVisitApi';
import { Dispatch, Action } from 'redux';
import { ActionTypes, IVisit } from '../reducers/visit.reducer';
import { beginAjaxCall, ajaxCallFailed } from "./ajax.status.actions";
import { VisitApi } from '../api/visitApi';
import { KeyValuePair } from '../interfaces/common/object.interfaces';

export function loadCities(): any {
  return (dispatch: Dispatch<any>) => {
    dispatch(beginAjaxCall())
    return VisitApi.GetCities().then((cities) => {
      dispatch(loadCitiesSuccess(cities))
    }).catch(e => {
      dispatch(ajaxCallFailed(e));
      throw (e);
    })
  };
}

export function loadCitiesSuccess(cities: KeyValuePair<string, string>[]): ILoadCitiesSuccess {
  return {
    type: ActionTypes.LoadCitiesSuccess,
    cities
  }
}

export function loadTowns(idCity: string): any {
  return (dispatch: Dispatch<any>) => {
    dispatch(beginAjaxCall())
    return VisitApi.GetTowns(idCity).then((towns) => {
      dispatch(loadTownsSuccess(towns))
    }).catch(e => {
      dispatch(ajaxCallFailed(e));
      throw (e);
    })
  };
}

export function loadTownsSuccess(towns: KeyValuePair<string, string>[]): ILoadTownsSuccess {
  return {
    type: ActionTypes.LoadTownsSuccess,
    towns
  }
}

export function loadVillages(idTown: string): any {
  return (dispatch: Dispatch<any>) => {
    dispatch(beginAjaxCall())
    return VisitApi.GetVillages(idTown).then((villages) => {
      dispatch(loadVillagesSuccess(villages))
    }).catch(e => {
      dispatch(ajaxCallFailed(e));
      throw (e);
    })
  };
}

export function loadVillagesSuccess(villages: KeyValuePair<string, string>[]): ILoadVillagesSuccess {
  return {
    type: ActionTypes.LoadVillagesSuccess,
    villages
  }
}

export function searchSupervisors(searchTerm: string): any {
  return (dispatch: Dispatch<any>) => {
    dispatch(beginAjaxCall())
    return VisitApi.SearchSupervisor(searchTerm).then((supervisors) => {
      dispatch(searchSupervisorsSuccess(supervisors))
    }).catch(e => {
      dispatch(ajaxCallFailed(e));
      throw (e);
    })
  };
}

function searchSupervisorsSuccess(supervisors: KeyValuePair<string, string>[]): ILoadSupervisorSuccess {
  return {
    type: ActionTypes.SearchSupervisorSuccess,
    supervisors
  }
}


export function loadVisits(): any {
  return (dispatch: Dispatch<any>) => {
    dispatch(beginAjaxCall())
    return VisitApi.GetVisits().then((visits: IVisit[]) => {
      dispatch(loadVisitsSuccess(visits))
    }).catch(e => {
      dispatch(ajaxCallFailed(e));
      throw (e);
    }
      )
  };
}

export function saveVisit(visit: IVisit): any {
  return (dispatch: Dispatch<any>) => {
    dispatch(beginAjaxCall())
    return VisitApi.saveVisit(visit).then((savedVisit: IVisit) => {
      visit.idVisit ?
        dispatch(updateVisitSuccess(savedVisit)) :
        dispatch(createVisitSuccess(savedVisit));
    }).catch(e => {
      dispatch(ajaxCallFailed(e));
      throw (e);
    }
      )
  };
}

export function deleteVisit(visit: IVisit): any {
  return (dispatch: Dispatch<any>) => {
    dispatch(beginAjaxCall());
    dispatch(deleteVisitClicked(visit));
    return VisitApi.deleteVisit(visit).then(() => {
      dispatch(deleteVisitSuccess(visit));
    }).catch(e => {
      dispatch(ajaxCallFailed(e));
      throw (e);
    })
  };
}

export interface IUpdateVisitSuccess extends Action {
  visit: IVisit;
}


export function updateVisitSuccess(visit: IVisit): IUpdateVisitSuccess {
  return {
    type: ActionTypes.UpdateVisitSuccess,
    visit
  }
}

export function deleteVisitClicked(visit: IVisit): IUpdateVisitSuccess {
  return {
    type: ActionTypes.DeleteVisit,
    visit
  }
}

export function rollbackDeleteVisit(visit: IVisit): IUpdateVisitSuccess {
  return {
    type: ActionTypes.RollbackDeleteVisit,
    visit
  }
}

export function deleteVisitSuccess(visit: IVisit): IUpdateVisitSuccess {
  return {
    type: ActionTypes.DeleteVisitSuccess,
    visit
  }
}

export interface ICreateVisitSuccess extends Action {
  visit: IVisit;
}

export function createVisitSuccess(visit: IVisit): ICreateVisitSuccess {
  return {
    type: ActionTypes.CreateVisitSuccess,
    visit
  }
}

export interface ILoadVisitsSuccess extends Action {
  visits: IVisit[];
}

export interface ILoadCitiesSuccess extends Action {
  cities: KeyValuePair<string, string>[];
}

export interface ILoadTownsSuccess extends Action {
  towns: KeyValuePair<string, string>[];
}

export interface ILoadVillagesSuccess extends Action {
  villages: KeyValuePair<string, string>[];
}

export interface ILoadSupervisorSuccess extends Action {
  supervisors: KeyValuePair<string, string>[];
}

export function loadVisitsSuccess(visits: IVisit[]): ILoadVisitsSuccess {
  return {
    type: ActionTypes.LoadVisitsSuccess,
    visits
  }
}


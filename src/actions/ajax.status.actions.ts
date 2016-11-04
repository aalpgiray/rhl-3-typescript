import {Action} from "redux";
import {ActionTypes} from "../reducers/ajax.status.reducer";

export function beginAjaxCall(): Action {
  return {
    type: ActionTypes.BeginAjaxCall
  }
}

interface IAjaxCallFailed extends Action {
  error: string;
}

export function ajaxCallFailed(error: string): IAjaxCallFailed {
  return {
    type: ActionTypes.AjaxCallFailed,
    error
  }
}
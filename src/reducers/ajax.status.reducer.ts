import { Action } from "redux";
export const ActionTypes = {
  BeginAjaxCall: "BEGIN_AJAX_CALL",
  AjaxCallFailed: "AJAX_CALL_FAILED"
}

function actionTypeEndsInSuccess(type: string) {
  return type.substring(type.length - 8) == "_SUCCESS";
}

const defaultState = 0;

export const AjaxStatusReducer = (state = defaultState, action: Action) => {
  if (action.type == ActionTypes.BeginAjaxCall) {
    return state + 1;
  } else if (actionTypeEndsInSuccess(action.type) || action.type == ActionTypes.AjaxCallFailed) {
    return state - 1;
  }

  return state;
}
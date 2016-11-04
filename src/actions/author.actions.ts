import courseApi from '../api/mockAuthorApi'
import { Dispatch } from "redux";
import { ActionTypes, IAuthor } from '../reducers/author.reducer';
import { IAuthorAction } from "../reducers/author.reducer";
import { beginAjaxCall, ajaxCallFailed } from "./ajax.status.actions";

export function loadAuthors(): any {
  return (dispatch: Dispatch<any>) => {
    dispatch(beginAjaxCall())
    return courseApi.getAllAuthors().then((authors: IAuthor[]) => {
      dispatch(loadAuthorsSuccess(authors))
    }).catch(e => {
      dispatch(ajaxCallFailed(e));
      throw (e);
    }
      )
  };
}

export function loadAuthorsSuccess(authors: IAuthor[]): IAuthorAction {
  return {
    type: ActionTypes.LoadAuthorsSuccess,
    authors
  }
}
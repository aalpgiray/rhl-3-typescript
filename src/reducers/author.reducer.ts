import { IAuthor } from './author.reducer';
import { Action } from 'redux';

export const ActionTypes = {
  LoadAuthorsSuccess: "LOAD_AUTHORS_SUCCESS",
}

export interface IAuthorAction extends Action {
  authors: IAuthor[];
  type: typeof ActionTypes.LoadAuthorsSuccess
}

export interface IAuthor {
  id: string;
  firstName: string;
  lastName: string;
}

const defaultState: IAuthor[] = [];

export const AuthorReducer = (state = defaultState, action: IAuthorAction): IAuthor[] => {
  switch (action.type) {
    case ActionTypes.LoadAuthorsSuccess:
      return action.authors
    default:
      return state;
  }
}

import { ILoadCoursesSuccess, ICreateCourseSuccess, IUpdateCourseSuccess } from '../actions/course.actions';
import { Dictionary } from '../interfaces/common/object.interfaces';

export const ActionTypes = {
  LoadCoursesSuccess: "LOAD_COURSES_SUCCESS",
  CreateCourseSuccess: "CREATE_COURSE_SUCCESS",
  UpdateCourseSuccess: "UPDATE_COURSE_SUCCESS",
  DeleteCourse: "DELETE_COURSE",
  DeleteCourseSuccess: "DELETE_COURSE_SUCCESS",
  RollbackDeleteCourse: "ROLLBACK_DELETE_COURSE"
}

export interface ICourseAction extends ILoadCoursesSuccess, ICreateCourseSuccess, IUpdateCourseSuccess {
}

export interface ICourse extends Dictionary<string> {
  id: string,
  title: string,
  watchHref: string,
  authorId: string,
  length: string,
  category: string,
}

const defaultState: ICourse[] = [];

export const CourseReducer = (state = defaultState, action: ICourseAction): ICourse[] => {
  switch (action.type) {
    case ActionTypes.LoadCoursesSuccess:
      return [...action.courses];
    case ActionTypes.CreateCourseSuccess:
      return [
        ...state,
        Object.assign({}, action.course)
      ]
    case ActionTypes.UpdateCourseSuccess:
      return [
        ...state.filter(c => c.id !== action.course.id),
        Object.assign({}, action.course)
      ]
    case ActionTypes.DeleteCourse:
      return [
        ...state.filter(c => c.id != action.course.id)
      ]
    case ActionTypes.RollbackDeleteCourse:
      return [
        ...state,
        Object.assign({}, action.course)
      ]
    default:
      return state;
  }
}
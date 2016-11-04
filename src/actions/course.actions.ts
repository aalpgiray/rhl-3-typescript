import courseApi from '../api/mockCourseApi'
import { Dispatch, Action } from 'redux';
import { ActionTypes, ICourse } from '../reducers/course.reducer';
import { beginAjaxCall, ajaxCallFailed } from "./ajax.status.actions";

export function loadCourses(): any {
  return (dispatch: Dispatch<any>) => {
    dispatch(beginAjaxCall())
    return courseApi.getAllCourses().then((courses: ICourse[]) => {
      dispatch(loadCoursesSuccess(courses))
    }).catch(e => {
      dispatch(ajaxCallFailed(e));
      throw (e);
    }
      )
  };
}

export function saveCourse(course: ICourse): any {
  return (dispatch: Dispatch<any>) => {
    dispatch(beginAjaxCall())
    return courseApi.saveCourse(course).then((savedCourse: ICourse) => {
      course.id ?
        dispatch(updateCourseSuccess(savedCourse)) :
        dispatch(createCourseSuccess(savedCourse));
    }).catch(e => {
      dispatch(ajaxCallFailed(e));
      throw (e);
    }
      )
  };
}

export function deleteCourse(course: ICourse): any {
  return (dispatch: Dispatch<any>) => {
    dispatch(beginAjaxCall());
    dispatch(deleteCourseClicked(course));
    return courseApi.deleteCourse(course.id).then(() => {
      dispatch(deleteCourseSuccess(course));
    }).catch(e => {
      dispatch(ajaxCallFailed(e));
      throw (e);
    })
  };
}

export interface IUpdateCourseSuccess extends Action {
  course: ICourse;
}


export function updateCourseSuccess(course: ICourse): IUpdateCourseSuccess {
  return {
    type: ActionTypes.UpdateCourseSuccess,
    course
  }
}

export function deleteCourseClicked(course: ICourse): IUpdateCourseSuccess {
  return {
    type: ActionTypes.DeleteCourse,
    course
  }
}

export function rollbackDeleteCourse(course: ICourse): IUpdateCourseSuccess {
  return {
    type: ActionTypes.RollbackDeleteCourse,
    course
  }
}

export function deleteCourseSuccess(course: ICourse): IUpdateCourseSuccess {
  return {
    type: ActionTypes.DeleteCourseSuccess,
    course
  }
}

export interface ICreateCourseSuccess extends Action {
  course: ICourse;
}

export function createCourseSuccess(course: ICourse): ICreateCourseSuccess {
  return {
    type: ActionTypes.CreateCourseSuccess,
    course
  }
}

export interface ILoadCoursesSuccess extends Action {
  courses: ICourse[];
}

export function loadCoursesSuccess(courses: ICourse[]): ILoadCoursesSuccess {
  return {
    type: ActionTypes.LoadCoursesSuccess,
    courses
  }
}
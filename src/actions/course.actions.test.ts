import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

import {ActionTypes as CourseActionsTypes} from "../reducers/course.reducer";
import {ActionTypes as AjaxActionsTypes} from "../reducers/ajax.status.reducer";
import {loadCourses} from "./course.actions";
import expect from "expect";

const middlewarre = [thunk]
const mockStore = configureMockStore(middlewarre);

export const courseActionsTest = describe('Course Actions', () => {

  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {

      const expectedActions = [
        {
          type: AjaxActionsTypes.BeginAjaxCall
        },
        {
          type: CourseActionsTypes.LoadCoursesSuccess, body: {
          courses: [{id: 'clean-code', title: 'Clean Code'}]
        }
        }
      ];

      const store = mockStore({courses: []});
      store.dispatch(loadCourses()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(AjaxActionsTypes.BeginAjaxCall);
        expect(actions[1].type).toEqual(CourseActionsTypes.LoadCoursesSuccess);
        done();
      })

    });
})

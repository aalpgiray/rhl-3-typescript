import {store} from "./store";
import {ICourse} from "../reducers/course.reducer";
import {createCourseSuccess} from "../actions/course.actions";
import expect from "expect";

export const storeTest = describe('Store', () => {
  it('should handle creating course', () => {
    const course: ICourse = {
      authorId: "",
      watchHref: "",
      category: "",
      id: "",
      title: "Clean code",
      length: ""
    };

    // act
    const action: any = createCourseSuccess(course);
    store.dispatch(action);

    // assert
    const actual = store.getState().courses[0];
    const expected = {
      title: "Clean Code"
    };

    expect(actual.title).toEqual(expected.title);
  });
});


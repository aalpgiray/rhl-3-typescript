import { createCourseSuccess } from '../actions/course.actions';
import { ICourse, CourseReducer } from './course.reducer';
import expect from 'expect';


export const courseReducerTest = describe("Course Reducer Tests", () => {
    it("should ad course when passed CREATE_COURSE_SUCCESS", () => {

        const initialState: ICourse[] = [
            {
                id: "string",
                title: "old",
                watchHref: "string",
                authorId: "string",
                length: "string",
                category: "string",
            }
        ];

        const newCourse: ICourse = {
            id: "new",
            title: "new",
            watchHref: "string",
            authorId: "string",
            length: "string",
            category: "string",
        };

        const action: any = createCourseSuccess(newCourse)

        const newState = CourseReducer(initialState, action);

        expect(newState.length).toEqual(2);
        expect(newState[0].title).toEqual('old');
        expect(newState[1].title).toEqual('new');
    })
})
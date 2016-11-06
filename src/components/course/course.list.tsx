import { ICourse } from '../../reducers/course.reducer';
import { CourseListRow } from "./course.list.row"
import { MouseEvent } from 'react';
import { SelectInput } from '../common/SelectInput';
import { KeyValuePair } from '../../interfaces/common/object.interfaces';


interface ICourseList {
    courses: ICourse[];
    deleteCallback: (course: ICourse) => void;
    pagable?: boolean
    totalPages?: number;
    currentPage?: number;
    redirectToAddCoursePage: () => void;
}

export const CourseList = ({courses, deleteCallback, pagable, totalPages, currentPage, redirectToAddCoursePage}: ICourseList) => {
    return (
        <div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Length</th>
                        <th style={{ textAlign: "right" }}>
                            <input type="button"
                                value="Add Course"
                                class="btn btn-sm btn-primary"
                                onClick={redirectToAddCoursePage}
                                />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => <CourseListRow key={course.id} deleteCallback={deleteCallback} course={course} />)}
                </tbody>
            </table>
        </div >
    )
}
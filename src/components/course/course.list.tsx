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
}

export const CourseList = ({courses, deleteCallback, pagable, totalPages, currentPage}: ICourseList) => {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Length</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => <CourseListRow key={course.id} deleteCallback={deleteCallback} course={course} />)}
                </tbody>
            </table>
        </div >
    )
}
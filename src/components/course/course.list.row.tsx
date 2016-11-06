import { ICourse } from "../../reducers/course.reducer";
import { Link, browserHistory } from 'react-router';
import { MouseEvent } from 'react';

export const CourseListRow = ({course, deleteCallback}: { course: ICourse, deleteCallback: (course: ICourse) => void }) => {
    return (
        <tr onClick={() => {
            browserHistory.push('/ManageCourse/' + course.id);
        } } style={{ cursor: "pointer" }}>
            <td>{course.title}</td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
            <td style={{ textAlign: "right" }}>
                <a style={{ marginRight: "5px" }} class="btn btn-default btn-xs" href={course.watchHref} target="_blank">Watch</a>
                <button onClick={(e) => {
                    e.stopPropagation();
                    deleteCallback(course);
                } } class="btn btn-danger btn-xs">Delete</button>
            </td>
        </tr>
    )
}


import { ICourse } from "../../reducers/course.reducer";
import { Link } from 'react-router';
import { MouseEvent } from 'react';


export const CourseListRow = ({course, deleteCallback}: { course: ICourse, deleteCallback: (course: ICourse) => void }) => {
    return (
        <tr>
            <td><button onClick={() => { deleteCallback(course) } } class="btn btn-danger btn-xs">Delete</button></td>
            <td><a href={course.watchHref} target="_blank">Watch</a></td>
            <td><Link to={'/ManageCourse/' + course.id}>{course.title}</Link></td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
        </tr>
    )
}


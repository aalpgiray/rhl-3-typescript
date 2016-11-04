import { Component } from 'react';
import { IActionProps, ICoursePage } from './CoursesPage.interfaces';
import { browserHistory } from "react-router";
import { CourseList } from "../../components/course/course.list";
import * as toastr from 'toastr';
import { ICourse } from '../../reducers/course.reducer';
import autobind from 'autobind-decorator';

@autobind
export class CoursesPage extends Component<ICoursePage & IActionProps, any> {
  constructor() {
    super();
  }

  redirectToAddCoursePage() {
    browserHistory.push('/ManageCourse')
  }

  onCourseDelete(course: ICourse) {
    this.props.actions.deleteCourse(course).then(() => {
      toastr.success("Course Deleted");
    }).catch(error => {
      this.props.actions.rollbackDeleteCourse(course);
      toastr.error(error);
    })
  }

  render() {
    const {courses} = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
          value="Add Course"
          className="btn pull-right"
          onClick={this.redirectToAddCoursePage}
          />
        {courses.length > 0 && <CourseList pagable={true} currentPage={3} totalPages={10} courses={courses} deleteCallback={this.onCourseDelete} />}
      </div>
    );
  }
}
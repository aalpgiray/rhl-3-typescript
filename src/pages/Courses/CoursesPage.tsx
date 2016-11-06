import { Component } from 'react';
import { IActionProps, ICoursePage } from './CoursesPage.interfaces';
import * as toastr from 'toastr';
import { ICourse } from '../../reducers/course.reducer';
import autobind from 'autobind-decorator';
import { browserHistory } from 'react-router';
import { CourseList } from '../../components/course/course.list';

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
        <h1>Online Courses</h1>
        {courses.length > 0 && <CourseList redirectToAddCoursePage={this.redirectToAddCoursePage} pagable={true} currentPage={3} totalPages={10} courses={courses} deleteCallback={this.onCourseDelete} />}
      </div>
    );
  }
}
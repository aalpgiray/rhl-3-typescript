import React, { Component } from "react";
import { IManageCoursePageProps, IManageCoursePageState } from "./ManageCoursePage.interfaces";
import { IRouterContext } from "react-router";
import { CourseForm } from "../../components/course/course.form";
import * as toastr from "toastr";
import { ICourse } from "../../reducers/course.reducer";
import PageNotFound from '../404/index';
import autobind from 'autobind-decorator';

export const emptyCourseGeneraor = (): ICourse => {
  return {
    id: "",
    authorId: "",
    category: "",
    title: "",
    length: "",
    watchHref: ""
  }
}

@autobind
export class ManageCoursePage extends Component<IManageCoursePageProps, IManageCoursePageState> {
  constructor(props: IManageCoursePageProps) {
    super(props);

    this.state = {
      course: Object.assign({}, props.course || emptyCourseGeneraor()),
      errors: {},
      dirty: false
    }

  }

  context: IRouterContext;

  static contextTypes: React.ValidationMap<any> = {
    router: React.PropTypes.object.isRequired
  };

  routerWillLeave(nextLocation) {
    if (this.state.dirty) return "Will you leave without saving?";
  }

  componentDidMount() {
    (this.context.router as any).setRouteLeaveHook(this.props.route, this.routerWillLeave)
  }

  componentWillReceiveProps(nextProps: IManageCoursePageProps) {
    if (nextProps.course && this.state.course.id != nextProps.course.id)
      this.setState({ course: Object.assign({}, nextProps.course) })
  }

  updateCourseState(e: React.FormEvent) {
    const event = (e.target as HTMLInputElement);
    const field = event.name;
    let course = this.state.course;
    course[field] = event.value;
    return this.setState({ course: course, dirty: true });
  }

  isCourseFormValid() {
    let formIsValid = true;
    let errors: any = {};

    if (this.state.course.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState(Object.assign(this.state, { errors: errors }));
    return formIsValid;
  }

  saveCourse(e: React.MouseEvent) {
    e.preventDefault();

    if (!this.isCourseFormValid()) {
      return;
    }

    this.setState(Object.assign(this.state, { saving: true }));
    this.props.actions.save(this.state.course)
      .then(this.redirect)
      .catch(error => {
        this.setState(Object.assign(this.state, { saving: false }));
        this.setState(Object.assign(this.state, {
          errors: {
            title: error
          }
        }))
        toastr.error(error);
      });
  }

  redirect() {
    this.setState(Object.assign(this.state, { saving: false, dirty: false }));
    toastr.success('Course Saved');
    if (this.context.router) this.context.router.push('/Courses');
  }

  render() {
    let {authors, loading, courseNotFount} = this.props;
    let {course, saving, errors} = this.state;

    return (
      courseNotFount ?
        <PageNotFound />
        : <CourseForm
          course={course}
          allAuthors={authors}
          loading={loading}
          onChange={this.updateCourseState}
          onSave={this.saveCourse}
          saving={saving}
          errors={errors}
          />
    );
  }
}

ManageCoursePage.contextTypes = {
  router: React.PropTypes.object.isRequired
}
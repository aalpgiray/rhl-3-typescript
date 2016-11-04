import { connect } from 'react-redux';
import { IStore } from "../../store/store.interface";
import { Dispatch } from "redux";
import { IOwnProps, IStoreProps, IActionProps } from "./CoursesPage.interfaces";
import { CoursesPage } from "./CoursesPage";
import { ICourse } from '../../reducers/course.reducer';
import { deleteCourse, rollbackDeleteCourse } from '../../actions/course.actions';

const mapStateToProps = (state: IStore, ownProps: IOwnProps): IStoreProps => {
  return {
    courses: (() => {
      let sortedCourses = [...state.courses];
      return sortedCourses.sort((a, b) => {
        return a.title > b.title ? 1 : -1
      });
    })()
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IStore>): IActionProps => {
  return {
    actions: {
      deleteCourse: (course: ICourse) => dispatch(deleteCourse(course)),
      rollbackDeleteCourse: (course: ICourse) => dispatch(rollbackDeleteCourse(course))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
import { connect } from 'react-redux';
import { IStore } from "../../store/store.interface";
import { Dispatch } from "redux";
import { saveCourse } from "../../actions/course.actions";
import { IOwnProps, IStoreProps, IActionProps, IParams } from "./ManageCoursePage.interfaces";
import { ManageCoursePage, emptyCourseGeneraor } from './ManageCoursePage';
import { formatDataForDropDown } from '../../selectors/selectors';
import { withRouter } from 'react-router';


const mapStateToProps = (state: IStore, ownProps: IOwnProps): IStoreProps => {
  const {id} = (ownProps.params as IParams);
  return {
    course: state.courses.find(course => course.id == id) || emptyCourseGeneraor(),
    authors: formatDataForDropDown(state.authors, r => `${r.firstName} ${r.lastName}`, r => r.id),
    loading: state.ajaxCallsInProgress > 0,
    courseNotFount: id && state.courses.length > 0 && !state.courses.some(course => course.id == id)
  };
};

const mapDispatchToProps: (dispatch: Redux.Dispatch<IStore>) => IActionProps = (dispatch: Dispatch<IStore>): IActionProps => {
  return {
    actions: {
      save: (course) => dispatch(saveCourse(course))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ManageCoursePage));

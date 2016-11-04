import { ICourse } from '../../reducers/course.reducer';
import { deleteCourse, rollbackDeleteCourse } from '../../actions/course.actions';

export interface ICoursePage extends IStoreProps, IOwnProps, IActionProps {
}

export interface IStoreProps {
  courses: ICourse[];
}

export interface IOwnProps {

}

export interface IActionProps {
  actions?: {
    deleteCourse: (course: ICourse) => Promise<any>
    rollbackDeleteCourse: (course: ICourse) => void;
  };
}

import { IInjectedProps, IRoute } from 'react-router';
import { ICourse } from "../../reducers/course.reducer";
import { KeyValuePair } from '../../interfaces/common/object.interfaces';

export interface IManageCoursePageProps extends IStoreProps, IOwnProps, IActionProps {
}

export interface IManageCoursePageState {
  errors?: Object;
  course: ICourse;
  saving?: boolean;
  dirty?: boolean;
}

export interface IStoreProps {
  course: ICourse;
  loading: boolean;
  authors: KeyValuePair<string, string>[];
  courseNotFount: boolean;
}

export interface IOwnProps extends IInjectedProps {

}

export interface IActionProps {
  actions: {
    save(course: ICourse): Promise<any>
  };
}

export interface IParams {
  id: string;
}

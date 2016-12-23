import { IVisit } from '../../reducers/visit.reducer';
import { deleteVisit, rollbackDeleteVisit } from '../../actions/visit.actions';

export interface IVisitPage extends IStoreProps, IOwnProps, IActionProps {
}

export interface IStoreProps {
  visits: IVisit[];
}

export interface IOwnProps {

}

export interface IActionProps {
  actions?: {
    deleteVisit: (visit: IVisit) => Promise<any>
    rollbackDeleteVisit: (course: IVisit) => void;
  };
}

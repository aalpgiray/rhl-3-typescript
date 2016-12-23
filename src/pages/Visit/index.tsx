import { connect } from 'react-redux';
import { IStore } from "../../store/store.interface";
import { Dispatch } from "redux";
import { IOwnProps, IStoreProps, IActionProps } from "./VisitPage.interfaces";
import { VisitPage } from "./VisitPage";
import { IVisit } from '../../reducers/visit.reducer';
import { deleteVisit, rollbackDeleteVisit } from '../../actions/visit.actions';

const mapStateToProps = (state: IStore, ownProps: IOwnProps): IStoreProps => {
  return {
    visits: (() => {
      let sortedVisits = [...state.visits];
      return sortedVisits.sort((a, b) => {
        return a.visitTime < b.visitTime ? 1 : -1
      });
    })()
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IStore>): IActionProps => {
  return {
    actions: {
      deleteVisit: (visit: IVisit) => dispatch(deleteVisit(visit)),
      rollbackDeleteVisit: (visit: IVisit) => dispatch(rollbackDeleteVisit(visit))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VisitPage);
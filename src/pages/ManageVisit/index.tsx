import { connect } from 'react-redux';
import { IStore } from "../../store/store.interface";
import { Dispatch } from "redux";
import { saveVisit, loadCities, loadTowns, loadVisits, loadVillages, searchSupervisors } from '../../actions/visit.actions';
import { IOwnProps, IStoreProps, IActionProps, IParams } from "./ManageVisitPage.interfaces";
import { ManageVisitPage, emptyVisitGeneraor } from './ManageVisitPage';
import { formatDataForDropDown } from '../../selectors/selectors';
import { withRouter } from 'react-router';


const mapStateToProps = (state: IStore, ownProps: IOwnProps): IStoreProps => {
  const {id} = (ownProps.params as IParams);
  return {
    visit: state.visits.find(visit => visit.idVisit == id) || emptyVisitGeneraor(),
    cities: state.cities,
    towns: state.towns,
    villages: state.villages,
    supervisors: state.supervisors,
    loading: state.ajaxCallsInProgress > 0,
    courseNotFount: id && state.courses.length > 0 && !state.visits.some(visit => visit.idVisit == id)
  };
};

const mapDispatchToProps: (dispatch: Redux.Dispatch<IStore>) => IActionProps = (dispatch: Dispatch<IStore>): IActionProps => {
  return {
    actions: {
      save: (visit) => dispatch(saveVisit(visit)),
      getCities: () => dispatch(loadCities()),
      getTowns: (idCity: string) => dispatch(loadTowns(idCity)),
      getVillages: (idTown: string) => dispatch(loadVillages(idTown)),
      searchSupervisors: (searchTerm: string) => dispatch(searchSupervisors(searchTerm))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ManageVisitPage));

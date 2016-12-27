import React, { Component } from "react";
import { IManageVisitPageProps, IManageVisitPageState } from './ManageVisitPage.interfaces';
import { IRouterContext } from "react-router";
import { VisitForm } from "../../components/visit/visit.form";
import * as toastr from "toastr";
import { IVisit } from '../../reducers/visit.reducer';
import PageNotFound from '../404/index';
import autobind from 'autobind-decorator';
// import { visits } from '../../api/mockVisitApi';
import { searchSupervisors } from '../../actions/visit.actions';

export const emptyVisitGeneraor = (): IVisit => {
  return {
    idVisit: "00000000-0000-0000-0000-000000000000",
    visitedCityRef: 0,
    visitedCityName: "",
    visitedTownRef: 0,
    visitedTownName: "",
    visitedVillageRef: 0,
    visitedVillageName: "",
    visitedFirmRef: "",
    visitedFirmName: "",
    visitTime: new Date(),
    visitGroup: "",
    visitGroupRef: 0,
    visitDetails: "",
    idUserRef: "",
    userName: "",
    visitDuration: 60
  }
}

@autobind
export class ManageVisitPage extends Component<IManageVisitPageProps, IManageVisitPageState> {
  constructor(props: IManageVisitPageProps) {
    super(props);

    this.state = {
      visit: Object.assign({}, props.visit || emptyVisitGeneraor()),
      errors: {},
      dirty: false,
      disabled: false
    }

  }

  context: IRouterContext;

  static contextTypes: React.ValidationMap<any> = {
    router: React.PropTypes.object.isRequired
  };

  routerWillLeave(nextLocation) {
    if (this.state.dirty) {
      return "Kaydedilmemiş değişiklikler var. Çıkmak istediğinizden emin misiniz?";
    }
  }

  componentDidMount() {
    this.setState(Object.assign(this.state, { dirty: false }));
    this.props.actions.getCities();
    (this.context.router as any).setRouteLeaveHook(this.props.route, this.routerWillLeave)
  }

  componentWillReceiveProps(nextProps: IManageVisitPageProps) {
    if (nextProps.visit && this.state.visit.idVisit != nextProps.visit.idVisit)
      this.setState({ visit: Object.assign({}, nextProps.visit) })
    // this.setState(Object.assign(this.state, { disabled: nextProps.visit.visitDetails ? true : false }));
  }

  updateVisitState(event: any) {
    event = event.target;
    if (!event.value) {
      var errors = this.state.errors;
      errors[event.valueName] = "Bu alnın doldurulması zorunludur.";
      this.setState(Object.assign(this.state, { errors }));
    } else {
      var errors = this.state.errors;
      errors[event.valueName] = null;
      this.setState(Object.assign(this.state, { errors }));
    }
    const valueField = event.valueName;
    const labelField = event.labelName;
    let visit = this.state.visit;
    visit[valueField] = event.value;
    visit[labelField] = event.label;
    return this.setState({ visit: visit, dirty: true });
  }

  citySet(idCity: string) {
    this.setState(Object.assign(this.state, { visit: Object.assign(this.state.visit, { visitedTownName: "", visitedTownRef: "" }) }));
    this.props.actions.getTowns(idCity);
  }

  townSet(idTown: string) {
    this.setState(Object.assign(this.state, { visit: Object.assign(this.state.visit, { visitedVillageName: "", visitedVillageRef: "" }) }));
    this.props.actions.getVillages(idTown);
  }

  searchSupervisor(searchTerm: string) {
    this.props.actions.searchSupervisors(searchTerm);
  }

  isVisitFormValid() {
    let formIsValid = true;
    let errors: any = {};

    if (!this.state.visit.userName) {
      errors.idUserRef = 'Bu alnın doldurulması zorunludur.';
      formIsValid = false;
    }

    if (!this.state.visit.visitedFirmName) {
      errors.visitedFirmRef = 'Bu alnın doldurulması zorunludur.';
      formIsValid = false;
    }

    if (!this.state.visit.visitedCityName) {
      errors.visitedCityRef = 'Bu alnın doldurulması zorunludur.';
      formIsValid = false;
    }

    if (!this.state.visit.visitedTownName) {
      errors.visitedTownRef = 'Bu alnın doldurulması zorunludur.';
      formIsValid = false;
    }

    if (!this.state.visit.visitedVillageName) {
      errors.visitedVillageRef = 'Bu alnın doldurulması zorunludur.';
      formIsValid = false;
    }

    if (!this.state.visit.visitGroup) {
      errors.visitGroupRef = 'Bu alnın doldurulması zorunludur.';
      formIsValid = false;
    }

    this.setState(Object.assign(this.state, { errors: errors }));
    return formIsValid;
  }

  saveVisit(e: React.MouseEvent) {
    e.preventDefault();

    if (!this.isVisitFormValid()) {
      return;
    }

    this.setState(Object.assign(this.state, { saving: true }));
    this.props.actions.save(this.state.visit)
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
    toastr.success('Ziyaret Kaydı Eklendi');
    if (this.context.router) this.context.router.push('/Visit');
  }

  disabledChange() {
    this.setState(Object.assign(this.state, { disabled: false }));
  }

  render() {
    let {loading, courseNotFount} = this.props;
    let {visit, saving, errors} = this.state;

    return (
      courseNotFount ?
        <PageNotFound />
        : <VisitForm
          context={this.context}
          cities={this.props.cities}
          citySet={this.citySet}
          towns={this.props.towns}
          townSet={this.townSet}
          villages={this.props.villages}
          supervisors={this.props.supervisors}
          searchSupervisor={this.searchSupervisor}
          visit={visit}
          loading={loading}
          onChange={this.updateVisitState}
          onSave={this.saveVisit}
          saving={saving}
          errors={errors}
          disabled={this.state.disabled}
          disabledChange={this.disabledChange}
          />
    );
  }
}

ManageVisitPage.contextTypes = {
  router: React.PropTypes.object.isRequired
}
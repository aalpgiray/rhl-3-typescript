import React, { Component } from "react";
import { IManageVisitPageProps, IManageVisitPageState } from './ManageVisitPage.interfaces';
import { IRouterContext } from "react-router";
import { VisitForm } from "../../components/visit/visit.form";
import * as toastr from "toastr";
import { IVisit } from '../../reducers/visit.reducer';
import PageNotFound from '../404/index';
import autobind from 'autobind-decorator';
import { visits } from '../../api/mockVisitApi';
import { searchSupervisors } from '../../actions/visit.actions';

export const emptyVisitGeneraor = (): IVisit => {
  return {
    idVisit: "",
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
    visitDetails: "",
    idUserRef: "",
    userName: ""
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
      disabled: props.visit.visitDetails ? true : false
    }

  }

  context: IRouterContext;

  static contextTypes: React.ValidationMap<any> = {
    router: React.PropTypes.object.isRequired
  };

  routerWillLeave(nextLocation) {
    if (this.state.dirty) {
      debugger;
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
    this.setState(Object.assign(this.state, { disabled: nextProps.visit.visitDetails ? true : false }));
  }

  updateVisitState(e: React.FormEvent) {
    const event = (e.target as HTMLInputElement);
    if (!event.value) {
      var errors = this.state.errors;
      errors[event.name] = "Bu alnın doldurulması zorunludur.";
      this.setState(Object.assign(this.state, { errors }));
    } else {
      var errors = this.state.errors;
      errors[event.name] = null;
      this.setState(Object.assign(this.state, { errors }));
    }
    const field = event.name;
    let visit = this.state.visit;
    visit[field] = event.value;
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
      errors.userName = 'Bu alnın doldurulması zorunludur.';
      formIsValid = false;
    }

    if (!this.state.visit.visitedFirmName) {
      errors.visitedFirmName = 'Bu alnın doldurulması zorunludur.';
      formIsValid = false;
    }

    if (!this.state.visit.visitedCityName) {
      errors.visitedCityName = 'Bu alnın doldurulması zorunludur.';
      formIsValid = false;
    }

    if (!this.state.visit.visitedTownName) {
      errors.visitedTownName = 'Bu alnın doldurulması zorunludur.';
      formIsValid = false;
    }

    if (!this.state.visit.visitedVillageName) {
      errors.visitedVillageName = 'Bu alnın doldurulması zorunludur.';
      formIsValid = false;
    }

    if (!this.state.visit.visitGroup) {
      errors.visitGroup = 'Bu alnın doldurulması zorunludur.';
      formIsValid = false;
    }

    if (!this.state.visit.visitTime) {
      errors.visitTime = 'Bu alnın doldurulması zorunludur.';
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
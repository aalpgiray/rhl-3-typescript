import { IInjectedProps, IRoute } from 'react-router';
import { IVisit } from '../../reducers/visit.reducer';
import { KeyValuePair } from '../../interfaces/common/object.interfaces';

export interface IManageVisitPageProps extends IStoreProps, IOwnProps, IActionProps {
}

export interface IManageVisitPageState {
  errors?: Object;
  visit: IVisit;
  saving?: boolean;
  dirty?: boolean;
  disabled?: boolean;
}

export interface IStoreProps {
  visit: IVisit;
  cities: KeyValuePair<string, string>[];
  towns: KeyValuePair<string, string>[];
  villages: KeyValuePair<string, string>[];
  supervisors: KeyValuePair<string, string>[];
  loading: boolean;
  courseNotFount: boolean;
}

export interface IOwnProps extends IInjectedProps {

}

export interface IActionProps {
  actions: {
    save(visit: IVisit): Promise<any>
    getCities(): Promise<any>
    getTowns(idCity: string): Promise<any>
    getVillages(idTown: string): Promise<any>
    searchSupervisors(searchTerm: string): Promise<any>
  };
}

export interface IParams {
  id: string;
}

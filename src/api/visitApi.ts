import axios from 'axios';
import { KeyValuePair } from '../interfaces/common/object.interfaces';

export class VisitApi {
    static GetCities() {
        return axios.get<{ IdCity: number, CityName: string }[]>("http://localhost:5000/tid/supervision/GetCities").then(res => {
            return res.data.map((d) => {
                let city: KeyValuePair<string, string> = { Key: d.IdCity.toString(), Value: d.CityName };
                return city;
            });
        })
    }

    static GetTowns(idCity: string) {
        return axios.get<{ IdTown: number, TownName: string }[]>("http://localhost:5000/tid/supervision/GetTowns?idCityRef=" + idCity).then(res => {
            return res.data.map((d) => {
                let town: KeyValuePair<string, string> = { Key: d.IdTown.toString(), Value: d.TownName };
                return town;
            });
        })
    }

    static GetVillages(idTown: string) {
        return axios.get<{ IdVillage: number, VillageName: string }[]>("http://localhost:5000/tid/supervision/GetVillages?idTownRef=" + idTown).then(res => {
            return res.data.map((d) => {
                let village: KeyValuePair<string, string> = { Key: d.IdVillage.toString(), Value: d.VillageName };
                return village;
            });
        })
    }

    static SearchSupervisor(searchTerm: string) {
        return axios.get<{ TCKNO: string, UserName: string }[]>("http://localhost:5000/tid/supervision/SearchSupervisor?searchTerm=" + searchTerm).then(res => {
            return res.data.map((d) => {
                let user: KeyValuePair<string, string> = { Key:d.TCKNO, Value: d.UserName };
                return user;
            });
        })
    }
}
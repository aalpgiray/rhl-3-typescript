import axios from 'axios';
import { KeyValuePair } from '../interfaces/common/object.interfaces';
import { IVisit } from '../reducers/visit.reducer';

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
        return axios.get<{ IdUser: string, UserName: string }[]>("http://localhost:5000/tid/supervision/SearchSupervisor?searchTerm=" + searchTerm).then(res => {
            return res.data.map((d) => {
                let user: KeyValuePair<string, string> = { Key: d.IdUser, Value: d.UserName };
                return user;
            });
        })
    }

    static SearchFirm(searchTerm: string) {
        return axios.get<{ IdFirm: string, FirmName: string }[]>("http://localhost:5000/tid/supervision/SearchFirms?searchTerm=" + searchTerm).then(res => {
            return res.data.map((d) => {
                let user: KeyValuePair<string, string> = { Key: d.IdFirm, Value: d.FirmName };
                return user;
            });
        })
    }

    static GetVisits() {
        return axios.get<visitData[]>("http://localhost:5000/tid/supervision/GetVisits").then(res => {
            return res.data.map(v => {
                var visit: IVisit = {
                    idVisit: v.IdVisit,
                    visitedCityRef: v.IdCity,
                    visitedCityName: v.CityName,
                    visitedTownRef: v.IdTown,
                    visitedTownName: v.TownName,
                    visitedVillageRef: v.IdVillage,
                    visitedVillageName: v.VillageName,
                    visitedFirmRef: v.IdFirmRef,
                    visitedFirmName: v.f_Name,
                    idUserRef: v.IdUserRef_Supervisor,
                    userName: v.s_Name,
                    visitTime: new Date(v.DateVisit),
                    visitGroup: v.SupervisionTypeName,
                    visitGroupRef: v.IdSupervisionTypeRef,
                    visitDetails: v.SupervisorComment,
                    visitDuration: v.VisitDuration_min
                }
                return visit;
            });
        })
    }

    static saveVisit(visit: IVisit) {
        debugger;
        var updateVisit: visitData = {
            IdVisit: visit.idVisit,
            IdUserRef_Supervisor: visit.idUserRef,
            IdFirmRef: visit.visitedFirmRef,
            IdSupervisionTypeRef: visit.visitGroupRef,
            DateVisit: visit.visitTime.toISOString(),
            VisitDuration_min: visit.visitDuration,
            SupervisorComment: visit.visitDetails,
            Status: 1,
            VillageName: visit.visitedVillageName,
            IdVillage: visit.visitedVillageRef,
            TownName: visit.visitedTownName,
            IdTown: visit.visitedTownRef,
            CityName: visit.visitedCityName,
            IdCity: visit.visitedCityRef,
            f_IDNO: visit.visitedFirmRef,
            f_Phone: "",
            f_Name: visit.visitedFirmName,
            s_TCKNO: "",
            s_Phone: "",
            s_Name: visit.userName,
            SupervisionTypeName: visit.visitGroup
        }
        return axios.post("http://localhost:5000/tid/supervision/UpsertVisit", updateVisit).then(res => {
            return visit;
        })
    }

    static deleteVisit(visit: IVisit) {
        var updateVisit: visitData = {
            IdVisit: visit.idVisit,
            IdUserRef_Supervisor: visit.idUserRef,
            IdFirmRef: visit.visitedFirmRef,
            IdSupervisionTypeRef: visit.visitGroupRef,
            DateVisit: visit.visitTime.toISOString(),
            VisitDuration_min: visit.visitDuration,
            SupervisorComment: visit.visitDetails,
            Status: 2,
            VillageName: visit.visitedVillageName,
            IdVillage: visit.visitedVillageRef,
            TownName: visit.visitedTownName,
            IdTown: visit.visitedTownRef,
            CityName: visit.visitedCityName,
            IdCity: visit.visitedCityRef,
            f_IDNO: visit.visitedFirmRef,
            f_Phone: "",
            f_Name: visit.visitedFirmName,
            s_TCKNO: "",
            s_Phone: "",
            s_Name: visit.userName,
            SupervisionTypeName: visit.visitGroup
        }
        return axios.post("http://localhost:5000/tid/supervision/UpsertVisit", updateVisit).then(res => {
            return visit;
        })
    }
}

export interface visitData {
    IdVisit: string;
    IdUserRef_Supervisor: string;
    IdFirmRef: string;
    IdSupervisionTypeRef: number;
    DateVisit: string;
    VisitDuration_min: number;
    SupervisorComment: string;
    Status: number;
    VillageName: string;
    IdVillage: number;
    TownName: string;
    IdTown: number;
    CityName: string;
    IdCity: number;
    f_IDNO: string;
    f_Phone: string;
    f_Name: string;
    s_TCKNO: string;
    s_Phone: string;
    s_Name: string;
    SupervisionTypeName: string;
}
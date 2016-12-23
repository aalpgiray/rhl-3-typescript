import { FormEvent, MouseEvent, CSSProperties } from "react";
import { IVisit } from '../../reducers/visit.reducer';
import { formatDataForDropDown } from '../../selectors/selectors';
import { visits } from '../../api/mockVisitApi';
import { IRouterContext } from 'react-router';
import * as toastr from 'toastr';
import { TextInput } from '../common/TextInput';
import { KeyValuePair } from '../../interfaces/common/object.interfaces';
import {
    TimePicker,
    DatePicker,
    AutoComplete,
    TextField,
    RaisedButton,
} from 'material-ui';
import Select from 'react-select';

import 'react-select/dist/react-select.css';
import { VisitApi } from '../../api/VisitApi';

const Rgs = require('react-grid-system');


interface IVisitForm {
    visit: IVisit;
    cities: KeyValuePair<string, string>[];
    citySet: (idCity: string) => void;

    towns: KeyValuePair<string, string>[];
    townSet: (idTown: string) => void;

    villages: KeyValuePair<string, string>[];

    supervisors: KeyValuePair<string, string>[];
    searchSupervisor: (searchTerm: string) => void;

    onSave?: (e: MouseEvent) => void;
    onChange: (e: FormEvent) => void;
    saving?: boolean;
    loading: boolean;
    disabled?: boolean;
    context: IRouterContext;
    disabledChange: (e: MouseEvent) => void;
    errors?: {
        visitedFirmName: string;
        userName: string;
        visitedCityName: string;
        visitedTownName: string;
        visitedVillageName: string;
        visitGroup: string;
    };
}



// var cities = formatDataForDropDown(visits, p => p.visitedCityName, p => p.visitedCityName.toString()).sort((a, b) => a.Value > b.Value ? 1 : -1);
var firms = formatDataForDropDown(visits, p => p.visitedFirmName, p => p.visitedFirmName).sort((a, b) => a.Value > b.Value ? 1 : -1);;
// var users = formatDataForDropDown(visits, p => p.userName, p => p.userName).sort((a, b) => a.Value > b.Value ? 1 : -1);;
// var towns = formatDataForDropDown(visits, p => p.visitedTownName, p => p.visitedTownName.toString()).sort((a, b) => a.Value > b.Value ? 1 : -1);;
// var villages = formatDataForDropDown(visits, p => p.visitedVillageName, p => p.visitedVillageName.toString()).sort((a, b) => a.Value > b.Value ? 1 : -1);;
var visitGroups = formatDataForDropDown(visits, p => p.visitGroup, p => p.visitGroup).sort((a, b) => a.Value > b.Value ? 1 : -1);;

var temp = [];
// cities.forEach(c => {
//     if (!temp.some(t => t["Key"] == c.Key)) temp.push(c);
// });
// cities = temp;
temp = [];
firms.forEach(c => {
    if (!temp.some(t => t["Key"] == c.Key)) temp.push(c);
});
firms = temp;
// temp = [];
// users.forEach(c => {
//     if (!temp.some(t => t["Key"] == c.Key)) temp.push(c);
// });
// users = temp;
// temp = [];
// towns.forEach(c => {
//     if (!temp.some(t => t["Key"] == c.Key)) temp.push(c);
// });
// towns = temp;
// temp = [];
// villages.forEach(c => {
//     if (!temp.some(t => t["Key"] == c.Key)) temp.push(c);
// });
// villages = temp;
temp = [];
visitGroups.forEach(c => {
    if (!temp.some(t => t["Key"] == c.Key)) temp.push(c);
});
visitGroups = temp;
temp = [];







export const VisitForm = ({visit, onSave, onChange, saving, errors, loading, disabled, disabledChange, context, cities, citySet, towns, townSet, villages, supervisors, searchSupervisor}: IVisitForm) => {

    let timePicker: TimePicker;

    return (
        <Rgs.Container>
            <fieldset
                style={{ border: "none" }}
                disabled={saving || loading || disabled}>
                <div>
                    {//<AutoComplete
                        //     fullWidth={true}
                        //     openOnFocus={true}
                        //     filter={AutoComplete.caseInsensitiveFilter}
                        //     floatingLabelText={<span>Ziyaret Edilen İşletme <span style={{ color: "red" }}>*</span></span>}
                        //     dataSourceConfig={{ value: "Key", text: "Key" }}
                        //     dataSource={firms}
                        //     searchText={visit.visitedFirmName}
                        //     errorText={errors.visitedFirmName}
                        //     onBlur={(e) => {
                        //         let event: any = {
                        //             target: {
                        //                 name: "visitedFirmName",
                        //                 value: firms.some(f => f.Key == e.target.value) ? e.target.value : ""
                        //             }
                        //         }
                        //         onChange(event);
                        // } } />
                    }
                    <label style={{
                        userSelect: "none",
                        transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
                        lineHeight: "22px",
                        pointerEvents: "none",
                        color: "rgb(117, 117, 117)",
                        fontFamily: "roboto",
                        fontSize: "12px"
                    }}>Ziyaret Edilen İşletme <span style={{ color: "red" }}>*</span></label>
                    <Select.Async
                        loadOptions={(input, callback) => {
                            VisitApi.SearchSupervisor(input).then(res => {
                                callback(null, {
                                    options: res.map(r => { return { value: r.Key, label: r.Value } }),
                                });
                            })
                        } }
                        value={visit.visitedFirmName}
                        searchPromptText="Bir Sonuç Bulunamadı"
                        placeholder="Lütfen Seçiniz"
                        name="visitedFirmName"
                        />
                </div>
                <div style={{ marginTop: "10px" }}>
                    {
                        // <AutoComplete
                        //     fullWidth={true}
                        //     openOnFocus={true}
                        //     filter={AutoComplete.caseInsensitiveFilter}
                        //     floatingLabelText={<span>İşletme Danışmanı <span style={{ color: "red" }}>*</span></span>}
                        //     dataSourceConfig={{ value: "Key", text: "Value" }}
                        //     dataSource={supervisors}
                        //     errorText={errors.userName}
                        //     searchText={visit.userName}
                        //     onBlur={(e) => {
                        //         let event: any = {
                        //             target: {
                        //                 name: "userName",
                        //                 value: supervisors.some(u => u.Key == e.target.value) ? e.target.value : ""
                        //             }
                        //         }
                        //         onChange(event);
                        //     } } />
                    }
                    <label style={{
                        userSelect: "none",
                        transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
                        lineHeight: "22px",
                        pointerEvents: "none",
                        color: "rgb(117, 117, 117)",
                        fontFamily: "roboto",
                        fontSize: "12px"
                    }}>İşletme Danışmanı <span style={{ color: "red" }}>*</span></label>
                    <Select.Async
                        loadOptions={(input, callback) => {
                            VisitApi.SearchSupervisor(input).then(res => {
                                callback(null, {
                                    options: res.map(r => { return { value: r.Key, label: r.Value } }),
                                });
                            })
                        } }
                        value={visit.userName}
                        searchPromptText="Bir Sonuç Bulunamadı"
                        placeholder="Lütfen Seçiniz"
                        name="userName"
                        />
                </div>
                <div>
                    <AutoComplete
                        fullWidth={true}
                        openOnFocus={true}
                        filter={AutoComplete.caseInsensitiveFilter}
                        floatingLabelText={<span>Ziyaret Yapılan İl <span style={{ color: "red" }}>*</span></span>}
                        dataSourceConfig={{ value: "Key", text: "Value" }}
                        dataSource={cities}
                        errorText={errors.visitedCityName}
                        searchText={visit.visitedCityName}
                        onBlur={(e) => {
                            let event: any = {
                                target: {
                                    name: "visitedCityName",
                                    value: cities.some(u => u.Key == e.target.value) ? e.target.value : ""
                                }
                            }
                            onChange(event);
                        } }
                        onNewRequest={(chosenRequest: KeyValuePair<string, string>, index: number) => {
                            citySet(chosenRequest.Key);
                        } } />
                </div>
                <div>
                    <AutoComplete
                        fullWidth={true}
                        openOnFocus={true}
                        filter={AutoComplete.caseInsensitiveFilter}
                        floatingLabelText={<span>Ziyaret Yapılan İlçe <span style={{ color: "red" }}>*</span></span>}
                        dataSourceConfig={{ value: "Key", text: "Value" }}
                        dataSource={towns}
                        errorText={errors.visitedTownName}
                        searchText={visit.visitedTownName}
                        onBlur={(e) => {
                            let event: any = {
                                target: {
                                    name: "visitedTownName",
                                    value: towns.some(u => u.Key == e.target.value) ? e.target.value : ""
                                }
                            }
                            onChange(event);
                        } }
                        onNewRequest={(chosenRequest: KeyValuePair<string, string>, index: number) => {
                            townSet(chosenRequest.Key);
                        } } />
                </div>
                <div>
                    <AutoComplete
                        fullWidth={true}
                        openOnFocus={true}
                        filter={AutoComplete.caseInsensitiveFilter}
                        floatingLabelText={<span>Ziyaret Yapılan Mahalle/Köy <span style={{ color: "red" }}>*</span></span>}
                        dataSourceConfig={{ value: "Key", text: "Value" }}
                        dataSource={villages}
                        errorText={errors.visitedVillageName}
                        searchText={visit.visitedVillageName}
                        onBlur={(e) => {
                            let event: any = {
                                target: {
                                    name: "visitedVillageName",
                                    value: villages.some(u => u.Key == e.target.value) ? e.target.value : ""
                                }
                            }
                            onChange(event);
                        } } />
                </div>
                <div>
                    <AutoComplete
                        fullWidth={true}
                        openOnFocus={true}
                        filter={AutoComplete.caseInsensitiveFilter}
                        floatingLabelText={<span>Ziyaret Grubu <span style={{ color: "red" }}>*</span></span>}
                        dataSourceConfig={{ value: "Key", text: "Key" }}
                        dataSource={visitGroups}
                        errorText={errors.visitGroup}
                        searchText={visit.visitGroup}
                        onBlur={(e) => {
                            let event: any = {
                                target: {
                                    name: "visitGroup",
                                    value: visitGroups.some(u => u.Key == e.target.value) ? e.target.value : ""
                                }
                            }
                            onChange(event);
                        } } />
                </div>
                <div style={{ position: "relative", paddingTop: "25px" }}>
                    <label style={{
                        userSelect: "none",
                        position: "absolute",
                        top: "38px",
                        transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
                        zIndex: "1",
                        lineHeight: "22px",
                        transformOrigin: "left top 0px",
                        pointerEvents: "none",
                        color: "rgb(117, 117, 117)",
                        transform: "scale(0.75) translate(0px, -28px)",
                        fontFamily: "roboto",
                    }}>Ziyaret Zamanı <span style={{ color: "red" }}>*</span></label>
                    <div style={{ display: "flex" }}>
                        <DatePicker
                            textFieldStyle={{
                                width: "80px",
                                marginRight: "10px"
                            }}
                            okLabel="Tamam"
                            cancelLabel="İptal"
                            name="visitTime"
                            value={visit.visitTime}
                            disabled={saving || loading || disabled}
                            locale="tr-TR"
                            mode="landscape"
                            onChange={(e, date: Date) => {
                                date.setHours(visit.visitTime.getHours());
                                date.setMinutes(visit.visitTime.getMinutes());
                                let event: any = {
                                    target: {
                                        name: "visitTime",
                                        value: date
                                    }
                                }
                                onChange(event);

                                timePicker.openDialog();
                            } }
                            DateTimeFormat={Intl.DateTimeFormat}
                            />
                        <span style={{ lineHeight: "48px" }}>:</span>
                        <TimePicker
                            ref={(e: TimePicker) => {
                                timePicker = e;
                            } }
                            okLabel="Tamam"
                            cancelLabel="İptal"
                            value={visit.visitTime}
                            name="visitTime"
                            disabled={saving || loading || disabled}
                            textFieldStyle={{
                                width: "50px",
                                paddingLeft: "10px"
                            }}
                            onChange={(e, date: Date) => {
                                date.setDate(visit.visitTime.getDate());
                                date.setMonth(visit.visitTime.getMonth());
                                date.setFullYear(visit.visitTime.getFullYear());
                                let event: any = {
                                    target: {
                                        value: date,
                                        name: "visitTime"
                                    }
                                }
                                onChange(event);
                            } }
                            format="24hr" />
                    </div>
                </div>

                <div>
                    <TextField
                        fullWidth={true}
                        floatingLabelText="Ziyaret Detayı"
                        multiLine={true}
                        onChange={onChange}
                        name="visitDetails"
                        className="form-control"
                        value={visit.visitDetails}
                        rows={3} />
                </div>

                <RaisedButton
                    style={{ display: saving ? "none" : "inline-block" }}
                    label="İptal"
                    disabled={saving}
                    secondary={true}
                    onTouchTap={() => {
                        context.router.goBack();
                    } }
                    />
                <div style={{ float: "right" }}>
                    <RaisedButton
                        style={{ marginRight: "10px", display: saving ? "none" : "inline-block" }}
                        disabled={!disabled}
                        label={!disabled ? 'Düzenleniyor...' : 'Düzenle'}
                        onTouchTap={disabledChange}
                        />
                    <RaisedButton
                        disabled={saving || disabled || (() => {

                            if (errors.visitedFirmName) return true;
                            if (errors.userName) return true;
                            if (errors.visitedCityName) return true;
                            if (errors.visitedTownName) return true;
                            if (errors.visitedVillageName) return true;
                            if (errors.visitGroup) return true;

                            return false;
                        })()}
                        label={saving ? 'Kaydediliyor...' : 'Kaydet'}
                        onTouchTap={onSave}
                        primary={true}
                        />
                </div>
            </fieldset>

        </Rgs.Container>
    );
};

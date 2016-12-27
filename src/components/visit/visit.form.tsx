import { FormEvent, MouseEvent, CSSProperties } from "react";
import { IVisit } from '../../reducers/visit.reducer';
import { formatDataForDropDown } from '../../selectors/selectors';
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

import { VisitApi } from '../../api/VisitApi';

const Rgs = require('react-grid-system');

const requiredStyle: CSSProperties = {
    fontSize: "12px",
    color: "#ef5350",
    textIndent: "2px"
}

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
        visitedFirmRef: string;
        idUserRef: string;
        visitedCityRef: string;
        visitedTownRef: string;
        visitedVillageRef: string;
        visitGroupRef: string;
    };
}

export const VisitForm = ({visit, onSave, onChange, saving, errors, loading, disabled, disabledChange, context, cities, citySet, towns, townSet, villages, supervisors, searchSupervisor}: IVisitForm) => {

    let timePicker: TimePicker;

    return (
        <Rgs.Container>
            <fieldset
                style={{
                    border: "none",
                    borderRadius: "0 0 6px 6px",
                    background: "white",
                    padding: "40px"
                }}
                disabled={saving || loading || disabled}>
                <div>
                    <label style={{
                        userSelect: "none",
                        transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
                        lineHeight: "22px",
                        pointerEvents: "none",
                        color: "rgb(117, 117, 117)",
                        fontFamily: "roboto",
                        fontSize: "12px"
                    }}>Tarımsal İşletme Sahibi <span style={{ color: "red" }}>*</span></label>
                    <Select.Async
                        clearable={false}
                        loadOptions={(input: string, callback) => {
                            if (input.length >= 4) {
                                VisitApi.SearchFirm(input).then(res => {
                                    callback(null, {
                                        options: res.map(r => { return { value: r.Key, label: r.Value } }),
                                    });
                                })
                            } else {
                                callback(null, {
                                    options: []
                                });
                            }
                        } }
                        onChange={(e: { value: string, label: string }) => {
                            let event: any = {
                                target: {
                                    valueName: "visitedFirmRef",
                                    labelName: "visitedFirmName",
                                    value: e.value,
                                    label: e.label.substring(0, e.label.length - 14)
                                }
                            }
                            onChange(event);
                        } }
                        options={visit.visitedFirmName ? [{ value: visit.visitedFirmRef, label: visit.visitedFirmName }] : []}
                        value={visit.visitedFirmRef}
                        noResultsText="Bir sonuç bulunamadı. En az dört karakter giriniz."
                        searchPromptText="Bir sonuç bulunamadı. En az dört karakter giriniz."
                        placeholder="Lütfen Seçiniz"
                        name="visitedFirmRef"
                        />
                    {errors.visitedFirmRef && <span style={requiredStyle}>Bu alanın doldurulması gerekmektedir.</span>}
                </div>
                <div style={{ marginTop: "10px" }}>
                    <label style={{
                        userSelect: "none",
                        transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
                        lineHeight: "22px",
                        pointerEvents: "none",
                        color: "rgb(117, 117, 117)",
                        fontFamily: "roboto",
                        fontSize: "12px"
                    }}>TID Personeli <span style={{ color: "red" }}>*</span></label>
                    <Select.Async
                        clearable={false}
                        loadOptions={(input: string, callback) => {
                            if (input.length >= 4) {
                                VisitApi.SearchSupervisor(input).then(res => {
                                    callback(null, {
                                        options: res.map(r => { return { value: r.Key, label: r.Value } }),
                                    });
                                })
                            } else {
                                callback(null, {
                                    options: []
                                });
                            }
                        } }
                        onChange={(e: { value: string, label: string }) => {
                            let event: any = {
                                target: {
                                    valueName: "idUserRef",
                                    labelName: "userName",
                                    value: e.value,
                                    label: e.label.substring(0, e.label.length - 14)
                                }
                            }
                            onChange(event);
                        } }
                        options={visit.idUserRef ? [{ value: visit.idUserRef, label: visit.userName }] : []}
                        value={visit.idUserRef}
                        loadingPlaceholder="Yükleniyor..."
                        noResultsText="Bir sonuç bulunamadı. En az bir karakter giriniz."
                        searchPromptText="Bir sonuç bulunamadı.En az bir karakter giriniz."
                        placeholder="Lütfen Seçiniz"
                        name="idUserRef"
                        />
                    {errors.idUserRef && <span style={requiredStyle}>Bu alanın doldurulması gerekmektedir.</span>}
                </div>
                <div style={{ marginTop: "10px" }}>
                    <label style={{
                        userSelect: "none",
                        transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
                        lineHeight: "22px",
                        pointerEvents: "none",
                        color: "rgb(117, 117, 117)",
                        fontFamily: "roboto",
                        fontSize: "12px"
                    }}>Ziyaret Yapılan İl <span style={{ color: "red" }}>*</span></label>
                    <Select
                        clearable={false}
                        name="visitedCityRef"
                        noResultsText="Bir sonuç bulunamadı."
                        placeholder="Lütfen Seçiniz"
                        options={cities.map(c => { return { value: c.Key, label: c.Value } })}
                        value={visit.visitedCityRef.toString()}
                        onChange={(e: { value: string, label: string }) => {
                            let event: any = {
                                target: {
                                    valueName: "visitedCityRef",
                                    labelName: "visitedCityName",
                                    value: e.value,
                                    label: e.label
                                }
                            }
                            onChange(event);
                            citySet(e.value);
                        } }
                        />
                    {errors.visitedCityRef && <span style={requiredStyle}>Bu alanın doldurulması gerekmektedir.</span>}
                </div>
                <div style={{ marginTop: "10px" }}>
                    <label style={{
                        userSelect: "none",
                        transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
                        lineHeight: "22px",
                        pointerEvents: "none",
                        color: "rgb(117, 117, 117)",
                        fontFamily: "roboto",
                        fontSize: "12px"
                    }}>Ziyaret Yapılan İlçe <span style={{ color: "red" }}>*</span></label>
                    <Select
                        clearable={false}
                        name="visitedTownRef"
                        noResultsText="Bir sonuç bulunamadı. Lütfen önce il seçiniz."
                        placeholder="Lütfen Seçiniz"
                        options={towns.length > 0 ? towns.map(c => { return { value: c.Key, label: c.Value } }) : (visit.visitedTownRef ? [{ value: visit.visitedTownRef.toString(), label: visit.visitedTownName }] : [])}
                        value={visit.visitedTownRef.toString()}
                        onChange={(e: { value: string, label: string }) => {
                            let event: any = {
                                target: {
                                    valueName: "visitedTownRef",
                                    labelName: "visitedTownName",
                                    value: e.value,
                                    label: e.label
                                }
                            }
                            onChange(event);
                            townSet(e.value);
                        } }
                        />
                    {errors.visitedTownRef && <span style={requiredStyle}>Bu alanın doldurulması gerekmektedir.</span>}
                </div>
                <div style={{ marginTop: "10px" }}>
                    <label style={{
                        userSelect: "none",
                        transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
                        lineHeight: "22px",
                        pointerEvents: "none",
                        color: "rgb(117, 117, 117)",
                        fontFamily: "roboto",
                        fontSize: "12px"
                    }}>Ziyaret Yapılan Mahalle/Köy <span style={{ color: "red" }}>*</span></label>
                    <Select
                        clearable={false}
                        name="visitedVillageRef"
                        noResultsText="Bir sonuç bulunamadı. Lütfen önce ilçe seçiniz."
                        placeholder="Lütfen Seçiniz"
                        options={villages.length > 0 ? villages.map(c => { return { value: c.Key, label: c.Value } }) : (visit.visitedVillageRef ? [{ value: visit.visitedVillageRef.toString(), label: visit.visitedVillageName }] : [])}
                        value={visit.visitedVillageRef.toString()}
                        onChange={(e: { value: string, label: string }) => {
                            let event: any = {
                                target: {
                                    valueName: "visitedVillageRef",
                                    labelName: "visitedVillageName",
                                    value: e.value,
                                    label: e.label
                                }
                            }
                            onChange(event);
                        } }
                        />
                    {errors.visitedVillageRef && <span style={requiredStyle}>Bu alanın doldurulması gerekmektedir.</span>}
                </div>
                <div style={{ marginTop: "10px" }}>
                    <label style={{
                        userSelect: "none",
                        transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
                        lineHeight: "22px",
                        pointerEvents: "none",
                        color: "rgb(117, 117, 117)",
                        fontFamily: "roboto",
                        fontSize: "12px"
                    }}>İşletme Faaliyet Konusu <span style={{ color: "red" }}>*</span></label>
                    <Select
                        clearable={false}
                        name="visitGroupRef"
                        noResultsText="Bir sonuç bulunamadı."
                        placeholder="Lütfen Seçiniz"
                        options={[{ value: 1, label: "HAYVANCILIK" }, { value: 2, label: "BİTKİSEL" }]}
                        value={visit.visitGroupRef}
                        style={{ zIndex: "900" }}
                        onChange={(e: { value: string, label: string }) => {
                            let event: any = {
                                target: {
                                    valueName: "visitGroupRef",
                                    labelName: "visitGroup",
                                    value: e.value,
                                    label: e.label
                                }
                            }
                            onChange(event);
                        } }
                        />
                    {errors.visitGroupRef && <span style={requiredStyle}>Bu alanın doldurulması gerekmektedir.</span>}
                </div>
                <div style={{ position: "relative", paddingTop: "25px" }}>
                    <label style={{
                        userSelect: "none",
                        position: "absolute",
                        top: "38px",
                        transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
                        lineHeight: "22px",
                        transformOrigin: "left top 0px",
                        pointerEvents: "none",
                        color: "rgb(117, 117, 117)",
                        transform: "scale(0.75) translate(0px, -28px)",
                        fontFamily: "roboto",
                    }}>Ziyaret Başlangıç Zamanı <span style={{ color: "red" }}>*</span></label>
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
                            maxDate={new Date()}
                            onChange={(e, date: Date) => {
                                date.setHours(visit.visitTime.getHours());
                                date.setMinutes(visit.visitTime.getMinutes());
                                let event: any = {
                                    target: {
                                        valueName: "visitTime",
                                        value: date,
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
                                        valueName: "visitTime",
                                        value: date,
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
                        floatingLabelStyle={{ zIndex: "0" }}
                        floatingLabelText="Ziyaret Süresi (dk)"
                        onChange={(e) => {
                            let event: any = {
                                target: {
                                    valueName: "visitDuration",
                                    value: e.target.value,
                                }
                            }
                            onChange(event);
                        } }
                        name="visitDuration"
                        className="form-control"
                        value={visit.visitDuration} />
                </div>
                <div>
                    <TextField
                        fullWidth={true}
                        floatingLabelText="Ziyaret Konusu ve İçeriği"
                        multiLine={true}
                        type={"number"}
                        onChange={(e) => {
                            let event: any = {
                                target: {
                                    valueName: "visitDetails",
                                    value: e.target.value,
                                }
                            }
                            onChange(event);
                        } }
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

                            if (errors.visitedFirmRef) return true;
                            if (errors.idUserRef) return true;
                            if (errors.visitedCityRef) return true;
                            if (errors.visitedTownRef) return true;
                            if (errors.visitedVillageRef) return true;
                            if (errors.visitGroupRef) return true;

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

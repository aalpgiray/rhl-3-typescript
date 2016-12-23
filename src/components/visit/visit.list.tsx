import { IVisit } from '../../reducers/visit.reducer';
import { VisitListRow } from "./visit.list.row"
import { MouseEvent } from 'react';
import { SelectInput } from '../common/SelectInput';
import { KeyValuePair } from '../../interfaces/common/object.interfaces';
import {
    Table,
    TableHeader,
    TableRow,
    TableBody,
    TableRowColumn,
    TableHeaderColumn,
    FlatButton,
    RaisedButton
} from 'material-ui'

interface IVisitList {
    visits: IVisit[];
    deleteCallback: (visit: IVisit) => void;
    pagable?: boolean
    totalPages?: number;
    currentPage?: number;
    redirectToAddVisitPage: () => void;
}

export const VisitList = ({visits, deleteCallback, pagable, totalPages, currentPage, redirectToAddVisitPage}: IVisitList) => {
    return (
        <div>
            <Table class="table table-hover">
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                    >
                    <TableRow>
                        <TableHeaderColumn>İşletme Danışmanı</TableHeaderColumn>
                        <TableHeaderColumn>Ziyaret Edilen İşletme</TableHeaderColumn>
                        <TableHeaderColumn>Ziyaret Yapılan İl</TableHeaderColumn>
                        <TableHeaderColumn>Ziyaret Yapılan İlçe</TableHeaderColumn>
                        <TableHeaderColumn>Ziyaret Yapılan Mahalle/Köy</TableHeaderColumn>
                        <TableHeaderColumn>Ziyaret Grubu</TableHeaderColumn>
                        <TableHeaderColumn>Ziyaret Tarihi</TableHeaderColumn>
                        <TableHeaderColumn style={{ textAlign: "right" }}>
                            <RaisedButton
                                label="Ziyaret Ekle"
                                primary={true}
                                fullWidth={true}
                                onTouchTap={redirectToAddVisitPage}
                                />
                        </TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {visits.map(visit => <VisitListRow key={visit.idVisit} deleteCallback={deleteCallback} visit={visit} />)}
                </TableBody>
            </Table>
        </div >
    )
}
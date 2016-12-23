import { IVisit } from '../../reducers/visit.reducer';
import { Link, browserHistory } from 'react-router';
import { MouseEvent } from 'react';
import {
    Table,
    TableHeader,
    TableRow,
    TableBody,
    TableRowColumn,
    TableHeaderColumn,
    FlatButton,
    RaisedButton
} from 'material-ui';

export const VisitListRow = ({visit, deleteCallback}: { visit: IVisit, deleteCallback: (visit: IVisit) => void }) => {
    return (
        <TableRow onTouchTap={() => {
            browserHistory.push('/ManageVisit/' + visit.idVisit);
        } } style={{ cursor: "pointer" }}>
            <TableRowColumn>{visit.userName}</TableRowColumn>
            <TableRowColumn>{visit.visitedFirmName}</TableRowColumn>
            <TableRowColumn>{visit.visitedCityName}</TableRowColumn>
            <TableRowColumn>{visit.visitedTownName}</TableRowColumn>
            <TableRowColumn>{visit.visitedVillageName}</TableRowColumn>
            <TableRowColumn>{visit.visitGroup}</TableRowColumn>
            <TableRowColumn><b>{`${visit.visitTime.toLocaleDateString("tr-TR")}`}</b> {`${visit.visitTime.toLocaleTimeString("tr-TR").substring(0, 5)}`}</TableRowColumn>
            <TableRowColumn style={{ textAlign: "right" }}>
                <FlatButton
                    style={{ marginRight: "10px" }}
                    label="DÜZENLE"
                    primary={true}
                    onTouchTap={(e) => {
                        browserHistory.push('/ManageVisit/' + visit.idVisit);
                    } } />
                <FlatButton
                    label="SİL"
                    secondary={true}
                    onTouchTap={(e) => {
                        e.stopPropagation();
                        deleteCallback(visit);
                    } } />
            </TableRowColumn>
        </TableRow>
    )
}
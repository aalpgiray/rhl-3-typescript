import { Component } from 'react';
import { IActionProps, IVisitPage } from './VisitPage.interfaces';
import * as toastr from 'toastr';
import { IVisit } from '../../reducers/visit.reducer';
import autobind from 'autobind-decorator';
import { browserHistory } from 'react-router';
import { VisitList } from '../../components/visit/visit.list';

@autobind
export class VisitPage extends Component<IVisitPage & IActionProps, any> {
  constructor() {
    super();
  }

  redirectToAddVisitPage() {
    browserHistory.push('/ManageVisit')
  }

  onVisitDelete(visit: IVisit) {
    this.props.actions.deleteVisit(visit).then(() => {
      toastr.success("Ziyaret Silindi");
    }).catch(error => {
      this.props.actions.rollbackDeleteVisit(visit);
      toastr.error(error);
    })
  }

  render() {
    const {visits} = this.props;

    return (
      <div>
        {visits.length > 0 ?
          <VisitList
            redirectToAddVisitPage={this.redirectToAddVisitPage}
            pagable={true}
            currentPage={3}
            totalPages={10}
            visits={visits}
            deleteCallback={this.onVisitDelete} />
          : <h2 style={{ fontFamily: "roboto", fontWeight: "300", margin: "20px 40px" }}>Ziyaret Kayıtları Yüklenirlen Lütfen Bekleyin...</h2>
        }
      </div>
    );
  }
}
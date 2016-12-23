import { ICourse } from "../reducers/course.reducer";
import { IAuthor } from "../reducers/author.reducer";
import { IVisit } from '../reducers/visit.reducer';
import { KeyValuePair } from '../interfaces/common/object.interfaces';

/*  This is implemented to cover root reducer type-safety
 *
 */
export interface IStoreDynamic {
  courses: any;
  visits: any;
  authors: any;
  ajaxCallsInProgress: any;
  cities: any;
  towns: any;
  supervisors: any;
  villages: any;
}
/*  IStoreDynamic must be have same properties with this interface
 *
 */
export interface IStore extends IStoreDynamic {
  courses: ICourse[];
  visits: IVisit[];
  authors: IAuthor[];
  towns: KeyValuePair<string, string>[];
  cities: KeyValuePair<string, string>[];
  villages: KeyValuePair<string, string>[];
  supervisors: KeyValuePair<string, string>[];

  ajaxCallsInProgress: number;
}

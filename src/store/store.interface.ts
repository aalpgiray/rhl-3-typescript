import { ICourse } from "../reducers/course.reducer";
import { IAuthor } from "../reducers/author.reducer";

/*  This is implemented to cover root reducer type-safety
 *
 */
export interface IStoreDynamic {
  courses: any;
  authors: any;
  ajaxCallsInProgress: any;
}
/*  IStoreDynamic must be have same properties with this interface
 *
 */
export interface IStore extends IStoreDynamic {
  courses: ICourse[];
  authors: IAuthor[];
  ajaxCallsInProgress: number;
}

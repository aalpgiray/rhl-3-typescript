import { store } from './store/store';
import { loadCourses } from './actions/course.actions';
import { loadAuthors } from './actions/author.actions';

export function StartupConfiguration() {
    store.dispatch(loadCourses());
    store.dispatch(loadAuthors());
}
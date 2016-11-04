import App from "../App";

export interface ILink {
    path: string;
    name?: string;
}

interface IRoute extends ILink {
    getComponent(location: any, callback: any): void
}

function errorLoading(cb: any, err: any) {
    System.import(`./404/index`)
        .then(loadRoute(cb))
        .catch(err => errorLoading(cb, err));
}

function loadRoute(cb: any) {
    return (module: any) => cb(null, module.default);
}

const routeMatcher = (path: string): IRoute => {
    return {
        path: path,
        getComponent(location, cb) {
            let path = "";
            switch (location.location.pathname) {
                case "/":
                    path = "/Home"
                    break;
                default:
                    path = location.location.pathname
                    break;
            }
            System.import(`./${path.split('/')[1]}/index`)
                .then(loadRoute(cb))
                .catch(err => errorLoading(cb, err));
        }
    }
}

const routes = {
    component: App,
    childRoutes: [
        routeMatcher("/*/:id"),
        routeMatcher("/*"),
    ]
}

export default routes;
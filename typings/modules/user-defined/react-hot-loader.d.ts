

interface NodeModule{
  hot:any;
}

declare var module:NodeModule;

declare module "react-hot-loader" {
    export var AppContainer:any;
}

// declare function require(url:string):any
